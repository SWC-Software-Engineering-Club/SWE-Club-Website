"use client"
import Image from 'next/image'

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
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
    <div className="max-w-3xl space-y-7 text-center">
      <span>Software Engineering Club</span>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Where CS Students of Southwestern College get ahead.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Where SWC CS students can network, gain hands-on experience, and get ahead.
      </h3>
      <Button onClick={handleClick}>Apply</Button> <Button onClick={handleClick}>About Us</Button>        

      <div style={{ 
          position: 'relative', 
          width: '80%', // Adjust the width as needed
          overflow: 'hidden', 
          margin: '25px auto', // Center the container horizontally
        }}>
          <Image 
            src="/reference.png"
            alt="work illustration"
            layout="responsive"
            objectFit="cover"
            width={2000}  // Use a large width value to fill the container
            height={1000} // Set a fixed height to maintain the aspect ratio
          />
        </div>
    </div>
  </div>
);

}