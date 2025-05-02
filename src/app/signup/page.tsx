import SignUpForm from "@/components/pieces/sign-up-form";
import AuthenticationPanel from "@/components/blocks/authentication-panel";
import WelcomePanel from "@/components/blocks/welcome-panel";

function SignInPage() {
    return (
        <div className="flex w-full min-h-dvh items-center text-secondary-50 bg-custom-svg-pattern">
            <AuthenticationPanel
                title="Get Started"
                subtitle="Provide your information to set up your new account quickly." 
                type="sign-up" 
                className="w-1/2 max-[800px]:w-full self-stretch flex items-center !bg-white bg-custom-svg-pattern justify-center px-10 max-[1300px]:px-8 max-[1120px]:px-6 max-[575px]:px-4"
            >
                <SignUpForm />
            </AuthenticationPanel>

            <WelcomePanel 
                title="Join our community"
                subtitle="Welcome. Provide your details below to get started with our platform."
                className="w-1/2 self-stretch flex items-center justify-center px-10 max-[1300px]:px-8 max-[1120px]:px-6 max-[800px]:hidden"
            />
        </div> 
    )
}

export default SignInPage;