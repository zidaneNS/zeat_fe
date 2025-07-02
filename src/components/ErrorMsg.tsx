export default function ErrorMsg({ errMsg }: { errMsg: string | string[] }) {
    return (
        <p className="text-red-500 font-semibold py-2 px-4 bg-red-200/20 rounded-md text-sm">{errMsg}</p>
    )
}