import Header from "@/components/blocks/header";

function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-custom-svg-pattern !bg-white min-h-dvh flex justify-center">
            <div className="max-w-7xl w-full text-primary-700 px-10 max-[1150px]:px-8 max-[850px]:px-6 max-[700px]:px-5">
                <Header />

                <section>
                    {children}
                </section>
            </div>
        </div>
    )
}

export default BlogLayout