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
<link href="/fonts.css" rel="stylesheet" />  
  <script src="https://player.vimeo.com/api/player.js"></script>
  </Head>
  )
}

export default Meta