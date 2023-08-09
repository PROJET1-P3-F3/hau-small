import { Card, CardHeader, Toolbar, CardContent } from '@mui/material'

import { useParams } from 'react-router-dom'
import { SelectTranscriptVersion } from './components/ChangeVersion'
import { useState } from 'react'
import { PDFViewer } from '../../common/components/PDFViewer'

const TranscriptAction = ({ onChange, selected }) => {
  const { transcriptId, studentId } = useParams()

  return (
    <Toolbar>
      <SelectTranscriptVersion selected={selected} idStudent={studentId} idTranscript={transcriptId} onChange={onChange} />
    </Toolbar>
  )
}

const TranscriptShow = () => {
  const [version, setVersion] = useState(null)

  return (
    <Card sx={{ marginTop: '1rem', minHeight: '80vh' }}>
      <CardHeader title='Relevé de note' action={<TranscriptAction onChange={setVersion} selected={version} />} />
      <CardContent>
        <PDFViewer pdf={version?.pdf} />
      </CardContent>
    </Card>
  )
}

export default TranscriptShow
