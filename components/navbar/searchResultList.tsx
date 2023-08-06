import React from 'react'
import Image from 'next/image'
import {FiChevronsRight} from 'react-icons/fi'
import {motion} from 'framer-motion'
import { serviceSectionType } from '@/atom/santyType'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { navbarSearchState, navbarSearchType } from '@/atom/navbarSearchState'

type Props = {
  service : serviceSectionType,
  index : number
}



const SearchResultList = ({service, index}: Props) => {
 const router = useRouter()
 const setSearch = useSetRecoilState<navbarSearchType>(navbarSearchState)

  const searchResultVarients = {
    initial : {
        opacity : 0,
        
    },
    animate : (index : number) => ({
        opacity : 1,
       
        transition : {
            duration : 0.5,
            delay : 0.09 * index
        }
    })
  }

  const serviceHadler = async () => {
   await router.push(`/service/${service.ServicePath}`)
    setSearch(() => ({
      searchValue : ""
    }))
  }
  return (
    <motion.div variants={searchResultVarients} initial="initial" animate="animate" key={index} custom={index} className="flex items-start space-x-1 group">
    <div>
    <FiChevronsRight className="text-xl text-secoundary/60 group-hover:text-secoundary/90" />
    </div>
 <div className="flex flex-col space-y-1  cursor-pointer  border border-secoundary/10 p-1 rounded" onClick={serviceHadler }>
     <h1 className="text-sm group-hover:underline text-white/80 group-hover:text-white/90">{service.serviceTitle}</h1>
     <div className="flex items-start space-x-2">
         <Image src={service.serviceImage} alt='service' width={300} height={300} className="w-14 rounded" />

         <p className="text-xs line-clamp-2 text-white/60 group-hover:underline">{service.searchDescription}</p>
     </div>
 </div>
 </motion.div>
  )
}

export default SearchResultList