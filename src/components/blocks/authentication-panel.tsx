import LogInPrompt from "@/components/bits/log-in-prompt";
import SignUpPrompt from "@/components/bits/sign-up-prompt";

type Props = {
    title: string;
    subtitle: string;
    type: 'log-in' | 'sign-up';
    className?: string;
    children: React.ReactNode;
}

function AuthenticationPanel({ title, subtitle, type, className, children }: Props) {
    return (
        <main className={className}>
            <div className="max-w-xl w-full flex flex-col">
                <h2 className="text-primary-800 max-[800px]:text-center text-7xl max-[1300px]:text-[66px] max-[1120px]:text-5xl max-[575px]:text-4xl font-bold tracking-wide max-[1300px]:tracking-normal">{title}</h2>

                <p className="text-secondary-500 max-[800px]:text-center text-lg max-[1120px]:text-base max-[575px]:text-sm tracking-wide mt-5 max-[1300px]:mt-4 max-[1120px]:mt-3 max-[575px]:mt-2">{subtitle}</p>
                
                {children}

                {(type === 'log-in') ? 
                    <SignUpPrompt className="text-primary-800 self-center text-[15px] max-[1120px]:text-sm max-[575px]:text-[13px] mt-20 max-[1300px]:mt-18 max-[1120px]:mt-16 max-[575px]:mt-14" />:
                    <LogInPrompt className="text-primary-800 self-center text-[15px] max-[1120px]:text-sm max-[575px]:text-[13px] mt-20 max-[1300px]:mt-18 max-[1120px]:mt-16 max-[575px]:mt-14" />
                }
            </div>
        </main>
    )
};

export default AuthenticationPanel;