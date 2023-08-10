import { BooleanInput, Create, NumberInput, SelectInput, SimpleForm } from 'react-admin'
import { useParams } from 'react-router-dom'
import { v4 as uuidV4Generator } from 'uuid'
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material'

const semesterChoices = [
  { id: 'S1', name: 'S1' },
  { id: 'S2', name: 'S2' },
  { id: 'S3', name: 'S3' },
  { id: 'S4', name: 'S4' },
  { id: 'S5', name: 'S5' },
  { id: 'S6', name: 'S6' }
]

export const TranscriptCreation = () => {
  const minYear = new Date().getFullYear() - 2
  const maxYear = minYear + 4
  const params = useParams()
  return (
    <Create
      transform={e => ({
        ...e,
        student_id: params?.studentId,
        creation_datetime: new Date().toISOString(),
        id: uuidV4Generator()
      })}
      resource='transcripts'
      redirect={`/students/${params?.student_id}/transcripts`}
    >
      <SimpleForm>
        <BooleanInput name='is_definitive' source='is_definitive' label='Définitive' options={{ checkedIcon: <CheckCircleIcon /> }} />
        <NumberInput min={minYear} max={maxYear} required name='academic_year' source='academic_year' label='Année académique' />
        <SelectInput name='semester' label='Semestre' choices={semesterChoices} source='semester' />
      </SimpleForm>
    </Create>
  )
}
