import Image from 'next/image'

"use client"

export default function Home() {
   // all logic here
   
const handleClick = () => {
  console.log("clicked")
}

  return (
    <div>
      {/* css html: tsx  */}
      Software engineering club
      
      <button onClick={handleClick}>click me </button>
    </div>
  )
}
