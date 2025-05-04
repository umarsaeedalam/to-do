'use client'

import { Input } from "@heroui/react";
import { CirclePlus } from "lucide-react";
import Task from "../pieces/task";

function Management() {
    return (
        <section className="mt-8 max-[1150px]:mt-7 max-[850px]:mt-6">
            <h1 className="font-bold text-4xl max-[1150px]:text-3xl max-[850px]:text-[27px] max-[700px]:text-2xl">Management</h1>

            <div className="p-5 mt-3 rounded-3xl bg-secondary-300/30 backdrop-filter backdrop-blur-sm border border-secondary-300/30">
                <div className="flex items-center gap-3">
                    <Input 
                        placeholder="Add a new task..." 
                        type="text" 
                        variant="bordered"
                        classNames={{
                            inputWrapper: 'bg-white p-6 max-[850px]:p-5 max-[700px]:p-4'
                        }}
                        className="self-stretch" 
                    />
                    <button className="flex gap-2 max-[700px]:gap-0.5 items-center bg-primary-700 text-secondary-50 py-2.5 max-[850px]:py-[7px] max-[700px]:py-2 px-5 rounded-xl hover:bg-primary-700/90 cursor-pointer transition-all duration-100 transform active:scale-95">
                        <span className="text-lg max-[850px]:text-[17px] max-[700px]:hidden max-[850px]:mt-0.5">Add</span>
                        <CirclePlus className="max-[850px]:size-5 max-[850px]:-mt-0.5 max-[700px]:mt-0" />
                    </button>
                </div>
                <ul className="mt-5 max-[850px]:mt-4 max-[700px]:mt-3 flex flex-col max-[850px]:px-2">
                    <Task
                        description="Reading a book for about 20 to 25 minutes."
                        completed={false} 
                    />
                    <Task
                        description="Finalize Q3 marketing campaign performance report draft. Incorporate detailed feedback from Sarah C. & John A. Meticulously update budget allocation sheet (Sheet 3), double-check cited data sources/refs for accuracy, then distribute final PDF to Sr Mgmt list pre-review for Friday EOD mtg." 
                        completed={true}
                    />
                </ul>
            </div>
        </section>
    )
}

export default Management;