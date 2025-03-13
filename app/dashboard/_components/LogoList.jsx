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
import { db } from '@/config/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

const LogoList = () => {
    const {userDetail,setUserDetail}=useContext(UserDetailContext)
    const [logoList,setLogoList]=useState([])

    useEffect(()=>{
        userDetail&&GetUserLogos()
    },[userDetail])

    const GetUserLogos=async()=>{
        const querySnapshot=await getDocs(collection(db,"users",userDetail?.email,"logos"))
        setLogoList([])
        querySnapshot.forEach((doc)=>{
            console.log(doc.data())
            setLogoList(prev=>[...prev,doc.data()])
        })
    }

    const ViewLogo=(image)=>{
        const imageWindow = window.open();
        imageWindow.document.write(`<img src="${image}" alt="Base64 Image" />`)
    }
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {logoList?.length>0?logoList.map((logo,index)=>(
            <div key={index} className='hover:scale-105 transition-all cursor-pointer'
                onClick={()=>ViewLogo(logo?.image)}>
                <Image src={logo?.image} alt={logo?.title} width={400} height={200}
                className='w-full rounded-xl'/>
                <h2 className='text-center text-lg font-medium mt-2'>{logo?.title}</h2>
                <p className='text-sm text-gray-500 text-center'>{logo?.desc}</p>
            </div>
        )):
        [1,2,3,4,5,6].map((item,index)=>(
            <div key={index} className='bg-slate-200 animate-pulse rounded-xl w-full h-[200px]'>
            </div>
        ))
        }
      </div>
    </div>
  )
}

export default LogoList
