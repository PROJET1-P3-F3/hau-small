import { SimpleShowLayout } from 'react-admin'
import { Card, CardHeader, Toolbar } from '@mui/material'

import { useParams } from 'react-router-dom'
import { SelectTranscriptVersion } from './components/ChangeVersion'

export const TranscriptLayout = ({ transcriptId }) => {
  return <SimpleShowLayout>this is</SimpleShowLayout>
}

const TranscriptAction = () => {
  const { transcriptId, studentId } = useParams()
  return (
    <Toolbar>
      <SelectTranscriptVersion idStudent={studentId} idTranscript={transcriptId} onChange={e => console.log(e)} />
    </Toolbar>
  )
}

const TranscriptShow = () => {
  return (
    <Card sx={{ marginTop: '1rem' }}>
      <CardHeader title='Relevé de note' action={<TranscriptAction />} />
    </Card>
  )
}

export default TranscriptShow
