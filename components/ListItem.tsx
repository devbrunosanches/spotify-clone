"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";

import { FaPlay } from "react-icons/fa";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href,
}) => {

    const router = useRouter();

    const onClick = () => {

        router.push(href);
    };

    return (
        <button className="flex items-center relative group rounded-md 
                overflow-hidden gap-x-4 bg-blue-100/10 
                hover:bg-blue-100/20 transition 
                pr-4"
            onClick={onClick}
        >
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image
                    src={image}
                    alt="Image"
                    fill
                    className="object-cover"
                />
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            <div className="flex items-center justify-center absolute 
                transition opacity-0 rounded-full bg-blue-600 p-4 
                drop-shadow-md right-5 group-hover:opacity-100 
                hover:scale-110"
            >
                <FaPlay className="text-white" />
            </div>
        </button>
    );
}

export default ListItem