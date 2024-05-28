import { useForm } from 'react-hook-form'
import { Type as z, type Static } from '@sinclair/typebox'

import { typeboxResolver } from '@hookform/resolvers/typebox'

export const LoginFormValues = z.Object({
    email: z.String({ minLength: 5, maxLength: 255, format: 'email' }),
    password: z.String({ minLength: 8, maxLength: 255 }),
})

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: typeboxResolver(LoginFormValues) })

    const onSubmit = (data: any) => {
        // Handle login logic here
        console.log(data)
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span>Email is required</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        {...register('password', { required: true })}
                    />
                    {errors.password && <span>Password is required</span>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage
