import React from 'react'

export default function Header(){
  return (
    <>
     <div className="flex items-center justify-between bg-blue-600 text-slate-100 p-4 ">
      <div>Logo</div>
      <div className="flex ">
       <div>Home</div>
       <div>About</div>
       <div>Contact</div>
      </div>
     </div>
    </>
  )
}