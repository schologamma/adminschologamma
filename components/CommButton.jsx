import React from 'react'

function CommButton({title , handdleSubmite , CssClasses ,isSubmitting}) {
  return (
    <button onClick={handdleSubmite} className={`btn btn-secondary ${CssClasses} text-sm`}>
        {isSubmitting? title+"...":title}
      
    </button>
  )
}

export default CommButton
