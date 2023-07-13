import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Lavel = (props: Props) => {
  return (
    <div className="flex items-start space-x-3 mt-5">
        <Image
          src="/profile2.webp"
          alt="me"
          width={80}
          height={80}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h4 className="text-lg font-bold"><Link href="https://www.fiverr.com/shahjalalk" target="_blank" >Shahjalal Khan</Link></h4>
          <p className="text-sm">Level 1 Seller</p>
        </div>
      </div>
  )
}

export default Lavel