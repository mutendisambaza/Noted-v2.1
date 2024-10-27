import openai
from openai import OpenAI
from dotenv import load_dotenv
import os
import re
load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')
client = OpenAI()


def transcribe_and_chunk(file):
    client = OpenAI()

    # Perform transcription
    transcription = client.audio.transcriptions.create(
        model="whisper-1",
        file=file
    )
    transcript = transcription.text

    # Split transcript into sentences
    sentences = re.split(r'(?<=[.!?])\s+', transcript)
    chunk_size = 175
    chunks = []
    current_chunk = []
    current_word_count = 0

    for sentence in sentences:
        sentence_words = sentence.split()
        sentence_word_count = len(sentence_words)

        # Check if adding the current sentence would exceed the chunk size
        if current_word_count + sentence_word_count > chunk_size and current_chunk:
            # Join the current chunk into a single string and reset
            chunks.append({
                'text': " ".join(current_chunk),
                'timestamp': f"{len(chunks)}:00 min"
            })
            current_chunk = []
            current_word_count = 0

        # Add the sentence to the current chunk
        current_chunk.append(sentence)
        current_word_count += sentence_word_count

    # Append the last chunk if there are remaining sentences
    if current_chunk:
        chunks.append({
            'text': " ".join(current_chunk),
            'timestamp': f"{len(chunks)}:00 min"
        })

    return chunks


# Specify the path to your audio file
# file_path = "/Users/baz/Library/CloudStorage/OneDrive-Personal/Personal/Noted.v2.1/src/assets/Off-White Founder Virgil Abloh Interview on Education, Art, Culture, and Design.mp3"

# # Run the transcription and chunking process
# chunks = transcribe_and_chunk(file_path)

# # Display the results
# print(chunks)