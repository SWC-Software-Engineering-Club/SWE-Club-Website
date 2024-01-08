import Image from 'next/image'

"use client"

import { Button } from '@/components/ui/button'
export default function Home() {
   // all logic here
   
const handleClick = () => {
  console.log("clicked")
}

  return (
    <div className='p-6 pt-28'>
      {/* css html: tsx  */}
      <center>
      Welcome to the Software Engineering Club main page!
      <br /><br />
      <Button onClick={handleClick}>Click Me</Button>
      </center>
    </div>    
  )
}


