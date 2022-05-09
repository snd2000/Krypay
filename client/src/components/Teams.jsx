import React, { useState } from 'react'

function Teams() {

    return (
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full py-3 px-2 bg-[#0f0e13]">
                <div className='p-5 my-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism shadow-xl'>
                    <img src='../../img/sudipta.jpg' alt='hello' className='rounded-2xl justify-center w-30 shadow-black'/>
                    <h3 className='py-3 text-white font-bold'>Sudipta Narayan Dhar</h3>
                    <p className='text-white font-semibold h-4'>Backend Dev and solidity</p>
                    <p className='text-white font-light h-4'>sudiptanarayandhar@gmail.com</p>
                </div>
                <div className='p-5 my-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism shadow-xl'>
                    <img src='../../img/swarnava.jpg' alt='hello' className='rounded-2xl justify-center w-30 shadow-black'/>
                    <h3 className='py-3 text-white font-bold'>Swarnava Halder</h3>
                    <p className='text-white font-semibold h-4'>Frontend Dev and Blockchain</p>
                    <p className='text-white font-light h-4'>swarnava199halder@gmail.com</p>
                </div>
                <div className='p-5 my-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism shadow-xl'>
                    <img src='../../img/animesh.jpg' alt='hello' className='rounded-2xl justify-center w-30 shadow-black'/>
                    <h3 className='py-3 text-white font-bold'>Animesh Prasadi</h3>
                    <p className='text-white font-semibold h-4'>Unit Testing</p>
                    <p className='text-white font-light h-4'>prasadi.animesh@gmail.com</p>
                </div>
                <div className='p-5 my-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism shadow-xl'>
                    <img src='../../img/risher.jpg' alt='hello' className='rounded-2xl justify-center w-30 shadow-black'/>
                    <h3 className='py-3 text-white font-bold'>Md. Risher Alir</h3>
                    <p className='text-white font-semibold h-4'>Frontend Dev</p>
                    <p className='text-white font-light h-4'>risherali786786@gmail.com</p>
                </div>
                <div className='p-5 my-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism shadow-xl'>
                    <img src='../../img/saurav.jpg' alt='hello' className='rounded-2xl justify-center w-30 shadow-black'/>
                    <h3 className='py-3 text-white font-bold'>Sourav Sarker</h3>
                    <p className='text-white font-semibold h-4'>HR</p>
                    <p className='text-white font-light h-4'>mail.souravsarkar07@gmail.com</p>
                </div>
                <div className='p-5 my-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism shadow-xl'>
                    <img src='../../img/subham.jpg' alt='hello' className='rounded-2xl justify-center w-30 shadow-black'/>
                    <h3 className='py-3 text-white font-bold'>Subham Bhattacharyya</h3>
                    <p className='text-white font-semibold h-4'>Marketing</p>
                    <p className='text-white font-light h-4'>subhampokemaster@gmail.com</p>
                </div>
            </div>
)}
    

export default Teams;