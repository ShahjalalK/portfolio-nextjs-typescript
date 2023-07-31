import React from 'react'
import {PortableText} from '@portabletext/react'
import { ServiceDescriptionPortable } from './serviceDescriptionPortable'


type Props = {
  description : any
}

const Description = (description: Props) => {
  return (
    <div className="my-20">
    <h3 className="text-xl font-bold mb-5">About this gig</h3>
    
   <PortableText
  value={description.description}
  components={ServiceDescriptionPortable}
/>
  </div>
  )
}

export default Description