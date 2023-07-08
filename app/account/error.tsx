"use client"

import { Box } from "@/components";

const Error = () => {
    return (
        <Box className="h-full flex items-center justify-center">
            <div className="text-neutral-400">
                <p className="font-semibold">
                    Something went wrong
                </p>
            </div>
        </Box>
    );
}

export default Error