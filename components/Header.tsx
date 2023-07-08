"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

import { useAuthModal, usePlayer, useUser } from "@/hooks";

import { Button } from "@/components";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className,
}) => {

    const router = useRouter();

    const authModal = useAuthModal();

    const supabaseClient = useSupabaseClient();

    const { user } = useUser();

    const player = usePlayer();

    const handleLogout = async () => {

        const { error } = await supabaseClient.auth.signOut();
        player.reset();
        router.refresh();

        if (error) {
            toast.error(error.message);
        }
        else {
            toast.success("Logged out");
        }
    }

    return (
        <div className={twMerge(`h-fit bg-gradient-to-b 
            from-red-900 p-6`,
            className
        )}>
            <div className="flex items-center justify-between w-full mb-4">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button className="flex items-center justify-center 
                            rounded-full bg-black hover:scale-110 
                            transition"
                        onClick={() => router.back()}
                    >
                        <RxCaretLeft className="text-white" size={35} />
                    </button>
                    <button className="flex items-center justify-center 
                            rounded-full bg-black hover:scale-110 
                            transition"
                        onClick={() => router.forward()}
                    >
                        <RxCaretRight className="text-white" size={35} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="flex items-center justify-center
                            rounded-full p-2 bg-white hover:scale-110 
                            transition"
                        onClick={() => { }}
                    >
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button className="flex items-center justify-center
                            rounded-full p-2 bg-white hover:scale-110 
                            transition"
                        onClick={() => { }}
                    >
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    {user ? (
                        <div className="flex gap-x-4 items-center">
                            <Button
                                onClick={handleLogout}
                                className="bg-white px-6 py-2"
                            >
                                Logout
                            </Button>
                            <Button
                                onClick={() => router.push('/account')}
                                className="bg-white"
                            >
                                <FaUserAlt />
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Button
                                    className="bg-white px-6 py-2 
                                        text-black font-medium"
                                    onClick={authModal.onOpen}
                                >
                                    Sign up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    className="bg-white px-6 py-2 font-medium"
                                    onClick={authModal.onOpen}
                                >
                                    Log in
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
}

export default Header