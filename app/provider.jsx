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
import React, { useEffect, useState } from 'react'
import Header from './_components/Header'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { UserDetailContext } from './_contex/userDetailContext'
import Footer from './_components/Footer'

const Provider = ({children}) => {

  const {user}=useUser()
  const [userDetail,setUserDetail]=useState()

  useEffect(()=>{
    user&&CheckUserAuth()
  },[user])
  const CheckUserAuth=async()=>{
    const result=await axios.post('/api/users',{
      userName:user?.fullName,
      userEmail:user?.primaryEmailAddress?.emailAddress
    })
    console.log(result.data)
    setUserDetail(result.data)
  }
  return (
    <div className='min-h-screen px-10 lg:px-32 xl:px-48 2xl:px-56 bg-gradient-to-b from-teal-50 to-pink-50'>
      <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
        </UserDetailContext.Provider>
    </div>
  )
}

export default Provider
