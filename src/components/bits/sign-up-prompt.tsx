import Link from "next/link";

type Props = {
    className?: string;
}

function SignUpPrompt({ className }: Props) {
    return (
        <p className={className}>
            <span>
                Don<span className="font-serif">&apos;</span>t have an account?
            </span>

            <span>
                &nbsp; 
            </span>

            <Link 
                href="/signup" 
                className="text-accent-500 duration-150 transition-all hover:underline underline-offset-4 hover:text-accent-500/75"
            >
                    Sign up
            </Link>
        </p>
    )
}

export default SignUpPrompt;