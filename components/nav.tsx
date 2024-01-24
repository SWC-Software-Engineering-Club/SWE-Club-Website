import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";
import { cn } from "@/lib/utils";

const Navbar = () => {

  return (
    <nav className={cn(
      "z-[99999] w-full p-6 flex fixed justify-between border-b shadow-sm bg-background",
      )}>
      <div>
        <Logo
          altText="Logo"
          className="w-20 h-full object-cover rounded-full"       
        />
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 ">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/club-directory">Club Directory</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/signup">Signup</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/blogs">Blogs</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
export default Navbar;
