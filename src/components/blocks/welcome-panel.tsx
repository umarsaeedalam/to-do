import { Star } from "lucide-react";
import Users from "@/components/bits/users";

type Props = {
    title: string;
    subtitle: string;
    className?: string;
};

function WelcomePanel({ title, subtitle, className }: Props) {
    return (
        <aside className={className}>
            <div className="max-w-xl flex flex-col">
                <h1 className="text-7xl max-[1300px]:text-[66px] max-[1120px]:text-5xl font-bold tracking-wide max-[1300px]:tracking-normal">{title}</h1>

                <p className="text-secondary-300 text-lg max-[1120px]:text-base font-light tracking-wide mt-7 max-[1300px]:mt-6">{subtitle}</p>

                <div className="flex gap-10 max-[1120px]:gap-9 items-center text-secondary-300 font-light text-lg tracking-wide mt-16 max-[1300px]:mt-14 max-[1120px]:mt-12">
                    <div>
                        <Users />
                    </div>

                    <div>
                        <div className="flex gap-3 items-center">
                            <div className="flex gap-1">
                                <Star color="orange" fill="orange" className="size-5 max-[1300px]:size-[18px]" />
                                <Star color="orange" fill="orange" className="size-5 max-[1300px]:size-[18px]" />
                                <Star color="orange" fill="orange" className="size-5 max-[1300px]:size-[18px]" />
                                <Star color="orange" fill="orange" className="size-5 max-[1300px]:size-[18px]" />
                                <Star color="orange" fill="orange" className="size-5 max-[1300px]:size-[18px]" />
                            </div>

                            <p className="font-bold">5.0</p>
                        </div>

                        <span className="max-[1120px]:text-[15px]">from 200<span className="font-serif">+</span> reviews</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default WelcomePanel;