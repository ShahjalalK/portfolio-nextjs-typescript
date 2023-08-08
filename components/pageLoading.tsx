import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

type Props = {}

const PageLoading = (props: Props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-primary">
       <div className="flex flex-col space-y-2 items-center">
       <CirclesWithBar
  height="150"
  width="150"
  color="#14C2A3"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
<h1 className="text-secoundary text-2xl">Content is loading...</h1>
       </div>
    </div>
  )
}

export default PageLoading