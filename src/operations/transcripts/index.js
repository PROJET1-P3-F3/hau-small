import { PictureAsPdf } from '@mui/icons-material'
import TranscriptList from './TranscriptList'
import TranscriptShow from './TranscriptShow'
import { TranscriptCreation } from './TranscriptCreation'

const transcripts = {
  show: TranscriptShow,
  edit: null,
  create: TranscriptCreation,
  list: TranscriptList,
  icon: PictureAsPdf,
  options: { label: 'Relevé de note' }
}

export default transcripts
