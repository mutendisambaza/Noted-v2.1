from PyPDF2 import PdfWriter

def create_pdf(summaries, output_filename="transcript_summary.pdf"):
    pdf_writer = PdfWriter()
    
    for summary in summaries:
        # Formatting each chunk with timestamp
        page = pdf_writer.addBlankPage(width=210, height=297)
        # Add text content to the page - implement as needed

    with open(output_filename, "wb") as f:
        pdf_writer.write(f)
    return output_filename
