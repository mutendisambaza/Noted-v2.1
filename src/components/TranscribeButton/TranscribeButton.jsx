import React from 'react';
import pen from "../../assets/pen.svg";

const TranscribeButton = ({ handleTranscription, source }) => {
    
    return (
        <button
            type="button"
            onClick={() => handleTranscription(source)}
            className="absolute border-2 border-white inset-y-2.5 right-2 flex items-center justify-center px-3 py-4 font-bold text-white bg-darker-red rounded-full hover:bg-key-red"
        >
            <img className="h-7 w-7 fill-current color-white" src={pen} alt="pen icon" style={{ filter: 'invert(100%)' }} />
        </button>
    );
};

export default TranscribeButton;
