import Image from 'next/image'

"use client"

import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownbutton"

export default function Home() {
   // all logic here
   
const handleClick = () => {
  console.log("clicked")
}

  return (
    <div>
      {/* css html: tsx  */}
      <center>
      Welcome to the Software Engineering Club main page!
      <br /><br />
      <Button onClick={handleClick}>Click Me</Button>

      </center>      
    </div>    
  )
}


