"use client"

import React, { useEffect, useState } from "react";

import { ProductWithPrice } from "@/types";
import { AuthModal, SubscribeModal, UploadModal } from "@/components";

interface ModalProviderProps {
    products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({
    products
}) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
            <SubscribeModal products={products} />
        </>
    );
}

export default ModalProvider