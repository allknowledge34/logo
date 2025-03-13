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
import React, {useState} from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import LogoDesig from '@/app/_data/LogoDesig'
import Image from 'next/image';


const LogoDesigns = ({onHandleInputChange,formData}) => {
  const [selectedOption,setSelectedOption] = useState(formData?.design?.title)
  return (
    <div className='my-10'>
      <HeadingDescription
      title={Lookup.LogoDesignTitle}
      description={Lookup.LogoDesignDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
        {LogoDesig.map((design,index)=>(
          <div key={index} 
          onClick={()=>{setSelectedOption(design.title);
            onHandleInputChange(design)
          }}
          className={`p-1 hover:border-2 border-yellow-500 rounded-xl cursor-pointer ${selectedOption==design.title&&'border-2 rounded-xl border-yellow-500'}`}>
            <Image src={design.image} alt={design.title} width={300} height={200} 
            className='w-full rounded-xl h-[200px] object-cover'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesigns
