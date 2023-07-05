"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";

import { BsSearch } from "react-icons/bs";

import { useDebounce } from "@/hooks";

import { Input } from "@/components";

const SearchInput = () => {

    const router = useRouter();

    const [value, setValue] = useState<string>('');

    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = {
            title: '',
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query
        });

        router.push(url);
    }, [debouncedValue, router]);

    return (
        <Input
            className="bg-gray-300 hover:bg-white 
                placeholder:text-blue-600"
            placeholder="What do you want to listen to?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default SearchInput