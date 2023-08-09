import { Card, CardHeader, Toolbar, CardContent, CardActions, Paper, Box, Typography } from '@mui/material'

import { useParams } from 'react-router-dom'
import { SelectTranscriptVersion } from './components/ChangeVersion'
import { useState } from 'react'
import { PDFViewer } from '../../common/components/PDFViewer'

const SHOW_CARD_CONTAINER = { marginTop: '1rem', minHeight: '80vh', marginBottom: '2rem' }

const SHOW_CONTAINER = {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  minHeight: '70vh',
  position: 'relative'
}

const ASIDE_CONTAINER = {
  flexGrow: 2,
  marginInline: 2
}

const ASIDE = {
  background: 'red',
  minHeight: '75vh',
  maxHeight: '90vh',
  overflowY: 'auto',
  padding: '1rem'
}

const ASIDE_TITLE = {
  textAlign: 'center',
  padding: '0.7rem'
}

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
    <Card sx={SHOW_CARD_CONTAINER}>
      <CardHeader title='Relevé de note' action={<TranscriptAction onChange={setVersion} selected={version} />} />
      <CardContent>
        <Box sx={SHOW_CONTAINER}>
          <PDFViewer pdf={version?.pdf} />
          <Box sx={ASIDE_CONTAINER}>
            <Typography sx={ASIDE_TITLE}>Réclamations</Typography>
            <Box sx={ASIDE}>this</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TranscriptShow
