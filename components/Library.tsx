"use client"

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import { useAuthModal, useUser, useUploadModal, useOnPlay, useSubscribeModal } from "@/hooks";
import { Song } from "@/types";
import { MediaItem } from "@/components";

interface LibraryProps {
    songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {

    const authModal = useAuthModal();

    const { user, subscription } = useUser();

    const uploadModal = useUploadModal();

    const onPlay = useOnPlay(songs);

    const subscribeModal = useSubscribeModal();

    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }

        if (!subscription) {
            return subscribeModal.onOpen();
        }

        return uploadModal.onOpen();
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
                {songs.map((item) => (
                    <MediaItem
                        key={item.id}
                        data={item}
                        onClick={(id) => onPlay(id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library