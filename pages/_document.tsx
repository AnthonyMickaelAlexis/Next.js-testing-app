// import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }
}
export default MyDocument;