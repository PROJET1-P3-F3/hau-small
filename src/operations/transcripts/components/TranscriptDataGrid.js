import { Datagrid, FunctionField, TextField } from 'react-admin'

export const TranscriptDataGrid = ({ studentId }) => {
  return (
    <Datagrid bulkActionButtons={false} rowClick={id => `/students/${studentId}/transcripts/${id}/show`}>
      <TextField source='semester' label='Semestre' />
      <TextField source='academic_year' label='Année académique' />
      <FunctionField label='Est définitive' render={e => (e.is_definitive ? 'Oui' : 'Pas encore')} />
    </Datagrid>
  )
}
