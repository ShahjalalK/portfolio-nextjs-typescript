import { basicInfoState, basicInfoType } from '@/atom/santyType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const Lavel = (props: Props) => {
  const [basicInfo, setBasicInfo] = useRecoilState<basicInfoType[]>(basicInfoState)
  return (
    <>
    {basicInfo.slice(0, 1).map((me) => (
      <div key={me._id} className="flex items-start space-x-3 mt-5 group">
      <Image
        src={me.myImage}
        alt="me"
        width={80}
        height={80}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h4 className="text-lg font-bold text-info/90"><Link href="https://www.fiverr.com/shahjalalk" target="_blank" >Shahjalal Khan</Link></h4>
        <p className="text-sm"><span>Level 1 Seller of</span> <Link href="https://www.fiverr.com/shahjalalk" target="_blank" className="group-hover:underline text-[#1DBF73]">Fiverr.com</Link></p>
      </div>
    </div>
    ))}
    </>
    
  )
}

export default Lavel