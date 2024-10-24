import React, { useState } from 'react';
import logoWithTitle from "../../assets/logo-title.png";
import  URLBar  from '../URLBar/URLBar'; 
import pen from "../../assets/pen.svg";
import FileDrop from "../FileDrop/FileDrop";

export const Hero = () => {
    const [videoUrl, setVideoUrl] = useState('');  // State to hold the video URL input

    // Handler for the button click
    // const handleTranscriptionURL = () => {
    //     console.log('Transcription for URL:', videoUrl);
    //     // You might want to add logic to call an API or another function here
    // };
  //   const handleTranscriptionFileDrop = () => {
  //     console.log('Transcription for FileDrop:', videoUrl);
  //     // You might want to add logic to call an API or another function here
  // };

    return (
        <div className="flex flex-col items-center mt-20 mb-30 md:mb-50  justify-center p-4 bg-background-black">
            <div className="title text-3xl font-bold mt-30">
                <img src={logoWithTitle} alt="Noted Logo with Title" />
            </div>
            <div className="max-w-xl text-center px-4 mb-8 text-active-grey sm:text-md md:text-md">
                <p>
                    Noted leverages <span className="text-gradient">cutting-edge AI technologies</span> to redefine real-time transcription, crafted to capture and document your key ideas effortlessly. 
                    <span className="text-gradient"> Simply paste the link below OR add the mp3 file</span> and press the 
                    <img className="inline h-7 w-7 fill-current color-gradient" src={pen} alt="pen icon" style={{ filter: 'invert(100%)' }}/> button
                </p>
            </div>
            {/* URL Bar Component */}
            <URLBar videoUrl={videoUrl} setVideoUrl={setVideoUrl} />

            {/* Separator */}
            <div className="flex items-center justify-center my-8">                
                <p className="mx-4 text-gray-500">or</p>
            </div>

            {/* File Drop Component */}
            <div className="relative mt-4 w-full max-w-md">
                <FileDrop />
            </div>
        </div>
    );
};
