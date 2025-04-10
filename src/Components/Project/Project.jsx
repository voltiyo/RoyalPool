export default function Project({ data }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-[100%] h-[350px]">
                <div className="w-[80%] h-[55%] overflow-hidden rounded-md">
                    <img src={data.image} className="w-full" />
                </div>
                <div className="w-2/3 text-center">
                    <h1 className="font-semibold">{data.heading}</h1>
                    <h3 className="text-white/60 text-wrap">{data.description}</h3>
                </div>
            </div>
        </>
    )
}