import { IconCircleDashedCheck, IconClock, IconExclamationCircle, IconPrison, IconRipple } from '@tabler/icons-react'
import React from 'react'
import { cn } from '@/lib/utils'


export const SkeletonOne = ()=>{
    return (
        <div className='perspective-distant h-full w-full -translate-y-10 mask-radial-from-50% mask-r-from-50%'
        style={{
            transform:'rotateX(30deg) rotateZ(15deg) rotateY(-20deg) scale(1.2)'
        }}>
            <SkeletonCard 
            className = "absolute bottom-0 left-11 z-30 max-w-[90%]"
            icon={<IconCircleDashedCheck className='size-4'/>} title="Campaign Planner" description="Creates clear, ready-to-use campaign briefs using product info,
            audience data, and past results." badge={<Badge text="120s" variant="danger"/>}/>  

            <SkeletonCard 
            className = "absolute bottom-12 left-8 z-20"
            icon={<IconExclamationCircle className='size-4'/>} 
            title="Issue Tracker" description="Creates clear, ready-to-use campaign briefs using product info,
            audience data, and past results." 
            badge={<Badge text="10s" variant="success"/>}/>

            <SkeletonCard 
            className = "absolute bottom-18 left-5 max-w-[80%] z-10"
            icon={<IconPrison className='size-4'/>} 
            title="Risk Analysis" description="Creates clear, ready-to-use campaign briefs using product info,
            audience data, and past results." 
            badge={<Badge text="40s" variant="warning"/>}/>
        </div>
    )
}



const SkeletonCard = ({icon,title,description,badge, className}:{
    icon:React.ReactNode;
    title:string;
    description:string;
    badge:React.ReactNode;
    className:string;
})=>{
    return(
    <div className={cn('max-w-[85%] p-3 mx-auto h-fit my-auto w-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 shadow-2xl',className)}>
        <div className="flex gap-3 items-center">
            {icon}
            <p className='text-sm font-normal text-black dark:text-white'>{title}</p>
            {badge}
        </div>
        <p className="text-sm text-neutral-400/80 dark:text-neutral-400/80 font-normal  ">{description}
        </p>
        <div className="flex items-center gap-2 flex-wrap mt-4">
           <Tag text="Google Ads"/>
           <Tag text="Saas"/>
           <Tag text="Content"/>
        </div>
    </div>
    )
}

const Tag = ({text}:{text:string})=>{
    return (
        <div className="px-2 py-1 text-xs rounded-sm bg-neutral-200 dark:bg-neutral-700">{text}</div>
    )
}

const Badge = ({variant,text}:{
    variant:"danger"|"success"|"warning";
    text:string;
})=>{
    return (<div className={cn("p-1 rounded-full flex items-center gap-1 w-fit",
        variant==="danger" && 'bg-red-300/10 border border-red-300 text-red-500',
        variant==="warning" && 'bg-yellow-300/50 border border-yellow-300 text-yellow-500',
        variant==="success" && 'bg-green-300/50 border border-green-300 text-green-500'
    )}>
        <IconClock className={cn("size-3")}/>
        <IconRipple className='size-3'/>
        <p className='text-xs font-normal'>{text}</p>
    </div>
)}