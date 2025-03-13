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

"use client"
import { doc, getDoc,setDoc } from "firebase/firestore"
import { db } from "@/config/FirebaseConfig"
import { NextResponse } from "next/server";

export async function POST(req) {
    const {userEmail, userName}=await req.json()
    try {
        const docRef=doc(db,"users",userEmail);
        const docSnap= await getDoc(docRef);
        if(docSnap.exists()){
            return NextResponse.json(docSnap.data())
        }
        else{
            const data={
                name:userName,
                email:userEmail,
                credits:5
            }
            await setDoc(doc(db,"users",userEmail),{
                ...data
            })

            return NextResponse.json(data)
        }
    } catch (e) {
        
    }
}
