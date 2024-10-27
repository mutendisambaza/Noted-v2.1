from flask import Flask, request, jsonify, send_file
from transcription_service import transcribe_and_chunk
from rag_service import store_chunks_in_chroma, retrieve_chunks
from pdf_service import create_pdf

app = Flask(__name__)

@app.route('/api/upload', methods=['POST'])
def upload_file():
    file = request.files.get('file')
    if not file or file.content_type != 'audio/mpeg':
        return jsonify({"error": "Invalid file type. Only .mp3 allowed."}), 400

    # Transcribe and chunk
    chunks = transcribe_and_chunk(file)
    store_chunks_in_chroma(chunks)

    # Retrieve summaries
    query = request.form.get('query', 'summarize')
    retrieved_chunks = retrieve_chunks(query)
    summaries = [{"timestamp": chunk["timestamp"], "summary": summarize_chunk(chunk["text"])} for chunk in retrieved_chunks]

    # Generate and send PDF
    pdf_path = create_pdf(summaries)
    return send_file(pdf_path, as_attachment=True)

def summarize_chunk(text):
    response = openai.Completion.create(
        model="gpt-4",
        prompt=f"Summarize this text in a concise paragraph: {text}",
        max_tokens=50
    )
    return response['choices'][0]['text']

if __name__ == '__main__':
    app.run(debug=True)
