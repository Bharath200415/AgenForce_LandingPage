import React from 'react'
import { cn } from '@/lib/utils'
import { IconCheck, IconCircleCheckFilled, IconCircleDashedCheck, IconLoader2, IconRipple } from '@tabler/icons-react';

export const SkeletonTwo= () => {
  return (

        <div 
        style={{
            transform:"rotateY(20deg) rotateX(20deg) rotateZ(-20deg)" 
        }}
        className={cn('max-w-[85%] group p-3 mx-auto h-full my-auto w-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 shadow-2xl',
            '[--pattern-fg:var(--color-neutral-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10 flex flex-col',
            'mask-radial-from-50% mask-b-from-50%',
            'translate-x-10'
        )}>
            <div className="flex gap-3 items-center">
                <IconCircleDashedCheck className="size-4"/>
                <p className='text-sm font-normal text-black dark:text-white'>Campaign Planner</p>
                
            </div>
            <div className='relative flex-1 bg-neutral-200 mt-4 border border-neutral-200 rounded-2xl'>
                <Pattern/>
                <div className="absolute  rounded-2xl translate-x-12 -translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-0 scale-110 group-hover:scale-100 
                transition-all duration-300 inset-0 bg-white h-full w-full ">
                    <Row 
                    icon={<IconCheck className='size-4 stroke-white text-green-400'/>}
                    text="Fetching Data"
                    time="10s"/>
                    <GradientHr/>
                    <Row 
                    icon={<IconCheck className='size-4 stroke-white text-green-400'/>}
                    text="Processing Data"
                    time="20s"/>
                    <GradientHr/>
                    <Row 
                    icon={<IconCheck className='size-4 stroke-white text-green-400'/>}
                    text="Performing Action"
                    time="30s"/>
                    <GradientHr/>
                    <Row 
                    icon={<IconLoader2 className='size-4 text-white animate-spin' />}
                    text="Waiting"
                    time="40s"
                    variant="warning"/>
                    <GradientHr/>
                </div>
            </div>
        </div>
  )
}

const GradientHr = ()=>{
    return (
        <div className='h-px w-full bg-linear-to-r from-transparent via-neutral-200 to-transparent'></div>
    )
}
const Row = ({icon,text,time,variant="success"}:{
    icon:React.ReactNode;
    text:string;
    time:string;
    variant?:"success"|"warning"|"danger";
})=>{
    return (
                <div className='flex items-center justify-between px-4 py-2'>
                    <div className="flex items-center gap-2">
                        <div className={cn("size-4 flex items-center justify-center rounded-full", 
                            variant==="success" && 'bg-green-500',
                            variant==="warning" && "bg-yellow-500",
                            variant==="danger" && "bg-red-400"
                            )}>
                            {icon}
                        </div>
                        <p className="text-neutral-500 font-medium text-sm">{text}</p>
                    </div>
                    <div className='flex items-center gap-1 text-neutral-400 '>
                        <IconRipple className='size-3'/>
                        <p className='text-[10px] font-bold'>{time}</p>
                    </div>
                </div>
    )

}

const Pattern = ()=>{
    return (
        <div className="absolute inset-0  bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
    )
}