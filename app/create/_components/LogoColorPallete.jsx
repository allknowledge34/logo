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
import Colors from '@/app/_data/Colors'

const LogoColorPallete = ({onHandleInputChange,fromData}) => {

  const [selectedOption,setSelectedOption] = useState(fromData?.palette)
  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {Colors.map((palette, index) => (
          <div key={index} className={`flex p-1 cursor-pointer ${selectedOption==palette.name&&'border-2 rounded-lg border-yellow-500'}`}>
            {palette?.colors.map((color, index) => (
              <div
                key={index} 
                onClick={()=>{setSelectedOption(palette.name);
                  onHandleInputChange(palette.name)
                }}
                className='h-24 w-full'
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoColorPallete

