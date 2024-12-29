import Link from 'next/link'
import React from 'react'

const GoToEquationsButton = () => {
  return (
    <Link href="/equations">
        <div className='lg:tooltip lg:tooltip-bottom lg:tooltip-accent' data-tip="Equations">
            <button className="rounded-full border border-transparent p-2.5 text-center text-sm transition-all hover:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.104.401l1.445-.889m-8.25.75.213.09a1.687 1.687 0 0 0 2.062-.617l4.45-6.676a1.688 1.688 0 0 1 2.062-.618l.213.09" />
                </svg>
            </button>
        </div>
    </Link>
  )
}

export default GoToEquationsButton