from chromadb import Client
from chromadb.config import Settings
import openai

# Initialize Chroma
chroma_client = Client(Settings(chroma_db_directory="chroma_data"))
collection = chroma_client.get_or_create_collection(name="transcription_chunks")

def store_chunks_in_chroma(chunks):
    for chunk in chunks:
        embedding = openai.Embedding.create(input=chunk['text'], model="text-embedding-ada-002")['data'][0]['embedding']
        collection.add(
            documents=[chunk['text']],
            metadatas=[{"timestamp": chunk['timestamp']}],
            embeddings=[embedding]
        )

def retrieve_chunks(query, num_results=5):
    query_embedding = openai.Embedding.create(input=query, model="text-embedding-ada-002")['data'][0]['embedding']
    results = collection.query(query_embeddings=[query_embedding], n_results=num_results)
    return [{"text": doc, "timestamp": meta["timestamp"]} for doc, meta in zip(results["documents"], results["metadatas"])]
