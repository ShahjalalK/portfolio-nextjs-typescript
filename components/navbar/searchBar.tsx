import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


type Props = {}

const SearchBar = (props: Props) => {
    const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
  return (
    <form onSubmit={submitHandler} className=" flex flex-grow border border-white/20  rounded-md h-8 text-secoundary/60 relative  shadow-chackBoxBeforeShadow" >
        <label htmlFor='search' className="h-full px-1 flex items-center justify-center text-sm cursor-pointer" >
        <AiOutlineSearch className="text-2xl text-secoundary/60" />
        </label>
        <input id='search' type="search" className=" bg-[transparent] outline-none h-full flex-grow placeholder:text-white/30 placeholder:text-sm text-sm text-white/60" placeholder="Search..." required autoComplete='off'/>
        {/* <button className="h-full px-5 text-white bg-secoundary rounded-md text-sm">Search</button> */}
    </form>
  )
}

export default SearchBar