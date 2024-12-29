'use client';
import Link from 'next/link';
import React from 'react'

const MoreDetailsButton = (props) => {

    const id = props.id;

  return (
    <Link href={`/equations/${encodeURIComponent(id)}`}>
        <button className="rounded-full border border-transparent p-2.5 text-center text-sm transition-all hover:shadow-md hover:shadow-secondary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </button>
    </Link>
  )
}

export default MoreDetailsButton