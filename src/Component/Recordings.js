import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthShare } from './AuthContext';

const Recordings = () => {

    const { user } = useContext(AuthShare);
    const email = user?.email;

    return (
        <section className="flex items-center h-full p-16 ">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-[600px] text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>{email}
                    </h2>
                    <p className="text-2xl font-semibold uppercase py-5">Sorry, we couldn't find your recordings</p>
                    {/* <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p> */}
                    <Link to='/' >
                        <button className="btn btn-primary px-8 py-3 font-semibold rounded  ">
                            Back to homepage
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default Recordings;