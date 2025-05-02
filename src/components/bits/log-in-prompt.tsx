import Link from "next/link";

type Props = {
    className?: string;
}

function LogInPrompt({ className }: Props) {
    return (
        <p className={className}>
            <span>
                Already have an account?
            </span>

            <span>
                &nbsp; 
            </span>

            <Link 
                href="/login" 
                className="text-accent-500 duration-150 transition-all hover:underline underline-offset-4 hover:text-accent-500/75"
            >
                    Log In
            </Link>
        </p>
    )
}

export default LogInPrompt;