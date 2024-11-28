import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalReq({additionalRequirementInput}) {
  return (
    <div className='mt-5'>
        <lable className='text-gray-400'>Enter Addtional Requirments(Optional)</lable>
        <Textarea  className='mt-2' onChange={(e)=>additionalRequirementInput(e.target.value)}/>
    </div>
  )
}

export default AdditionalReq