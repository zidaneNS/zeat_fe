import { HTMLInputTypeAttribute } from "react"

export default function FormInputField({
    name,
    type,
    placeholder,
    title
}: {
    name: string,
    type: HTMLInputTypeAttribute,
    placeholder: string,
    title: string
}) {
    return (
        <div className="w-full flex flex-col gap-y-2">
            <label htmlFor={name}>{title}:</label>
            <input type={type} id={name} name={name} placeholder={placeholder} className="outline-none w-full py-2 px-4 rounded-md bg-white" />
        </div>
    )
}