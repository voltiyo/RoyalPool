export default function Review({ data }) {
    return (
        <>
            <div className="flex flex-col items-start justify-center border mx-3 px-5 bg-white/10 py-6 rounded-md">
                <h1 className="font-[Inter] font-bold my-4 text-center text-2xl">{`"${data.content}"`}</h1>

                <div className="flex items-center gap-4">
                    <div>
                        <img src={`${data.image}`} className="size-14 aspect-square rounded-full" />
                    </div>

                    <div>
                        <h2 className="text-white/70 font-semibold text-xl">{data.username}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}