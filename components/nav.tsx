import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
    return ( 
      <nav className="w-full p-6 flex fixed justify-between border-b shadow-sm">
       <div>
        SWE Club
       </div>
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ">
          <DropdownMenuGroup>
          <DropdownMenuItem><Link href="/">Home</Link></DropdownMenuItem>            
            <DropdownMenuItem><Link href="/club-directory">Club Directory</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="/signup">Signup</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="/blogs">Blogs</Link></DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
