import React from 'react'

function Model({ children }) {
  return (
    <div className='w-[100vw] h-[100vh] relative '>
        <div className="bg-gray-300 opacity-20 absolute top-0 right-0 left-0 bottom-0 z-[-1]" >

        </div>
      <div className="flex flex-col justify-center items-center">
      {children}

      </div>
    </div>
  )
}

export default Model
