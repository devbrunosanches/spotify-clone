"use client"

import { CircleLoader } from "react-spinners";

import { Box } from "@/components";

const Loading = () => {
    return (
        <Box className="flex items-center justify-center h-full">
            <CircleLoader color="#bd1724" size={40} />
        </Box>
    );
}

export default Loading