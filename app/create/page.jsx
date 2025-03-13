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
import React, { useState, useEffect } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPallete from './_components/LogoColorPallete'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdea from './_components/LogoIdea'
import PricingModel from './_components/PricingModel'

function CreateLogo() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      const timer = setTimeout(() => {
        localStorage.setItem('formData', JSON.stringify(formData))
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [formData])

  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
      {step === 1 ? (
        <LogoTitle 
          onHandleInputChange={(v) => onHandleInputChange('title', v)}
          formData={formData}
        />
      ) : step === 2 ? (
        <LogoDesc 
          onHandleInputChange={(v) => onHandleInputChange('desc', v)}
          formData={formData}
        />
      ) : step === 3 ? (
        <LogoColorPallete 
          onHandleInputChange={(v) => onHandleInputChange('pallete', v)}
          formData={formData}
        />
      ) : step === 4 ? (
        <LogoDesigns 
          onHandleInputChange={(v) => onHandleInputChange('design', v)}
          formData={formData}
        />
      ) : step === 5 ? (
        <LogoIdea 
          onHandleInputChange={(v) => onHandleInputChange('idea', v)}
          formData={formData}
        />
      ) : step === 6 ? (
        <PricingModel 
          formData={formData}
          onHandleInputChange={(v) => onHandleInputChange('pricing', v)}
        />
      ) : null}

      <div className='flex items-center justify-between mt-10'>
        {step !== 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            <ArrowLeft /> Previous
          </Button>
        )}
        <Button onClick={() => setStep(step + 1)}>
          Next <ArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default CreateLogo
