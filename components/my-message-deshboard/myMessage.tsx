import React, { useEffect, useState } from 'react'
import MessageItem from './messageItem'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allMessageState, messageType } from '@/atom/messageState'

type Props = {}

const MyMessage = (props: Props) => {
  const [allUser, setAllUserState] = useRecoilState(allMessageState)
  const [search, setSearch] = useState<string>("")
  const [filterUser, setFilterUser] = useState<messageType[]>([])

  const handleSearch = () => {
    if(search !== ''){
      let searched =  allUser.filter((user) => {
        return Object.values(user).join('').toLocaleLowerCase().includes(search.toLowerCase())
      })
  
      setFilterUser(searched as any)

    }else{
      setFilterUser(allUser as any)
    }
   
  }

  useEffect(() => {
    let debound = setTimeout(() => {
      handleSearch()
    }, 1000)
    return () => clearTimeout(debound)
  }, [search])

  return (
    <div className="max-w-5xl mx-auto flex-grow">
        <input type="text" placeholder='Start typing to search' className="flex-grow rounded-full border border-primary/30 p-2 w-full focus:outline-none" value={search} onChange={(e) => setSearch(e.target.value)} />
    <div className="py-10 flex flex-col space-y-3">
         
      {search.length > 0 ?
       
       <>
       {filterUser.length === 0 ?
       
       <div>User Not Found...</div>

       :
       <>
       {filterUser.map((messageUser) => (
         <MessageItem key={messageUser.id} messageUser={messageUser} />
       ) )}
       </>
      
      }
       
       </>

        :
        <>
         {allUser.map((messageUser) => (
          <MessageItem key={messageUser.id} messageUser={messageUser} />
        ) )}
        </>
      
      } 
      
      



     
      
    </div>
    </div>
  )
}

export default MyMessage