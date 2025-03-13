// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { AILogoPrompt } from "@/config/AiModel"
import { db } from "@/config/FirebaseConfig"
import axios from "axios"
import { doc, setDoc, updateDoc } from "firebase/firestore"
import { NextResponse } from "next/server"
import Replicate from "replicate";

export async function POST(req) {
    const { prompt, email, title, desc, type, userCredits } = await req.json()
    let base64ImageWithMime = ''
    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
    });

    try {
        const AiPromptResult = await AILogoPrompt.sendMessage(prompt)
        console.log(JSON.parse(AiPromptResult.response.text()).prompt)
        const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt

        if (type == 'Free') {
            const response = await axios.post('https://router.huggingface.co/hf-inference/models/strangerzonehf/Flux-Midjourney-Mix-LoRA',
                AIPrompt,
                {

                    headers: {
                        Authorization: "Bearer " + process.env.HUGGING_FACE_API_KEY,
                        "Content-Type": "application/json",
                    },
                    responseType: "arraybuffer"
                }
            )
            const buffer = Buffer.from(response.data, "binary")
            const base64Image = buffer.toString("base64")

            base64ImageWithMime = `data:image/png;base64,${base64Image}`
        }
        else {
            const output = await replicate.run(
                "bytedance/hyper-flux-8step:81946b1e09b256c543b35f37333a30d0d02ee2cd8c4f77cd915873a1ca622bad",
                {
                    input: {
                        prompt: { inputs: AIPrompt }                        ,
                        num_outputs: 1,
                        aspect_ratio: "1:1",
                        output_format: "png",
                        guidance_scale: 3.5,
                        output_quality: 80,
                        num_inference_steps: 8
                    }
                }
            );
            console.log(output);
            base64ImageWithMime=await ConvertImageToBase64(output)

            const docRef=doc(db,'users',email)
            await updateDoc(docRef,{
                credits:Number(userCredits)-1
            })
        }
        try {
            await setDoc(doc(db, "users", email, "logos", Date.now().toString()), {
                image: base64ImageWithMime,
                title: title,
                desc: desc
            })
        } catch (e) {

        }
        return NextResponse.json({ image: base64ImageWithMime })
    } catch (e) {
        return NextResponse.json({ error: e })
    }
}

async function ConvertImageToBase64(image) {
    const resp=await axios.get(image,{responseType:'arraybuffer'})
    const base64ImageRaw=Buffer.from(resp.data).toString('base64')
    return  `data:image/png;base64,${base64ImageRaw}`
}