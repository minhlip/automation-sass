'use client';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { menuOptions } from '@/constant/constant';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center border-r-[1px]  flex-col gap-10 py-6 px-2">
      <div className="flex items-center justify-center flex-col gap-8">
        <Link href={'/'} className="flex font-bold flex-row">
          Fuzzie.
        </Link>
        <TooltipProvider>
          {menuOptions.map((option) => (
            <ul key={option.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      className={cn(
                        'group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-2 cursor-pointer',
                        pathName === option.href &&
                          'dark:bg-[#2F006B] bg-[#EEE-FF]'
                      )}
                      href={option.href}
                    >
                      <option.Component selected={pathName === option.href} />
                    </Link>
                  </li>
                </TooltipTrigger>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
      </div>
    </nav>
  );
};

export default Sidebar;
