import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import {motion} from 'framer-motion'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { navbarSearchState, navbarSearchType } from '@/atom/navbarSearchState'


type Props = {}

const SearchBar = (props: Props) => {
  const [search, setSearch] = useRecoilState<navbarSearchType>(navbarSearchState)

  const searchHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    
    setSearch((prev) => ({
      ...prev,
      searchValue : e.target.value
    }))
  }
   
  return (
    <motion.div initial={{ x: 500, opacity : 0 }}
    animate={{ x: 0, opacity : 1 }}
    transition={{ duration: 1, delay: 1.5, }} className=" hidden lg:flex flex-grow border border-white/30  rounded-md h-8 text-secoundary/60 relative  shadow-chackBoxBeforeShadow" >
        <label htmlFor='search' className="h-full px-1 flex items-center justify-center text-sm cursor-pointer" >
        <AiOutlineSearch className="text-2xl text-secoundary/60" />
        </label>
        <input id='search' type="search" className=" bg-[transparent] outline-none h-full flex-grow placeholder:text-white/30 placeholder:text-sm text-sm text-white/60" placeholder="Search..." value={search.searchValue} onChange={searchHandler} required autoComplete='off'/>
        
    </motion.div>
  )
}

export default SearchBar