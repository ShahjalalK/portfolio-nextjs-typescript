import Head from 'next/head'
import React from 'react'

type Props = {
    title : string
}

const Meta = ({title}: Props) => {
  return (
    <Head>
    <title>{title} | ShahjalalK</title>
    <link rel="shortcut icon" href="/coding.png" type="image/x-icon" /> 
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" ></link>   
  
  </Head>
  )
}

export default Meta