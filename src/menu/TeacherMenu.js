import { AccountCircle, School } from '@mui/icons-material'
import { Menu } from 'react-admin'

export const TeacherMenu = props => (
  <Menu {...props}>
    <Menu.Item to='/profile' name='profile' primaryText='Mon profil' leftIcon={<AccountCircle />} />
    <Menu.Item to='/students' name='students' primaryText='Étudiants' leftIcon={<School />} />
  </Menu>
)

export default TeacherMenu
