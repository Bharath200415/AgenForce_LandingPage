import React from 'react'
import { cn } from '@/lib/utils';

export const Container = ({className,children}:{
    className?:string;
    children:React.ReactNode;
}) => {
  return (
    <div className={cn('max-w-[76em] mx-auto',className)}>{children}</div>
  )
}
