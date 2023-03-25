import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cover from "../Images/ok.png"
import { AuthShare } from './AuthContext';

const Home = () => {

    const { user } = useContext(AuthShare);
    const email = user?.email;
    const navigate = useNavigate();

    const userAlert = () => {
        alert('Please Login First');
        navigate('/login')
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: ` url(${cover})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    {/* <h1 className="mb-16 text-5xl font-bold">Call Here </h1> */}
                    {
                        email ?
                            <>
                                <Link to='/meeting'>
                                    <button className="btn btn-primary bg-lime-500 text-black hover:text-white">Let's Join Meeting</button>
                                </Link>
                            </>
                            :
                            <>
                                <button onClick={userAlert} className="btn btn-primary bg-lime-500 text-black hover:text-white">Let's Join Meeting</button>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;