import React, { useState } from 'react';
import { ClockLoader } from 'react-spinners';

const Loader = () => {
    let [loading, setLoading] = useState(true);
    return (
        <div >
            <p className='text-center uppercase text-sm text-red-500 py-6'>Please, Wait. meeting is loading, Very Soon </p>
            <div className='flex justify-center items-center'>
                <ClockLoader
                    color={"#36d7b7"}
                    loading={loading}
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                ></ClockLoader>
            </div>

        </div>
    );
};

export default Loader;