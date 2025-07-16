"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
// import "./globals.css";

const navLinks= [
    {name:"Register",href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forgot Password ", href:"/forgot-password"},
];

export default function AuthLayout({
    children,}:{children: React.ReactNode;})
    {
        const pathname = usePathname();

   return (
    <>
    <div>
        {navLinks.map((link)=>{
            const isActive = pathname===link.href || 
            (pathname.startsWith(link.href) && link.href !== "/");
            return (
                <Link className={isActive?"text-yellow-500 font-bold mr-4":"text-green-100 mr-4"} 
                href={link.href} key={link.name}>
                {link.name}
                </Link>
            );
        })}
    </div>
    <div>
        {children}
    </div>
    </>
   );
};