import { allMessageState, messageType } from '@/atom/messageState'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import UserClient from './userClient'


type Props = {
  userId : string 
}

const AllClient = ({userId}: Props) => {
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
    <div>
    <div className="mb-10 flex items-center space-x-1">      
       <div className="relative w-full">
       <input type="search" placeholder="Search User..." className="w-full border-b border-b-primary/30 p-1 outline-none"  value={search} onChange={(e) => setSearch(e.target.value)} />
       </div>
    </div>

    <div className="max-h-96 overflow-y-scroll flex flex-col space-y-2">
       <div className="flex flex-col space-y-2">



       {search.length > 0 ?
       
       <>
       {filterUser.length === 0 ?
       
       <div>User Not Found...</div>

       :
       <>
       {filterUser.map((messageUser) => (
         <UserClient key={messageUser.id} messageUser={messageUser as any} userId={userId} />
       ) )}
       </>
      
      }
       
       </>

        :
        <>
         {allUser.map((messageUser) => (
          <UserClient key={messageUser.id} messageUser={messageUser} userId={userId} />
        ) )}
        </>
      
      } 
      
       
          

          </div>   
        
    </div>
   
   </div>
    
    
  )
}

export default AllClient