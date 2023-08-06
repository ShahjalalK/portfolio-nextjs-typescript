import React, { useEffect, useState } from 'react'
import SearchResultList from './searchResultList'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allServicState, serviceSectionType } from '@/atom/santyType'
import { navbarSearchState, navbarSearchType } from '@/atom/navbarSearchState'
import Image from 'next/image'
import {motion} from 'framer-motion'

type Props = {}

const SearchResult = (props: Props) => {
  const allServiceValue = useRecoilValue<serviceSectionType[]>(allServicState)
  const [search, setSearch] = useRecoilState<navbarSearchType>(navbarSearchState)
    
  const [filterUser, setFilterUser] = useState([])

  const handleSearch = () => {
    if(search.searchValue !== ''){
      let searched =  allServiceValue.filter((service) => {
        return Object.values(service).join('').toLocaleLowerCase().includes(search.searchValue.toLowerCase())
      })
  
      setFilterUser(searched as any)

    }else{
      setFilterUser(allServiceValue as any)
    }
   
  }

  useEffect(() => {
    let debound = setTimeout(() => {
      handleSearch()
    }, 1000)
    return () => clearTimeout(debound)
  }, [search.searchValue])

   
  return (
    <motion.div initial={{maxHeight : 0, display : "none"}} animate={{maxHeight : search.searchValue.length > 0 ? "288px" : "0px", display : search.searchValue.length > 0 ? "block" : "none"}} transition={{duration : 0.5}} className={`hidden lg:block fixed top-[60px] right-0 w-[550px] max-h-72 overflow-x-hidden overflow-y-scroll bg-primary p-5 rounded-b z-40 font-Roboto border border-secoundary/30`}>
    <div className="flex flex-col space-y-2">
        {search.searchValue.length > 0 ?
       
       <>
       {filterUser.length === 0 ?
       
       <div className="flex-grow flex justify-center items-center ">
        <Image src="/notfound.gif" alt='404' width={300} height={300} className="w-16 rounded" />
       </div>

       :
       <>
       {filterUser.map((service, index) => (
         <SearchResultList service={service} index={index} key={index} />
       ) )}
       </>
      
      }
       
       </>

        :
        <>
         {allServiceValue.map((service, index) => (
          <SearchResultList service={service} index={index} key={service._id} />
        ) )}
        </>
      
      } 
      

           
           
            
        </div>
    </motion.div>
  )
}

export default SearchResult