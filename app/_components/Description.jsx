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
import Image from 'next/image'
import React from 'react'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
     <h1 className='text-3xl sm:text-4xl'>Generate AI Images</h1>
      <p className='text-gray-500 mb-8'>Bring Creative Vision to Life</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <Image src={'/sample_img_2.jpeg'} alt='' className='w-80 xl:w-96 rounded-lg' width={300} height={250} />
              <div>
                  <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI Website - Your Ultimate Text to Image Generator</h2>
                  <p className='text-gray-600 mb-4'>Effortlessly bring your ideas to life with our free AI image generator. Transform your text into stunning visuals in seconds. Imagine, describe, and see your vision come to life instantly</p>
                  <p className='text-gray-600 mb-4'>Type a text prompt, and our advanced AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even non-existent concepts come to life effortlessly. Unleash limitless creativity with our AI technology.</p>
              </div>
      </div>
    </div>
  )
}

export default Description
