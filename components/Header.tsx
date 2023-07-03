"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

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

    return (
        <div className={twMerge(`h-fit bg-gradient-to-b 
            from-orange-600 p-6`,
            className
        )}>
            <div className="flex items-center justify-between w-full mb-4">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button className="flex items-center justify-center 
                            rounded-full bg-black hover:opacity-75 
                            transition"
                        onClick={() => router.back()}
                    >
                        <RxCaretLeft className="text-white" size={35} />
                    </button>
                    <button className="flex items-center justify-center 
                            rounded-full bg-black hover:opacity-75 
                            transition"
                        onClick={() => router.forward()}
                    >
                        <RxCaretRight className="text-white" size={35} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="flex items-center justify-center
                            rounded-full p-2 bg-white hover:opacity-90 
                            transition"
                        onClick={() => { }}
                    >
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button className="flex items-center justify-center
                            rounded-full p-2 bg-white hover:opacity-90 
                            transition"
                        onClick={() => { }}
                    >
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button
                                className="bg-transparent 
                                        text-blue-300 font-medium"
                                onClick={() => { }}
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="bg-white px-6 py-2"
                                onClick={() => { }}
                            >
                                Log in
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Header