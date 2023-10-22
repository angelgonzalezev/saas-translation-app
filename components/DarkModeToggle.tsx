"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  const darkModeOptions : string[] = ['Light', 'Dark', 'System']

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-900">
        {darkModeOptions.map((mode: any, idx: number) => (
            <div className="hover:bg-slate-100 dark:hover:bg-gray-950 rounded" key={idx}>
                <DropdownMenuItem onClick={() => setTheme(`${mode.toLowerCase()}`)} >
                    {mode}
                </DropdownMenuItem>
            </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
