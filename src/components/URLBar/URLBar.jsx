import React from 'react';
import TranscribeButton from '../TranscribeButton/TranscribeButton';  // Import the TranscribeButton

const URLBar = ({ videoUrl, setVideoUrl }) => {
    // Handler for input change
    const handleInputChange = (event) => {
        setVideoUrl(event.target.value);
    };
    const handleTranscriptionURL = () => {
        const youtubeUrlPattern = /^https:\/\/www\.youtube\.com\/watch/;

        if (youtubeUrlPattern.test(videoUrl)) {
            console.log('Transcription for URL:', videoUrl);
            // Logic for starting the transcription process can go here
        } else {
            alert('Please enter a valid YouTube URL that starts with "https://www.youtube.com/watch"');
        }
    };

    return (
        <div className="relative mt-4 w-full max-w-md ">
            <label htmlFor="videoUrl" className="block text-lg font-medium text-gray-700"></label>
            <input
                type="text"
                id="videoUrl"
                className="mt-1 block w-full px-3 py-3 cursor-pointer bg-dormant-grey border border-dormant-grey rounded-full shadow-sm focus:outline-none focus:ring-key-red focus:border-key-red sm:text-sm text-gray-300"
                placeholder="https://www.youtube.com/watch?v=..."
                value={videoUrl}
                onChange={handleInputChange}
            />
            {/* Replace the button with TranscribeButton */}
            <TranscribeButton handleTranscription={handleTranscriptionURL} source={videoUrl} />
        </div>
    );
};

export default URLBar;

