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
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../_contex/userDetailContext'
import Prompt from '../_data/Prompt'
import Image from 'next/image'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { DownloadIcon, LayoutDashboard, LoaderIcon } from 'lucide-react'
import { toast } from 'sonner'
import Lookup from '../_data/Lookup'
import Link from 'next/link'

const GenerateLogo = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext)
  const [formData, setFormData] = useState()
  const [loading, setLoading] = useState(false)
  const [logoImage, setLogoImage] = useState()
  const searchParams=useSearchParams()
  const modelType=searchParams.get('type')

  useEffect(() => {
    if (typeof window !=undefined && userDetail?.email) {
      const storage = localStorage.getItem('formData')
      if (storage) {
        setFormData(JSON.parse(storage));
        console.log(JSON.parse(storage))
      }
    }
  }, [userDetail])

  useEffect(() => {
    if (formData?.title) {
      GenerateAILogo();
    }
  }, [formData])

  useEffect(()=>{
    if (typeof window !=undefined && logoImage) {
      localStorage.clear()
    }
  },[logoImage])

  const GenerateAILogo = async () => {

    if (modelType!='Free'&&userDetail?.credits<=0) {
      toast('Not Enought Credits!!!')
      return ;
    }
    setLoading(true)
    const PROMPT = Prompt.LOGO_PROMPT
      .replace('{logoTitle}', formData?.title)
      .replace('{logoDesc}', formData?.desc)
      .replace('{logoColor}', formData.pallete)
      .replace('{logoDesign}', formData?.design?.title)
      .replace('{logoPrompt}', formData?.design?.prompt);

    console.log(PROMPT)

    const result = await axios.post('/api/ai-logo-model',
      {
        prompt: PROMPT,
        email: userDetail?.email,
        title: formData.title,
        desc: formData.desc,
        type:modelType,
        userCredits:userDetail?.credits
      })
    console.log(result?.data)
    setLogoImage(result.data?.image)
    setLoading(false)

  }

  const onDownload=()=>{
    const imageWindow = window.open();
      imageWindow.document.write(`<img src="${logoImage}" alt="Base64 Image" />`)
  }
  return (
    <div className='mt-16 flex flex-col items-center justify-center'>
      {/* <h2>{loading ? 'Loading...' : ''}</h2> */}

      <h2 className='font-bold text-3xl text-pink-500'>{Lookup.LoadingWaitTitle}</h2>
      {loading&& <div className='flex flex-col items-center mt-2'>
        <p className='text-xl text-gray-500'>{Lookup.LoadingWaitDesc}</p>
        <LoaderIcon className='animate-spin'/>
        <Image src={'/loading.gif'} alt='loading' width={200} height={200}/>
        <h2 className='mt-2 font-medium text-2xl text-gray-500'>Do Not Refresh</h2>
        </div>}

      {logoImage&&
      <div className='mt-5'>
      <Image src={logoImage} alt="logo" width={300} height={300} className='rounded-xl' />

      <div className='mt-4 flex items-center gap-5'>
        <Button onClick={()=>onDownload()}> <DownloadIcon/> Download</Button>
        <Link href={'/dashboard'}>
        <Button variant="outline"> <LayoutDashboard/> Dashboard</Button>
        </Link>
      </div>
      </div>
      }
    </div>


  )
}

export default GenerateLogo
