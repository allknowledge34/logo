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


import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <Image src={'/logo.svg'} alt="logo" width={85} height={80} />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright 2025 @ AiCodinghub - All Right Reserved.</p>
      <div className='flex gap-2.5'>
            <Image src={'/facebook_icon.svg'} alt="facebook_icon" width={35} height={35} />
            <Image src={'/instagram_icon.svg'} alt="instagram_icon" width={35} height={35} />
            <Image src={'/twitter_icon.svg'} alt="twitter_icon" width={35} height={35} />
        </div>
    </div>
  )
}

export default Footer
