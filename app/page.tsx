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
} from "@/components/ui/dropdown-menu"

export default function Home() {
   // all logic here
   
const handleClick = () => {
  console.log("clicked")
}

  return (
    <div className='p-6 pt-20'>
      {/* css html: tsx  */}
      <center>
      Welcome to the Software Engineering Club main page!
      <br /><br />      
      <Button onClick={handleClick}>Click Me</Button>
      </center>
      <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ">    
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Club Directory
            </DropdownMenuItem>
            <DropdownMenuItem>
              Signup
            </DropdownMenuItem>
            <DropdownMenuItem>
              Blogs
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>      
      </div>
    </div>    
  )
}


