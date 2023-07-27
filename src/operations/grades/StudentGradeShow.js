import { Show, SimpleShowLayout, TextField } from 'react-admin'

export const StudentGradeShow = () => {
  return (
    <Show id='grades-1' resource='grades' basePath='/grades' title='Notes'>
      <SimpleShowLayout>
        <TextField label='Version' source='version' />
        <TextField label='Pdf url' source='pdfUrl' />
      </SimpleShowLayout>
    </Show>
  )
}
