import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Document, Page, pdfjs } from 'react-pdf'
import { useWindowSize } from '../hooks'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString()

const useStyle = makeStyles({
  document: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    minHeight: '70vh',
    padding: '0.5rem',
    width: 'fit-content'
  }
})

export const PDFViewer = ({ pdf }) => {
  const windowSize = useWindowSize()
  const { document } = useStyle()
  const pdfWidth = Math.floor(windowSize.width * (3 / 6))

  return (
    <Box sx={{ minWidth: `${pdfWidth}px`, display: 'flex', justifyContent: 'center' }}>
      <Document file={pdf} className={document}>
        <Page width={pdfWidth} pageNumber={1} />
      </Document>
    </Box>
  )
}
