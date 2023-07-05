"use client"

import Image from "next/image";

import { useLoadImage } from "@/hooks";
import { Song } from "@/types";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick,
}) => {

    const imageUrl = useLoadImage(data);

    const handleClick = () => {
        if (onClick) {
            return onClick(data.id);
        }

        return null
    };

    return (
        <div className="flex items-center gap-x-3 cursor-pointer 
            bg-gray-900 hover:bg-red-900/50 w-full p-2 rounded-lg"
            onClick={handleClick}
        >
            <div className="relative rounded-md min-h-[48px] 
                min-w-[48px] overflow-hidden"
            >
                <Image
                    src={imageUrl || 'null'}
                    alt="MediaItem"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-white font-semibold truncate">
                    {data.title}
                </p>
                <p className="text-neutral-400 text-sm truncate">
                    By {data.author}
                </p>
            </div>
        </div>
    );
}

export default MediaItem