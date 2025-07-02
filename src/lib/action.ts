import { baseUrl } from "./api";
import { LoginDto } from "./dto";
import { LoginFormSchema } from "./formSchema";
import { LoginFormState } from "./type";

export const login = async (state: LoginFormState, formData: FormData) => {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const { email, password } = validatedFields.data;

    const loginDto: LoginDto = { email, password };

    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(loginDto)
        });
        
        const result = await response.json();
        if (response.status === 200) {
            const token = result.data;
            localStorage.setItem('token', token);
            return { success: true }
        } else if (response.status === 400) {
            const message = result.message;
            return { message }
        } else {
            const error = result.error;
            return { message: error }
        }
    } catch (err) {
        console.log('error fetch login', err);
        return { message: 'uncatch error' }
    }
}