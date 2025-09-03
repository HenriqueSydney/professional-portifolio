'use client'

import { cn } from "@/lib/utils";
import { useState } from "react";
export function InternalizationToggle() {
  const [value, setValue] = useState('left')

  const handleToggle = () => {
    const newValue = value === 'left' ? 'right' : 'left'
    setValue(newValue)
  }

  return (
    <div
      className="relative bg-background border border-input rounded-full cursor-pointer select-none h-10 p-1"
      onClick={handleToggle}
    >
      <div className="w-full h-full flex items-center justify-evenly">
        <div className={`px-4 py-2 text-sm z-10 relative ${value === 'left' ? 'font-extrabold ' : 'font-medium '}`}>
          PT
        </div>
        <div className={`px-4 py-2 text-sm z-10 relative ${value === 'right' ? 'font-extrabold ' : 'font-medium '}`}>
          EN
        </div>
      </div>

      <div
        className={
          cn(
            'absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-primary',
            'rounded-full shadow-sm transition-transform duration-200 ease-in-out',
            value === 'right' ? 'translate-x-full' : 'translate-x-0'
          )}
      />
    </div>
  );
}