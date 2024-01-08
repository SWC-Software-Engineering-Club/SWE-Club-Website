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
      </nav>
    );
}
 
export default Navbar;