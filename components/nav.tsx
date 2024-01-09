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

const Navbar = () => {

  return (
    <nav className="w-full p-6 flex fixed justify-between border-b shadow-sm">
      <div>
        <Logo
          altText="Logo Alt Text"
          size="small"
          rounded="default"
          className="my-custom-class"
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
