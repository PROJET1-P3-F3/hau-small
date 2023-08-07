import { AccountCircle, People, Work, Warning } from '@mui/icons-material'
import { MultiLevelMenu } from '@react-admin/ra-navigation'

export const ManagerMenu = props => (
  <MultiLevelMenu>
    <MultiLevelMenu.Item to='/profile' name='profile' label='Mon profil' icon={<AccountCircle />} />
    <MultiLevelMenu.Item to='/teachers' name='teachers' label='Enseignants' icon={<Work />} />
    <MultiLevelMenu.Item name='Opérations sur les étudiants' label='Opérations sur les étudiants'>
      <MultiLevelMenu.Item to='/students' name='students' label='Liste des étudiants' icon={<People />} />
      <MultiLevelMenu.Item to='/fees' name='fees' label='Frais en retard' icon={<Warning />} />
    </MultiLevelMenu.Item>
  </MultiLevelMenu>
)

export default ManagerMenu
