import { useParams } from 'react-router-dom'
import { List } from '@react-admin/ra-rbac'
import { Button, CreateButton, Datagrid, FunctionField, Link, TextField, TopToolbar } from 'react-admin'
import { Edit as EditIcon } from '@mui/icons-material'
import { maxPageSize } from '../../providers/dataProvider'
import authProvider from '../../providers/authProvider'
import { WhoamiRoleEnum } from '../../gen/haClient'
import { PrevNextPagination } from '../utils'

const Actions = ({ basePath, resource }) => (
  <TopToolbar disableGutters>
    <CreateButton to={basePath + '/create'} resource={resource} />
  </TopToolbar>
)

const TranscriptList = ({ studentId }) => {
  const params = useParams()
  const definedStudentId = studentId ? studentId : params.studentId
  const role = authProvider.getCachedRole()
  return (
    <List
      title='List des relevé de note'
      resource='transcripts'
      label='Relevé de node'
      actions={role === WhoamiRoleEnum.Manager && <Actions basePath={`/students/${definedStudentId}/transcripts`} />}
      filterDefaultValues={{ studentId: definedStudentId }}
      sx={{ marginTop: '0.5rem' }}
      pagination={<PrevNextPagination />}
      perPage={maxPageSize}
    >
      <Datagrid bulkActionButtons={false} rowClick={id => `/students/${definedStudentId}/transcripts/${id}/show`}>
        <TextField source='semester' label='Semestre' />
        <TextField source='academic_year' label='Année académique' />
        <FunctionField label='Est définitive' render={e => (e.is_definitive ? 'Oui' : 'Pas encore')} />
        {role === WhoamiRoleEnum.Manager && (
          <FunctionField
            render={e => (
              <Button onClick={e => e.stopPropagation()} label='Editer' component={Link} to={`/students/${definedStudentId}/transcripts/${e.id}/edit`}>
                <EditIcon />
              </Button>
            )}
          />
        )}
      </Datagrid>
    </List>
  )
}

export default TranscriptList
