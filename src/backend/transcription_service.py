import openai
from dotenv import load_dotenv
import os
load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')

def transcribe_and_chunk(file):
    # Use Whisper for transcription
    response = openai.Audio.transcribe("whisper-1", file)
    transcript = response['text']
    
    # Split transcript into one-minute chunks
    chunk_size = 150  # Approximate word count for one minute of audio
    chunks = []
    for i in range(0, len(transcript), chunk_size):
        chunks.append({
            'text': transcript[i:i + chunk_size],
            'timestamp': f"{i // 150} min"
        })
    return chunks


