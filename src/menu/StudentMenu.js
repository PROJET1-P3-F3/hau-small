import { MultiLevelMenu, MenuItemCategory } from '@react-admin/ra-navigation'

import { Receipt, AttachMoney, AccountCircle,PictureAsPdf } from '@mui/icons-material'

import authProvider from '../providers/authProvider'

export const StudentMenu = (props) => {
  // const notify = useNotify()
  // const notifyNotImplemented = () => notify('En cours de développement. Ce qui présage quelques exercices pour vous 😉', { type: 'warning' })
  const whoamiId = authProvider.getCachedWhoami().id
  return (
    <MultiLevelMenu variant='categories'>
      <MenuItemCategory to='/profile' name='profile' label='Mon profil' icon={<AccountCircle />} />
      <MenuItemCategory to={whoamiId ? `/students/${authProvider.getCachedWhoami().id}/fees` : '/'} name='fees' label='Frais' icon={<AttachMoney />} />
      <MenuItemCategory to='/grades' name='student-grades' label='Notes' icon={<Receipt />} />
      <MenuItemCategory to={whoamiId ? `/students/${authProvider.getCachedWhoami().id}/transcripts` : '/'} name='pdf' label='PDF' icon={<PictureAsPdf />} />
    </MultiLevelMenu>
  )
}

export default StudentMenu
