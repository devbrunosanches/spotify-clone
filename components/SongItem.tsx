"use client"

import Image from "next/image";

import { useLoadImage } from "@/hooks";
import { Song } from "@/types";

import { PlayButton } from "@/components";

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {

    const imagePath = useLoadImage(data);

    return (
        <div className="flex flex-col items-center justify-center
            relative group rounded-lg overflow-hidden gap-x-4 
            bg-red-900/90 cursor-pointer transition p-3 
            hover:scale-105"
            onClick={() => onClick(data.id)}
        >
            <div className="relative aspect-square w-full h-full 
                rounded-md overflow-hidden"
            >
                <Image
                    src={imagePath || 'null'}
                    alt="Image"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full">
                    {data.title}
                </p>
                <p className="text-neutral-400 text-sm pb-4 w-full 
                    truncate"
                >
                    By {data.author}
                </p>
            </div>
            <div className="absolute bottom-24 right-5">
                <PlayButton />
            </div>
        </div>
    );
}

export default SongItem