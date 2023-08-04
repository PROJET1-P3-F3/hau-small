import { Document, Page } from 'react-pdf'
import useWindowSize from '../hooks'

export const PDFViewer = ({ pdfByteArray }) => {
  const windowSize = useWindowSize()
  const pdfWidth = Math.floor(windowSize.width * (2 / 3))
  const pdfHeight = Math.floor(windowSize.height * (2 / 3))

  return (
    <div>
      <Document file={pdfByteArray}>
        <Page width={pdfWidth} height={pdfHeight} pageNumber={1} />
      </Document>
    </div>
  )
}
