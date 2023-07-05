import React, { forwardRef } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
        icon?: IconType;
    }

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    icon,
    ...props
}, ref) => {
    return (
        <input
            type={type}
            className={twMerge(`flex w-full rounded-md bg-neutral-700 
                border border-transparent px-3 py-3 text-sm file:border-0 
                file:bg-transparent file:text-sm file:font-medium 
                placeholder:text-black disabled:cursor-not-allowed 
                disabled:opacity-50 focus:outline-none text-black`,
                disabled && 'opacity-75',
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        />
    )
});

Input.displayName = "Input";

export default Input