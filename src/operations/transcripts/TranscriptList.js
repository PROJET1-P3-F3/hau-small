import { useParams } from 'react-router-dom'

import { List } from '@react-admin/ra-rbac'
import { TopToolbar, CreateButton } from 'react-admin'

import { maxPageSize } from '../../providers/dataProvider'
import authProvider from '../../providers/authProvider'

import { WhoamiRoleEnum } from '../../gen/haClient'
import { TranscriptDatagrid } from './utils'

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
      sx={{ marginTop: '1rem' }}
      pagination={false}
      perPage={maxPageSize}
    >
      <TranscriptDatagrid studentId={definedStudentId} />
    </List>
  )
}

export default TranscriptList
