import { Datagrid, ShowButton, TextField } from 'react-admin'
import { CustomDateField } from '../utils'

export const TranscriptsListItems = () => {
  //id, student_id, is_definitive, semester, academic_year,creation_datetime
  return (
    <Datagrid bulkActionButtons={false} rowClick={id => `/transcripts/${id}/show`}>
      <TextField source='ref' label='id' />
      <TextField source='ref' label='student_id' />
      <TextField source='is_definitive' label='is_definitive'/>
      <TextField source='semester' label='semester'/>
      <TextField source='academic_year' label='academic_year'/>
      <CustomDateField source='creation_datetime' label='Date de création' showTime={false} />
      <ShowButton basePath='/transcripts' />
    </Datagrid>
  )
}
