import Link from 'next/link'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiRevision } from 'react-icons/bi'
import { TbArrowNarrowRight } from 'react-icons/tb'


type Props = {}

const Premium = (props: Props) => {
  return (
    <div>
        <h1 className="text-2xl font-bold">$30</h1>
        <p><span className="font-bold">Save up</span> to 15% with <span className="text-secoundary">Subscribe to Save</span></p>
        <p className="mt-5"><span className="font-bold">PLATINUM</span>  HTML Email Signature + Headshot & logo + unlimited Social icon & website link Clickable + HTML file</p>

        <div className="mt-10">
       <div className="flex items-center space-x-5">
       <p className="flex items-center space-x-2"><AiOutlineClockCircle className="text-xl" /> <span className="font-bold">1 Day Delivery</span></p>
       <p className="flex items-center space-x-2"><BiRevision className="text-xl" /> <span className="font-bold">Unlimited Revisions</span></p>
       </div>
       <p className="mt-1 flex items-center space-x-2"><span>✔️</span> <span>1 Concept</span></p>
        <p className="mt-1 flex items-center space-x-2"><span>✔️</span> <span>Include Source File</span></p>
        <p className="mt-1 flex items-center space-x-2"><span>✔️</span> <span>Clickable Email signature</span></p>
        </div>

        <Link href="https://www.fiverr.com/shahjalalk/code-clickable-html-email-signature-for-outlook-gmail-and-apple" target="_blank" className="flex flex-grow p-3 items-center bg-primary hover:bg-primary/90 text-white rounded-lg mt-5 text-sm w-full "><span className="flex-grow text-center">Continue with Fiverr</span> <TbArrowNarrowRight className="text-xl" /></Link>
    </div>
  )
}

export default Premium