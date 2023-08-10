import { PictureAsPdf } from '@mui/icons-material'
import TranscriptList from './TranscriptList'
import TranscriptShow from './TranscriptShow'
import { TranscriptCreation } from './TranscriptCreation'
import { TranscriptEdition } from './TranscriptEdition'

const transcripts = {
  show: TranscriptShow,
  edit: TranscriptEdition,
  create: TranscriptCreation,
  list: TranscriptList,
  icon: PictureAsPdf,
  options: { label: 'Relevé de note' }
}

export default transcripts
