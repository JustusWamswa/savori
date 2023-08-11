import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='bg-primary w-full text-tertiary flex flex-col items-center justify-center pt-10 pb-4'>
      <div>
        <p className="text-xs mt-4">
          © {currentYear}<Link href="/" className="hover:underline"> SAVORI</Link>. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer