"use client"
import React from 'react'
import {motion} from "motion/react"
import { cn } from '@/lib/utils'
import { FileIcon, Hubspot, HumanIcon, InstagramIcon, MetaIcon, SalesForce, Settings, Sheets, SlackIcon } from '@/icons'
import { LogoIcon } from '@/components/logo'
import { IconCircleDashedCheck } from '@tabler/icons-react'

export const SkeletonTwo = ()=>{
    return (
        <div className='flex-1 rounded-t-3xl gap-2 flex items-center justify-center  w-full h-full absolute inset-x-0 p-2'
        style={{
            transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)"
        }}><Circle className='size-40 bg-white absolute inset-0 dark:bg-neutral-800 shrink-0 border z-[10] rounded-full m-auto flex items-center justify-center 
        border-neutral-200 dark:border-neutral-700 shadow-sm'>
                <LogoIcon className='size-10 text-neutral-400'/>
                <RevolvingCard>
                    <SlackIcon className='size-6'/>
                </RevolvingCard>

                <RevolvingCard className='[--translate-position:160px] [--orbit-duration:20s]'>
                    <MetaIcon className='size-8 text-blue-500 '/>
                </RevolvingCard>

                <RevolvingCard className='[--translate-position:180px] [--orbit-duration:15s]'>
                    <InstagramIcon className='size-8 text-blue-500 '/>
                </RevolvingCard>

                <RevolvingCard className='[--translate-position:220px] [--orbit-duration:25s]'>
                    <Sheets className='size-8 '/>
                </RevolvingCard>

                <RevolvingCard className='[--translate-position:250px] [--orbit-duration:30s] size-auto
                ring-0 shadow-none bg-transparent w-60'>
                    <SkeletonCard 
                    className='absolute bottom-0 left-12 max-w-[90%] z-30'
                    icon={<IconCircleDashedCheck className='size-4'/>}
                    title="Campaign planner"
                    description="Creates clear, ready to use campaign briefs using product info."/>
                </RevolvingCard>
            </Circle>
            <Circle className='shadow border-neutral-100 size-60 bg-neutral-100/80 z-9 relative'>

            </Circle>
            <Circle className='shadow border-neutral-100 size-80 bg-neutral-100/60 z-8'></Circle>
            <Circle className='shadow border-neutral-100 size-100 bg-neutral-100/40 z-7'></Circle>
            <Circle className='shadow border-neutral-100 size-120 bg-neutral-100/20 z-6'></Circle>
        </div>
)};

const RevolvingCard = ({className, children}:{className?:string; children?:React.ReactNode})=>{
    return (
    <div className={cn('size-10 flex absolute inset-0 m-auto items-center justify-center border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm',
        'animate-orbit [--translate-position:120px] [--orbit-duration:10s] bg-white dark:bg-neutral-800',className)}>
        {children}
    </div>
    )

}

const SkeletonCard = ({icon,title,description, className}:{
    icon:React.ReactNode;
    title:string;
    description:string;
    className:string;
})=>{
    return(
    <div className={cn('h-fit my-auto mx-auto w-full p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl absolute bottom-0 left-12', 
    'max-w-[90%] z-30 bg-white dark:bg-neutral-800',className)}>
        <div className="flex gap-3 items-center">
            {icon}
            <p className='text-sm font-normal text-black dark:text-white'>{title}</p>
      
        </div>
        <p className="text-[10px] text-neutral-400/80 dark:text-neutral-400/80 font-normal  ">{description}
        </p>

    </div>
    )
}

const Circle = ({className, children}:{
    className?:string;
    children?:React.ReactNode;
})=>{
    return (
        <div className={cn('size-40 bg-white border border-transparent rounded-full absolute inset-0 m-auto', className)}>
            {children}
        </div>
    )
}