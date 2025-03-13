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

function HeadingDescription({title,description}) {
  return (
    <div>
      <h2 className='font-bold text-3xl text-blue-500'>{title}</h2>
      <p className='text-lg text-gray-500 mt-2'>{description}</p>
    </div>
  )
}

export default HeadingDescription
