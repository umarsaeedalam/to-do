import { Square, Trash2, SquareCheckBig } from "lucide-react";

type Props = {
    description: string;
    completed: boolean;
}

function Task({ description, completed }: Props) {
    return (
        <li 
            className="flex gap-5 max-[850px]:gap-4 max-[700px]:gap-3 items-center py-5 max-[700px]:py-4"
        >
            {(completed) ? 
                <SquareCheckBig 
                    className="text-green-600 hover:text-secondary-400 transition-all duration-150 cursor-pointer w-[5%] max-[850px]:size-5 max-[700px]:size-4.5" 
                />:
                <Square 
                    className="text-secondary-400 hover:text-green-600 transition-all duration-150 cursor-pointer w-[5%] max-[850px]:size-5 max-[700px]:size-4.5" 
                />
            }
            <span 
                className={`${completed && 'line-through text-green-600'}  italic text-ellipsis w-[90%] max-[850px]:text-[15px] max-[700px]:text-sm`}
            >
                {description}
            </span>
            <Trash2 
                className="ml-auto cursor-pointer text-red-600 hover:text-red-600/50 transition-all duration-150 w-[5%] max-[850px]:size-5 max-[700px]:size-4.5" 
            />
        </li>
    )
}

export default Task;