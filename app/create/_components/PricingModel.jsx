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
import React, { useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function PricingModel ({formData}) {

  const {user} = useUser();
    useEffect(()=>{
        if (formData?.title && typeof window!=='undefined') 
        {
            localStorage.setItem('formData',JSON.stringify(formData))
        }
    },[formData])
  return (
    <div className=''>
      <HeadingDescription
      title={Lookup.LogoPricingModelTitle}
      description={Lookup.LogoPricingModelDesc}/>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
        {Lookup.pricingOption.map((pricing,index)=>(
            <div key={index} className='flex flex-col items-center p-5 border rounded-xl'>
                <Image src={pricing.icon} alt={pricing.title}
                width={60}
                height={60}/>
                <h2 className='font-medium text-2xl'>{pricing.title}</h2>
                <div>
                    {pricing.features.map((feature,index)=>(
                        <h2 className='text-lg mt-3' key={index}>{feature}</h2>
                    ))}
                </div>
                {user?
                <Link href={'/generate-logo?type='+pricing.title}>
                 <Button className='mt-5'>{pricing.button}</Button>
                 </Link>
                :<SignInButton mode='modal' forceRedirectUrl={'/generate-logo?type='+pricing.title}>
                   <Button className='mt-5'>{pricing.button}</Button>
                 </SignInButton>
                }
                </div>
        ))}
      </div>
    </div>
  )
}

export default PricingModel
