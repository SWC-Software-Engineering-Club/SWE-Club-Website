import Image from 'next/image'

"use client"

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

      <div className='p-6 pt-4'>
      <Card>
        <CardHeader>
          <CardTitle>Main Page</CardTitle>
          <CardDescription>The home page of the Software Engineering Club Website.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Test page work in progress, still incomplete.
          </p>
        </CardContent>
        <CardFooter>
          <p>Footer</p>
        </CardFooter>
      </Card>
      </div>
    </div>    
  )
}


