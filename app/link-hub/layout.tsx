import { Poppins } from "next/font/google";
import "../(main)/globals.css";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const LinkHubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="!scroll-smooth hide-scrollbar">
      <body className={poppins.className}>
        
          <main className="max-w-10xl mx-auto">{children}</main>
        
      </body>
    </html>
  );
};

export default LinkHubLayout;
