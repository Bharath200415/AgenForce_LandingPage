import React from "react";
import { Container } from "@/components/container";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  const navlinks = [
    { title: "Features", href: "/features" },
    { title: "Products", href: "/socials" },
    { title: "Socials", href: "/socials" },
    { title: "Pricing", href: "/pricing" },
  ];

  return(
  <div className="border-b border-neutral-200 dark:border-neutral-800">
    <Container className="py-4 px-3 flex items-center justify-between max-w-7xl mx-auto">
        <Logo/>
        <div className="flex items-center gap-4">
            {navlinks.map((item,index)=>(
                <Link key={index} href={item.href} className="text-sm text-neutral-600 font-medium dark:text-neutral-400">{item.title}</Link>
            ))}
        </div>
        <div className="flex items-center gap-4">
            <Link
            href="/login"
            className="text-sm px-3 py-2 rounded-md text-neutral-600  dark:text-neutral-400 font-medium">
                Login
            </Link>
            <Button size="sm">
                SignUp
            </Button>

        </div>
    </Container>
  </div>
  );
};
