import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { List } from '@react-admin/ra-rbac'
import { useDataProvider, TopToolbar, CreateButton } from 'react-admin'

import { maxPageSize } from '../../providers/dataProvider'
import authProvider from '../../providers/authProvider'

import { WhoamiRoleEnum } from '../../gen/haClient'
import { TranscriptsListItems } from './utils'

const Actions = ({ basePath, resource }) => (
  <TopToolbar disableGutters>
    <CreateButton to={basePath + '/create'} resource={resource} />
  </TopToolbar>
)

const TranscriptList = ({ studentId }) => {
  const params = useParams()
  const definedStudentId = studentId ? studentId : params.studentId
  const [studentRef, setStudentRef] = useState('...')
  const dataProvider = useDataProvider()
  const role = authProvider.getCachedRole()
  useEffect(() => {
    const doEffect = async () => {
      const student = await dataProvider.getOne('students', { id: definedStudentId })
      setStudentRef(student.data.ref)
    }
    doEffect()
    // eslint-disable-next-line
  }, [definedStudentId])
  return (
    <List
      title={`Transcriptions de ${studentRef}`}
      resource={'transcripts'}
      label='Transcriptions'
      actions={role === WhoamiRoleEnum.Manager && <Actions basePath={`/students/${definedStudentId}/transcripts`} />}
      filterDefaultValues={{ studentId: definedStudentId }}
      sx={{ marginTop: '1rem' }}
      pagination={false}
      perPage={maxPageSize}
    >
      <TranscriptsListItems />
    </List>
  )
}

export default TranscriptList
