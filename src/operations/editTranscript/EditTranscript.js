import { useEffect, useState } from 'react'
import {
  BooleanInput,
  Edit,
  SimpleForm,
  TextInput,
  useDataProvider,
  required // Ajout de l'import ici
} from 'react-admin'
import { useParams } from 'react-router-dom'

export const TranscriptCreate = props => {
  const params = useParams()
  const studentId = params.studentId
  const [studentRef, setStudentRef] = useState('...')
  const dataProvider = useDataProvider()

  useEffect(() => {
    const fetchStudent = async () => {
      const student = await dataProvider.getOne('students', { id: studentId })
      setStudentRef(student.data.ref)
    }
    fetchStudent()
  }, [studentId, dataProvider])

  return (
    <Edit
      {...props}
      title={`Transcript de ${studentRef}`}
      resource='transcripts'
      redirect={(_basePath, _id, _data) => `students/${studentId}/transcripts`}
    >
      <SimpleForm>
        <TextInput source='semester' name='semester' label='Semestre' fullWidth={true} validate={required()} />
        <TextInput source='academic_year' name='academic_year' label='Année académique' fullWidth={true} validate={required()} />
        <BooleanInput source='is_definitive' label='Définitif ?' name='is_definitive' defaultValue={true} />
      </SimpleForm>
    </Edit>
  )
}

export default TranscriptCreate;
