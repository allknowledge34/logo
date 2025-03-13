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
import { UserDetailContext } from '@/app/_contex/userDetailContext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const Info = () => {
    const {userDetail,setUserDetail}=useContext(UserDetailContext)
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-3xl text-pink-600'>Hiii {userDetail?.name}</h2>
        <div className='flex items-center gap-2'>
            <Image src={'/coine.svg'} alt='coine' width={35} height={35}/>
            <h2 className='font-bold text-3xl'>{userDetail?.credits} Credit Left </h2>
        </div>
      </div>

      <div className='flex justify-between items-center mt-6'>
        <h2 className='font-bold text-2xl'>Dashboard</h2>
        <Link href='/create'><Button>+ Create New Logo</Button></Link>
      </div>
    </div>
  )
}

export default Info
