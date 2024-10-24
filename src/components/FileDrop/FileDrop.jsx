import React, { useState } from 'react';
import TranscribeButton from '../TranscribeButton/TranscribeButton';  // Import the TranscribeButton

const FileDrop = () => {
    

    const [selectedFile, setSelectedFile] = useState(null);  // State to hold the selected file
    const [statusMessage, setStatusMessage] = useState('');  // State to hold the status message

    // Define max size for 1 hour MP3 audio (128 kbps ~ 60 MB)
    const MAX_FILE_SIZE = 60 * 1024 * 1024; // 60 MB in bytes


    // Handler for file selection (both drop and manual selection)
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.target.files ? event.target.files[0] : event.dataTransfer.files[0];

        // Validate the file type
        if (file.type !== 'audio/mpeg') {
            setStatusMessage('Only .mp3 files are allowed.');
            return;
        }

        // Validate the file size (under 60 MB)
        if (file.size > MAX_FILE_SIZE) {
            setStatusMessage('File size exceeds the maximum allowed size for 1 hour of audio (60 MB).');
            return;
        }

        setSelectedFile(file);
        setStatusMessage('File uploaded successfully.');
    };

    const handleTranscriptionFileDrop = async () => {
        if (!selectedFile) {
            setStatusMessage('Oops! Something went wrong and there is no file selected.');
            return;
        }
        setStatusMessage('Transcribing the file...');
    
        // Send file to backend via API
        const response = await fetch('/api/transcribe', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if (result.success) {
            setStatusMessage('Transcription completed! PDF is being generated.');
        } else {
            setStatusMessage('Error during transcription.');
        }
    
    };
    

    const resetFile = () => {
        setSelectedFile(null);  // Reset the file input and status
        setStatusMessage('');
    };

    return (
        <div className="flex flex-col items-center justify-center w-full ">
            <div className='flex items-center justify-center w-full space-x-4'>
                <label
                    htmlFor="dropzone-file"
                    className={`flex flex-col items-center justify-center ${
                        selectedFile ? 'bg-key-red text-white text-sm h-32 max-w-xs' : 'bg-dormant-grey h-64 '
                    } w-full border-2 border-dashed border-key-red rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 transition-all duration-300`}
                >
                    {!selectedFile && (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">MP3 (max 60 MB)</p>
                        </div>
                    )}
                    {selectedFile && (
                        <div className="flex flex-col items-center justify-center w-full h-36 text-center">
                            <p className="text-sm">File selected:</p>
                            <p className=''>{selectedFile.name}</p>
                            <button
                                type="button"
                                onClick={resetFile}
                                className="mt-4 text-sm bg-white text-red-500 py-1 px-3 rounded-md"
                            >
                                Remove File
                            </button>
                        </div>
                    )}
                    <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleDrop}
                    />
                </label>
                
                
                {/* Add TranscribeButton after file is selected */}
                {selectedFile && (
                    <div className='relative h-12 w-16'>
                        <TranscribeButton handleTranscription={handleTranscriptionFileDrop} source={selectedFile} />
                    </div>
                    
                    
                )}
            </div>
            {statusMessage && (
                    <div>
                        <p className={`mt-4 text-sm ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                            {statusMessage}
                        </p>
                    </div>
                )}
        </div>
    );
};

export default FileDrop;
