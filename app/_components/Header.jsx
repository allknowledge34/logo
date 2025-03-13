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
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const {user}=useUser()
  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
      <Link href='/'>
        <Image src={'/logo.svg'} alt="logo" width={100} height={150} />
      </Link>
      <div className='flex gap-3 items-center'>
        {user?<Link href={'/dashboard'}><Button>Dashboard</Button></Link>:
        <Button>Get Started</Button>}
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
