"use client";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  // all logic here

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="p-6 pt-28">
      {/* css html: tsx  */}
      <center>Welcome!</center>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="p-6 pt-4">
        <Card>
          <CardHeader>
            <CardTitle>Test Main Page Card</CardTitle>
            <CardDescription>
              The home page of the Software Engineering Club Website.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test page work in progress, still incomplete.</p>
            <div className="p-0 pt-2">
              <Button onClick={handleClick}>Test Clickable Button</Button>
            </div>
          </CardContent>
          <CardFooter>
            <p>Test Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
