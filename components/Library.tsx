"use client"

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

interface LibraryProps {
    songs: string;
}

const Library: React.FC<LibraryProps> = ({
    songs
}) => {

    const onClick = () => {

    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-blue-600" size={26} />
                    <p className="text-blue-600 font-medium text-md">
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus
                    className="text-blue-600 cursor-pointer
                        hover:text-white transition"
                    size={20}
                    onClick={onClick}
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                Songs      
            </div>
        </div>
    );
}

export default Library