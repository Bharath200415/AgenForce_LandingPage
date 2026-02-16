"use client";
import React, { useState } from "react";
import { Container } from "@/components/container";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import {motion} from "motion/react";
import { AnimatePresence } from "motion/react";

export const Navbar = () => {

  return(
  <div className="border-b border-neutral-200 dark:border-neutral-800">
    <DesktopNavbar/>
    <MobileNavbar/>
  </div>
  );
};

export const DesktopNavbar=()=>{
  const navlinks = [
    { title: "Features", href: "/features" },
    { title: "Product", href: "/product" },
    { title: "FAQs", href: "/faq" },
    { title: "Pricing", href: "/pricing" },
  ];
  return (
        <Container className="py-4 px-3 lg:flex items-center justify-between max-w-[76rem] hidden mx-auto">
        <Logo/>
        <div className="flex items-center gap-7">
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
            <Button size="md">
                SignUp
            </Button>

        </div>
    </Container>
  )
}

export const MobileNavbar = () =>{
    const navlinks = [
        { title: "Features", href: "/features" },
        { title: "Products", href: "/socials" },
        { title: "Socials", href: "/socials" },
        { title: "Pricing", href: "/pricing" },
    ];
    const [open,setOpen] = useState(false);
    return (
        <div className="flex md:hidden px-4 py-2 justify-between" >
            <Logo/>
            <button onClick={()=>{
                setOpen(!open);
            }}>
                <IconLayoutSidebar className="size-4" color="black"/>
            </button>
            <AnimatePresence>

                {open && <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    backdropFilter:"blur(15px)"
                }}
                transition={{
                    duration:0.2,
                }}

                className="fixed inset-0 h-full w-full z-50 px-4 py-2 ">
                    <div className="flex justify-between">
                        <Logo/>
                        <button onClick={()=>setOpen(false)}>
                            <IconX/>
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 my-10">
                        {navlinks.map((items,index)=>(
                            <motion.div
                            initial={{
                                opacity:0,
                                x:-4,
                            }}
                            animate={{
                                opacity:1,
                                x:0,
                            }}
                            transition={{
                                duration:0.2,
                                delay:index*0.1,

                            }}
                            key={index+items.title}
                            >
                                <Link
                                key={index}
                                href={items.href}
                                className="text-2xl text-neutral-600 dark:text-neutral-400 font-medium">{items.title}</Link>
                            </motion.div>

                        ))}

                    </div>
                </motion.div>
                }
            </AnimatePresence>
        </div>

    )

}