import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import useToken from '../../../Hooks/UseToken';
const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const [token] = useToken(user);
    if (error) {
        return (
            <>
                {
                    toast.error(error?.message)
                }
            </>
        )
    }
    if (loading) {
        return <div className='h-40 mt-10'>{<Loading />}</div>

    };
    if (user) {
        navigate(from, { replace: true })
        return (
            <>
                {
                    toast.success('Thank You! Login Successfull')
                }
            </>
        )
    }

    return (
        <div className="social-media">
            <button
                className="btn btn-primary btn-outline text-black"
                onClick={() => signInWithGoogle()}
            >
                < FcGoogle className='mr-2 text-xl' /> Contine With Google
            </button>

        </div>
    );
};

export default SocialLogin;