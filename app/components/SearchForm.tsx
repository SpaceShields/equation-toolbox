import React from 'react'
import Form from "next/form";
import SearchFormReset from './SearchFormReset';

export const SearchForm = ({ query }: { query?: string }) => {

  return (
    <Form action="/" scroll={false} className='search-form'>
      <input 
        type="text" 
        className="search-input font-comfortaa" 
        placeholder="Search Equations"
        name='query'
        defaultValue={query} 
      />
      <div className='flex gap-2'>
        {query && <SearchFormReset />}
        <button type='submit' className='search-btn text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
      {/* <label className="input input-bordered flex items-center gap-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label> */}
    </Form>
  )
}
