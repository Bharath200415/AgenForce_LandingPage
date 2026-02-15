"use client";
import React from 'react'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {easeOut, motion} from "motion/react";

export const Landingimages = () => {
  return (
    <div className='relative'>
        <div className='absolute inset-x-0 h-full w-full mask-t-from-2% bg-white z-50'></div>
        <div className='relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full pt-20 perspective-distant translate-x-20 sm:translate-x-40'>

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
                <Image src="https://assets.aceternity.com/screenshots/3.jpg" alt="hero1"
                height={1080}
                width={1920}
                className={cn("rounded-lg inset-0 absolute mask-r-from-20% mask-b-from-20% shadow-2xl"
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
                <Image src="https://assets.aceternity.com/screenshots/3.jpg" alt="hero1"
                height={1080}
                width={1920}
                className={cn("rounded-lg inset-0 absolute mask-r-from-50% mask-b-from-50% shadow-2xl"
                )}
                style={{transform:"rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}}></Image>
            </motion.div>
        </div>
    </div>

  )
}
