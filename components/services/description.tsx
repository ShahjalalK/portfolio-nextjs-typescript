import React from 'react'

type Props = {}

const Description = (props: Props) => {
  return (
    <div className="my-20">
    <h3 className="text-xl font-bold">About this gig</h3>
    <div className="flex flex-col space-y-5 mt-5">
        <p>
        Hi, Get professional and amaze your email correspondent with impressive & attractive Email Signature
        </p>

        <p>
        I can code a professional HTML email signature for you that can be used in your email.
        </p>
        <div>
        <p className=" font-bold">This Gig Features:</p>
        <ul className="list-disc md:ml-3">
            <li>🔸100% Handwritten HTML Code</li>
            <li>🔸100% EditableHTML Source Code.</li>
           <li>🔸Free Image HOSTING</li>
           <li>🔸Modern Design Concepts</li>
           <li>🔸Clickable Social Icons.</li> 
           <li>🔸Clickable Phone Number, Email, & Website</li> 
           <li>🔸Business LOGO( provided by client) or Personal Photo</li>
           <li>🔸Copyable & Selectable text</li>
           <li>🔸Unlimited Revisions</li>
           <li>🔸100% Satisfaction Guaranteed</li>
           <li>🔸100% Refund Guaranteed Upon Dissatisfaction.</li>
        </ul>
        </div>
        <p>
       <span className="font-bold"> The package</span> includes one signature with one HTML Source File. For additional signatures (same layout, but different info), extra charges are applicable.
        </p>
        <p>
        <span className="font-bold">Category:</span> HTML Email Signature, Email Signature HTML, Clickable Signature, Gmail Signature, Outlook email Signature, Yahoo Email signature, HTML signature, Coded email signature
        </p>

        <div>
       <p className="font-bold">You Have to Provide:</p>

        <ul className=" list-disc md:ml-3">
            <li>🔹Your Full Name & Title</li>
            <li>🔹Image, Logo, Contact Info, and Web Address</li>
            <li>🔹Any Tag Linen if you have</li>
            <li>🔹Social Media Links</li>
        </ul>
       
        </div>
        <div>
        <span className=" bg-secoundary/25 px-1">For more clarification, just message me.</span>
        </div>
        <div>
            <p className="text-lg font-bold">Best Regards!</p>
            <p>Shahjalal</p>
        </div>

    </div>
  </div>
  )
}

export default Description