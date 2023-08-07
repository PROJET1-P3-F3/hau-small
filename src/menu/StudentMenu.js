import { Menu } from 'react-admin'
import { Receipt, AttachMoney, AccountCircle } from '@mui/icons-material'

import authProvider from '../providers/authProvider'

export const StudentMenu = props => {
  // const notify = useNotify()
  // const notifyNotImplemented = () => notify('En cours de développement. Ce qui présage quelques exercices pour vous 😉', { type: 'warning' })
  const whoamiId = authProvider.getCachedWhoami().id
  return (
    <Menu {...props}>
      <Menu.Item to='/profile' name='profile' primaryText='Mon profil' leftIcon={<AccountCircle />} />
      <Menu.Item to={whoamiId ? `/students/${authProvider.getCachedWhoami().id}/fees` : '/'} name='fees' primaryText='Frais' leftIcon={<AttachMoney />} />
      <Menu.Item to='/grades' name='student-grades' primaryText='Notes' leftIcon={<Receipt />} />
    </Menu>
  )
}

export default StudentMenu
