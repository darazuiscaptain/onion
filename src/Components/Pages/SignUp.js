import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../Images/google.png';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import auth from '../../firebase-confiq';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || googleError || updatingError) {
        errorMessage = <p className='text-xs text-red-500 mt-2 font-bold'>{error?.message || googleError?.message}</p>
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        toast.success('Register Successful Dear!!', {
            position: "top-right",
            theme: 'dark',
        });
        reset();
        await updateProfile({ displayName: data.name });
    };
    return (
        <div className='flex justify-center lg:py-6 bg-images'>
            <div className='w-[380px] p-8 bg-orange-50 rounded shadow-md'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
                    <div className='mt-6'>
                        <p>Full Name:</p>
                        <input
                            className='w-full h-[40px] rounded border-2 border-gray-700'
                            type="text"
                            name='name'
                            id='name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Name is Required'
                                }
                            })} />
                        <div>
                            {errors.name?.type === 'required' && <span className="text-xs text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'minLength' && <span className="text-xs text-red-500">{errors.name.message}</span>}
                        </div>
                    </div>

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
                        <input className='bg-red-400 text-white py-2 w-full rounded font-bold' type="submit" value="SignUp" />
                    </div>
                </form>

                {errorMessage}
                <p className='text-center text-xs mt-2'>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
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
                {/* <button
                    onClick={() => signInWithGoogle()}
                    className="w-full btn btn-outline"><img className='mr-4' src={google} alt="" /> Continue with Google
                </button> */}
            </div>
        </div>
    );
};

export default SignUp;