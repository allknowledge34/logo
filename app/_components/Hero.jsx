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
import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [logoTitle, setLogoTitle] = useState()
  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
      <h2 className='text-red-500 text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
      <h2 className='text-blue-500 text-5xl text-center font-bold'>{Lookup.HeroSubheading}</h2>
      <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>

      <div className='flex gap-6 w-full max-w-2xl mt-10'>
        <input placeholder={Lookup.InputTitlePlaceholder}
          className='p-3 border rounded-full w-full shadow-md'
          onChange={(event) => setLogoTitle(event?.target.value)} />
        <Link href={'/create?title=' + logoTitle}>
          <Button className='border rounded-full p-6'>Get Started</Button>
        </Link>
      </div>
      <div className='flex flex-wrap justify-center mt-8 gap-3'>
        {Array(6).fill('').map((_, index) => (
          <Image
            key={index}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
            src={index % 2 === 0 ? '/sample_img_2.jpeg' : '/sample_img_1.jpeg'}
            alt={`Sample Image ${index + 1}`}
            width={70}
            height={70}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
