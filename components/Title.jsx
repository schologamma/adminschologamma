import React from 'react'

function Title({name ,classes  }) {
  return (
   <h1 className={`text-red-400 drop-shadow-md text-[23px] md:text-[32px] lg:text-[44px] font-extrabold ${classes}`}>
    {name}
   </h1>
  )
}

export default Title
