import { EmailField, FunctionField, SimpleShowLayout, Show, TextField, useRecordContext } from 'react-admin'
import { Link } from '@mui/material'
import authProvider from '../../providers/authProvider'
import { unexpectedValue, CustomDateField } from '../utils'
import { PDFViewer } from '@react-pdf/renderer'

export const TranscriptLayout = (studentId, transcriptId , versionId) => {
  
  const record = useRecordContext();
  
  return (
    <SimpleShowLayout>
      <Typography variant='h3'>
        Transcript : {transcriptId}
      </Typography>
      <Typography variant='h3'>
         Id: {studentId}
      </Typography>
      <Typography variant='h3'>
        versionId : {versionId}
      </Typography>
      <PDFViewer/>
    </SimpleShowLayout>
  )
}

const TranscriptShow = () => {
  const id = authProvider.getCachedWhoami().id
  return (
    <Show id={id} resource='profile' basePath='/profile' title='Transcript'>
      <TranscriptLayout/>
    </Show>
  )
}

export default TranscriptShow
