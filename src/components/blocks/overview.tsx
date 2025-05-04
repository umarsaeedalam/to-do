function Overview() {
    return (
        <section className="mt-8 max-[1150px]:mt-7 max-[850px]:mt-6 max-[700px]:mt-5">
            <h1 className="font-bold text-4xl max-[1150px]:text-3xl max-[850px]:text-[27px] max-[700px]:text-2xl">Overview</h1>

            <dl className="flex max-[700px]:flex-col gap-5 max-[850px]:gap-3 mt-3">
                <div className="p-5 max-[700px]:py-3 rounded-3xl bg-secondary-300/30 backdrop-filter backdrop-blur-sm border border-secondary-300/30 grow"> 
                    <dt className="text-secondary-500 font-bold tracking-wide max-[850px]:text-[15px] max-[700px]:text-sm">Total</dt>
                    <dd className="text-3xl max-[850px]:text-[27px] max-[700px]:text-2xl font-bold mt-1">10</dd>
                </div>

                <div className="p-5 max-[700px]:py-3 rounded-3xl bg-secondary-300/30 backdrop-filter backdrop-blur-sm border border-secondary-300/30 grow"> 
                    <dt className="text-secondary-500 font-bold tracking-wide max-[850px]:text-[15px] max-[700px]:text-sm">Completed</dt>
                    <dd className="text-3xl max-[850px]:text-[27px] max-[700px]:text-2xl font-bold mt-1">5</dd>
                </div>

                <div className="p-5 max-[700px]:py-3 rounded-3xl bg-secondary-300/30 backdrop-filter backdrop-blur-sm border border-secondary-300/30 grow"> 
                    <dt className="text-secondary-500 font-bold tracking-wide max-[850px]:text-[15px] max-[700px]:text-sm">Completion</dt>
                    <dd className="text-3xl max-[850px]:text-[27px] max-[700px]:text-2xl font-bold mt-1">50<span className="font-sans">%</span></dd>
                </div>
            </dl>
        </section>
    )
};

export default Overview;