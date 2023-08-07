import { SimpleShowLayout, Show} from 'react-admin'
import authProvider from '../../providers/authProvider'

export const TranscriptLayout = () => {
  
  return (
    <SimpleShowLayout>
      
    </SimpleShowLayout>
  )
}

const TranscriptShow = () => {
  const id = authProvider.getCachedWhoami().id
  return (
    <Show id={id} resource='profile' basePath='/profile' title='Mon profil'>
      <ProfileLayout />
    </Show>
  )
}

export default TranscriptShow
