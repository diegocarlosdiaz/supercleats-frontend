import React from 'react'

export default function SeeProductButton({ content }: { content: string }) {
  return (
    <div className=" text-white bg-lime-600 border-green-600 rounded-sm px-3 py-2 my-2 text-white-200 cursor-pointer hover:bg-lime-700">
          <p className='font-bold text-sm'>{content}</p>
    </div>
  )
}
