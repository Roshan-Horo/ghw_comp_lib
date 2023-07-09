import * as React from 'react'

export default function Button({children, onClick, ...rest}){
  return (
    <button 
      onClick={onClick}
      className="bg-blue-700 text-slate-100 m-2 px-4 py-2 rounded-sm" 
      {...rest}
      >Button</button>
  )
}