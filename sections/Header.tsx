import { authOptions } from "@/auth"
import CreateChatButton from "@/components/CreateChatButton"
import UserButton from "@/components/UserButton"
import DarkModeToggle from "@components/DarkModeToggle"
import Logo from "@components/Logo"
import { MessagesSquareIcon } from "lucide-react"
import { getServerSession } from "next-auth"
import Link from "next/link"

const Header = async () => {
    const session = await getServerSession(authOptions)
    console.log('Session', session);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
            <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
                <Logo />
                <div className="flex-1 flex items-center justify-end space-x-4">
                    {/* Language selection */}
                    {session ? (
                        <>
                            <Link href={'/chat'} prefetch={false}>
                                <MessagesSquareIcon
                                    className="text-black dark:text-white"
                                />
                            </Link>
                            <CreateChatButton />
                        </>
                    ) : (
                        <Link href={'/pricing'}>
                            Pricing
                        </Link>
                    )}
                    <DarkModeToggle />
                    <UserButton session={session} />
                </div>

            </nav>
            {/* Upgrade banner */}
        </header>
    )
}
export default Header