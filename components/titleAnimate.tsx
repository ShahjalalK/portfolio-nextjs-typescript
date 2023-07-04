import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    text : string,
    className : string
}

const TitleAnimate = ({text, className}: Props) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
        <motion.h1 initial={{opacity : 1}} whileInView={{opacity : 1}} transition={{delay : 0.5, staggerChildren : 0.08}} className={`inline-block w-full text-white font-bold capitalize ${className}`}>
            {text.split(" ").map((word, index) => (
                <motion.span initial={{opacity : 0, y:50}} whileInView={{opacity : 1, y : 0}} transition={{delay : 0.5}} key={word+'_'+index} className="inline-block">
                    {word}&nbsp;
                </motion.span>
            ))}
        </motion.h1>
    </div>
  )
}

export default TitleAnimate