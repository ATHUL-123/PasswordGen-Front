import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center ">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">500</h1>
            <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                Server Error
            </div>
            <button className="mt-5">
                <Link
                    className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                    to="/"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        Go Home
                    </span>
                </Link>
            </button>
        </main>
    );
};

export default Error;