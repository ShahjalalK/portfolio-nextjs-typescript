import React from 'react'
import MessageItem from './messageItem'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allMessageState } from '@/atom/messageState'

type Props = {}

const MyMessage = (props: Props) => {
  const [allUser, setAllUserState] = useRecoilState(allMessageState)
  
  return (
    <div className="max-w-5xl mx-auto flex-grow">
        <input type="text" placeholder='Start typing to search' className="flex-grow rounded-full border border-primary/30 p-2 w-full focus:outline-none" />
    <div className="py-10 flex flex-col space-y-3">
      {allUser.map((messageUser) => (
        <MessageItem key={messageUser.id} messageUser={messageUser} />
      ) )}
      
    </div>
    </div>
  )
}

export default MyMessage