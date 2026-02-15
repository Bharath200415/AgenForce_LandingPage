"use client"

import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export const ModeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const SWITCH = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button onClick={SWITCH} className='size-6 items-center relative justify-center'>
        <SunIcon size={14} className='rotate-0 absolute inset-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0'/>
        <MoonIcon size={14} className='rotate-90 scale-0 absolute inset-0 transition-all duration-200 dark:rotate-0 dark:scale-100'/>

    </button>
  )
};
