import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { makeStyles } from '@mui/styles'
import { Document, Page, pdfjs } from 'react-pdf'
import { useWindowSize } from '../hooks'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString()

const useStyle = makeStyles({
  document: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh'
  }
})

export const PDFViewer = ({ pdf }) => {
  const windowSize = useWindowSize()
  const { document } = useStyle()
  const pdfWidth = Math.floor(windowSize.width * (2 / 3))

  return (
    <Document file={pdf} className={document}>
      <Page width={pdfWidth} pageNumber={1} />
    </Document>
  )
}
