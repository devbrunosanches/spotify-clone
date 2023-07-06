import { Song } from "@/types";
import { usePlayer, useAuthModal, useUser } from "@/hooks";

const useOnPlay = (songs: Song[]) => {

    const player = usePlayer();

    const authModal = useAuthModal();

    const { subscription, user } = useUser();

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }

        player.setId(id);
        player.setIds(songs.map((song) => song.id));
    }

    return onPlay
};

export default useOnPlay