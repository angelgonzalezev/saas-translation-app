'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { Session } from "next-auth"
import { Button } from "./ui/button"
import { signIn, signOut } from "next-auth/react"

const UserButton = ({session}: {session: Session | null}) => {
    const options : any[] = [
        {
            title: 'Sign Out',
            link: '/',
            onClick: () => signOut(),
        },
    ];

    //Subscription listener...

    if (!session) return (
        <Button variant={'outline'} onClick={() => signIn()}>
            Sign In
        </Button>
    )
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar name={session.user?.name} image={session.user?.image}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-gray-900">
                <div className="hover:bg-slate-100 dark:hover:bg-gray-950 rounded">
                    <DropdownMenuLabel >{session.user?.name}</DropdownMenuLabel>
                </div>
                <DropdownMenuSeparator />
                {options.map((option: any, idx: number) => (
                    <div className="hover:bg-slate-100 dark:hover:bg-gray-950 rounded" key={idx}>
                        <DropdownMenuItem onClick={option.onClick}>{option.title}</DropdownMenuItem>
                    </div>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserButton