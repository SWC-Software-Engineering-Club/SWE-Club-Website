import Image from 'next/image'

"use client"

import { Button } from '@/components/ui/button'

export default function Home() {
   // all logic here
   
const handleClick = () => {
  console.log("clicked")
}

  return (
    <div>
      {/* css html: tsx  */}
      Software engineering club
      <br />
      <Button onClick={handleClick}>click me </Button>
    </div>
  )
}
