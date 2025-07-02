import { LoginDto } from "./dto";
import { LoginFormSchema } from "./formSchema";
import { LoginFormState } from "./type";

const baseUrl = "https://8000-firebase-zeat-1750930735910.cluster-sumfw3zmzzhzkx4mpvz3ogth4y.cloudworkstations.dev/api";

export const login = async (state: LoginFormState, formData: FormData) => {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const { email, password } = validatedFields.data;
    console.log(baseUrl);
    console.log(email, password);

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
            console.log(token);
            localStorage.setItem('token', token);
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