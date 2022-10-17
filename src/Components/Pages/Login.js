import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../Images/google.png'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import auth from '../../firebase-confiq';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, reset, getValues } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
        toast.success('Login Successful Dear', {
            position: "top-right",
            theme: 'dark',
        });
        reset();
    };

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {
        const email = getValues('email')
        await sendPasswordResetEmail(email);
        toast.success('Please check your email dear!!', {
            position: "top-right",
            theme: 'dark',
        });
        reset();
    }

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    let errorMassage;
    if (error || googleError) {
        errorMassage = <p className='text-xs text-red-500 mt-2 font-bold'>{error?.message || googleError?.message}</p>;
    }

    return (
        <div className='flex justify-center lg:py-6 bg-images'>
            <div className='w-[380px] p-8 bg-orange-50 rounded shadow-md'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-2xl font-bold'>Login</h1>
                    <div className='mt-4'>
                        <p>Email:</p>
                        <input
                            className='w-full h-[40px] rounded border-2 border-gray-700'
                            type="email"
                            name="email"
                            id="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                        <div>
                            {errors.email?.type === 'required' && <span className="text-xs text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="text-xs text-red-500">{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p>Password:</p>
                        <input
                            className='w-full h-[40px] rounded border-2 border-gray-700'
                            type="password"
                            name="password"
                            id="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                    message: 'Minimum eight characters, At least One letter, One number and One special character'
                                }
                            })} />
                        <div>
                            {errors.password?.type === 'required' && <span className="text-xs text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span className="text-xs text-red-500">{errors.password.message}</span>}
                        </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='bg-red-400 text-white py-2 w-full rounded font-bold'>Login</button>
                    </div>
                </form>
                {errorMassage}
                <p className='text-center text-xs mt-2'>New to Ema John? <Link className='text-orange-500 font-bold' to='/signUp'>Create New User</Link></p>
                <p className='text-center text-xs mt-2'>Forget Password? <button onClick={resetPassword} className='font-bold text-orange-500 border-none'>Reset Password</button></p>
                <div className='flex justify-around items-center mt-2'>
                    <div className='w-[30%]'>
                        <hr />
                    </div>
                    <span>Or</span>
                    <div className='w-[30%]'>
                        <hr />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-2 border-2 border-gray-700 rounded'>
                    <img className='w-[30px] h-[30px]' src={google} alt="" />
                    <button onClick={() => signInWithGoogle()} className='py-2 rounded font-bold ml-2'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;