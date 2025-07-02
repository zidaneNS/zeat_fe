export type User = {
    name: string,
    email: string,
    img_url?: string,
    phone_number?: string
}

export type LoginFormState = | {
    errors?: {
        email?: string[],
        password?: string[]
    },
    message?: string,
    success?: boolean
} | undefined