'use client'

import { Form, Input, Button } from "@heroui/react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function SignUpForm() {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <Form className="w-full max-[800px]:max-w-lg max-[575px]:max-w-96 max-[800px]:self-center flex flex-col gap-5 max-[1300px]:gap-4 max-[1120px]:gap-3 max-[575px]:gap-2 mt-10 max-[1300px]:mt-8 max-[1120px]:mt-6 max-[575px]:mt-4">
            <Input
                isRequired
                isClearable
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="inside"
                name="email"
                type="email"
                variant="underlined"
            />

            <Input
                isRequired
                endContent={
                    <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                    >
                        {isVisible ? (
                            <Eye className="size-5 text-default-400" />
                        ) : (
                            <EyeOff className="size-5 text-default-400" />
                        )}
                    </button>
                    }
                    label="Create Password"
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                />

<Input
                isRequired
                endContent={
                    <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                    >
                        {isVisible ? (
                            <Eye className="size-5 text-default-400" />
                        ) : (
                            <EyeOff className="size-5 text-default-400" />
                        )}
                    </button>
                    }
                    label="Confirm Password"
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                />

            <Button type="submit" className="w-full rounded-full bg-accent-500 text-bold tracking-wide text-secondary-200 mt-14 max-[1300px]:mt-12 max-[1120px]:mt-10 hover:bg-accent-500/95 transition-all">
                Login
            </Button>
        </Form>
    );
};

export default SignUpForm;