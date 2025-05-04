'use client'

import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { CircleUserRound, ChevronDown } from "lucide-react";
import { useState } from "react";

function User() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOnClick() {
        setIsOpen(false);
    };

    return (
        <Popover placement="bottom" showArrow={true} isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <PopoverTrigger>
                <div className="flex gap-3 max-[850px]:gap-2 max-[700px]:1.5 items-center cursor-pointer text-primary-700 hover:text-primary-700/75 transition-all duration-100">
                    <CircleUserRound className="size-8 max-[850px]:size-7 max-[700px]:size-6" />
                    <p className="font-bold max-[850px]:text-[15px] max-[700px]:text-sm">Umar Saeed</p>
                    <ChevronDown className="size-3.5 max-[850px]:size-3 max-[700px]:size-2.5" />
                </div>   
            </PopoverTrigger>
            <PopoverContent className="p-1">
                    <button 
                        onClick={handleOnClick} 
                        className="px-5 py-2 text-sm max-[700px]:text-[13px] font-bold rounded-xl cursor-pointer hover:bg-secondary-200 transition-all duration-100"
                    >
                        Log Out
                    </button>
            </PopoverContent>
        </Popover>
    );
}

export default User;