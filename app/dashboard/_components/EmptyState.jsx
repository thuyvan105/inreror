import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
      <Image src={'/placehold.png'}
        width={200} height={200} alt="Company placehold"
      />
      <h2 className='font-medium text-gl text-gray-500'>Create New AI Interior Design</h2>
      <Link href={'/dashboard/create-new'}>
        <Button className="mt-5">+ Redesign Room</Button>
      </Link>
    </div>
  )
}

export default EmptyState