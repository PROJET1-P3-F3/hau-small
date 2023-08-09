import { PictureAsPdf } from '@mui/icons-material'
import TranscriptList from './TranscriptList'
import TranscriptShow from './TranscriptShow'

const transcripts = {
  show: TranscriptShow,
  edit: null,
  create: null,
  list: TranscriptList,
  icon: PictureAsPdf,
  options: { label: 'Relevé de note' }
}

export default transcripts
