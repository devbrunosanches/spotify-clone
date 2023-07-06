"use client"

import { Song } from "@/types";
import { LikeButton, MediaItem } from "@/components";

interface SearchContentProps {
    songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {

    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6
                text-red-500"
            >
                No songs found
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-y-2 w-full px-6">
            {songs.map((song: Song) => (
                <div className="flex items-center gap-x-4 w-full"
                    key={song.id}
                >
                    <div className="flex-1">
                        <MediaItem
                            onClick={() => { }}
                            data={song}
                        />
                    </div>
                    <LikeButton songId={song.id} />
                </div>
            ))}
        </div>
    );
}

export default SearchContent