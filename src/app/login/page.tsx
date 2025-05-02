import LogInForm from "@/components/pieces/log-in-form";
import AuthenticationPanel from "@/components/blocks/authentication-panel";
import WelcomePanel from "@/components/blocks/welcome-panel";

function LogInPage() {
    return (
        <div className="flex w-full min-h-dvh items-center text-secondary-50 bg-custom-svg-pattern">
            <WelcomePanel 
                title='Log in your account'
                subtitle='Greetings on your return. We kindly request you to enter your details.'
                className="w-1/2 self-stretch flex items-center justify-center px-10 max-[1300px]:px-8 max-[1120px]:px-6 max-[800px]:hidden"
            />

            <AuthenticationPanel
                title='Welcome Back'
                subtitle='See our software in action with the demo version.' 
                type='log-in' 
                className="w-1/2 max-[800px]:w-full self-stretch flex items-center !bg-white bg-custom-svg-pattern justify-center px-10 max-[1300px]:px-8 max-[1120px]:px-6 max-[575px]:px-4"
            >
                <LogInForm />
            </AuthenticationPanel>
        </div> 
    )
}

export default LogInPage;