import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { IconType } from 'react-icons';

interface SidebarItemProps {
    label: string;
    icon: IconType;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    icon: Icon,
    active,
    href
}) => {
    return (
        <Link
            href={href}
            className={twMerge(`flex flex-row h-auto items-center 
                w-full gap-x-4 text-md font-medium cursor-pointer 
                hover:text-white transition text-blue-600 
                py-1`,
                // active && "text-white"
            )
            }
        >
            <Icon size={26} />
            <p className="truncate w-full">
                {label}
            </p>
        </Link>
    );
}

export default SidebarItem