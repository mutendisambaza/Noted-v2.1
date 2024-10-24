import openai

openai.api_key = 'your-openai-api-key'

def transcribe_audio(audio_bytes):
    """Transcribe audio using OpenAI Whisper."""
    response = openai.Audio.transcribe('whisper-1', audio_bytes)
    transcript = response['text']
    return transcript
