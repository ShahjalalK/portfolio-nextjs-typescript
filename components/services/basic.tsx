import Link from 'next/link'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import {TbArrowNarrowRight} from 'react-icons/tb'

type Props = {}

const Basic = (props: Props) => {
  return (
    <div>
        <h1 className="text-2xl font-bold">$10</h1>
        <p><span className="font-bold">Save up</span> to 15% with <span className="text-secoundary">Subscribe to Save</span></p>
        <p className="mt-5"><span className="font-bold">SILVER</span> HTML Email Signature + Headshot or logo + 2 Social Icon Clickable + HTML File</p>

        <div className="mt-10">
        <p className="flex items-center space-x-3"><AiOutlineClockCircle className="text-xl" /> <span className="font-bold">1 Day Delivery</span></p>
        <p className="mt-1 flex items-center space-x-2"><span>✔️</span> <span>1 Concept</span></p>
        <p className="mt-1 flex items-center space-x-2"><span>✔️</span> <span>Include Source File</span></p>
        <p className="mt-1 flex items-center space-x-2"><span>✔️</span> <span>Clickable Email signature</span></p>
        </div>

        <Link href="https://www.fiverr.com/shahjalalk/code-clickable-html-email-signature-for-outlook-gmail-and-apple" target="_blank" className="flex flex-grow p-3 items-center bg-primary hover:bg-primary/90 text-white rounded-lg mt-5 text-sm w-full "><span className="flex-grow text-center">Continue with Fiverr</span> <TbArrowNarrowRight className="text-xl" /></Link>
    </div>
  )
}

export default Basic