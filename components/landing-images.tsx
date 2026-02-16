"use client";
import React from 'react'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {easeOut, motion} from "motion/react";

export const Landingimages = ({
    firstImageSrc="https://assets.aceternity.com/screenshots/3.jpg",
    secondImageSrc= "https://assets.aceternity.com/screenshots/4.jpg"
}) => {
  return (
    <div className='relative'>

        <div className="absolute inset-x-0 bottom-0 h-40 md:h-80 w-full mask-t-from-10% bg-background z-50 mask-r-from-10%" ></div>
            <div className='relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140  w-full pt-20 perspective-distant translate-x-10 md:translate-x-28 '>

                <motion.div
                initial={{
                    opacity:0,
                    y:-200,
                }}
                animate={{
                    opacity:1,
                    y:0,
                }}
                transition={{
                    duration:0.5,
                    ease:"easeOut"
                }}
                 
                className='perspective-[4000px] shadow-2xl'>
                    <Image src={secondImageSrc} alt="hero1"
                    height={1080}
                    width={1920}
                    className={cn("absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl select-none pointer-events-none"
                    )}
                    style={{transform:"rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}}></Image>
                </motion.div>

                <motion.div 
                    initial={{
                        opacity:0,
                        y:-200,
                    }}
                    animate={{
                        opacity:1,
                        y:10,
                    }}
                    transition={{
                        duration:0.5,
                        ease:"easeOut",
                        delay:0.2,
                    }}
                    className='perspective-[4000px] -translate-y-15 lg:translate-x-20  lg:-translate-y-40 md:-translate-y-20'>
                    <Image src={firstImageSrc} alt="hero1"
                    height={1080}
                    width={1920}
                    className={cn("absolute inset-0 -translate-x-10 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none pointer-events-none"
                    )}
                    style={{transform:"rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}}></Image>
                </motion.div>
            </div>
        </div>

  )
}
