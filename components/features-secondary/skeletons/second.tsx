"use client"
import React from 'react'
import {motion} from "motion/react"
import { cn } from '@/lib/utils'
import { FileIcon, Hubspot, HumanIcon, SalesForce, Settings, Sheets } from '@/icons'

export const SkeletonTwo = ()=>{
    return (
        <div className='flex flex-col flex-1 gap-2 rounded-t-3xl bg-neutral-100 border border-neutral-200 
        max-w-sm mx-auto absolute h-full w-full inset-x-0 p-2'>
        </div>
)};