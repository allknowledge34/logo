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
import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({onHandleInputChange,formData}) => {
  return (
    <div className='my-10'>
      <HeadingDescription
      title={Lookup.LogoDescTitle}
      description={Lookup.LogoDescDesc}
      />

          <input type='text' placeholder={Lookup.InputTitlePlaceholder}
              className='p-4 border rounded-full mt-5 w-full'
              // defaultValue={formData?.desc}
              value={formData?.desc}
              onChange={(e) => onHandleInputChange(e.target.value)}
          />
    </div>
  )
}

export default LogoDesc
