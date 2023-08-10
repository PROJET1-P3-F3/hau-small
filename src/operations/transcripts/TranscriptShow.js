import { Box, Button, Card, CardContent, CardHeader, Chip, IconButton, Paper, Toolbar, Tooltip, Typography, DialogContentText } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PDFViewer } from '../../common/components'
import { ClaimDialog, SelectTranscriptVersion } from './components'
import { ASIDE, ASIDE_ACTIONS, ASIDE_CONTAINER, ASIDE_TITLE, CLAIM_ITEM, SHOW_CARD_CONTAINER, SHOW_CONTAINER } from './style'
import { useGetList, useNotify } from 'react-admin'
import { BUTTON } from '../../haTheme'
import { Edit as EditIcon } from '@mui/icons-material'
import { ClaimForm } from './components/ClaimForm'
import { transcriptClaimProvider } from '../../providers/transcript-provider'

const ClaimStatus = ({ claim }) => {
  const { status, reason } = claim
  const [isLoading, setLoading] = useState(false)
  const params = useParams()
  const notify = useNotify()

  const fetch = async () => {
    try {
      setLoading(true)
      await transcriptClaimProvider.saveOrUpdate({ ...claim, status: 'CLOSED' }, { studentId: params?.studentId })
      notify('La réclamation à été fermé avec succès.', { type: 'success' })
    } catch {
      notify("Une erreur s'est produite", { type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = f => () => {
    fetch()
    f && f()
  }

  return (
    <ClaimDialog
      title='Fermé la réclamation suivante :'
      actions={onClose => (
        <>
          <Button disabled={isLoading} onClick={handleSubmit(onClose)}>
            Oui
          </Button>
          <Button disabled={isLoading} onClick={onClose}>
            Non
          </Button>
        </>
      )}
      content={() => <DialogContentText>{reason}</DialogContentText>}
      openButton={<Chip color={status === 'OPEN' ? 'success' : 'danger'} label={status} sx={{ '&:hover': { background: 'red' }, cursor: 'pointer' }} />}
    />
  )
}

const formatDate = date => new Date(date).toLocaleDateString()

const ClaimItem = ({ claim = {} }) => {
  const { reason, status, creation_datetime } = claim
  return (
    <Box sx={CLAIM_ITEM}>
      <Box>
        <Typography sx={{ marginBottom: 2 }}>{reason}</Typography>
        <ClaimStatus claim={claim} />
      </Box>
      <Box sx={{ textAlign: 'end' }}>
        <Typography sx={{ marginBottom: 2 }}>{formatDate(creation_datetime)}</Typography>
        {status === 'OPEN' && (
          <ClaimDialog
            title='Modification'
            content={handleClose => <ClaimForm onSubmit={handleClose} claim={claim} />}
            openButton={
              <Tooltip title='Modifier'>
                <IconButton size='small'>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            }
          />
        )}
      </Box>
    </Box>
  )
}

const TranscriptShow = () => {
  const [version, setVersion] = useState(null)
  const { transcriptId, studentId } = useParams()
  const { refetch, data: claimList } = useGetList(
    'transcriptsClaim',
    {
      pagination: { page: 1, perPage: 500 },
      filter: { studentId, transcriptId, versionId: version?.id }
    },
    { enabled: false }
  )

  useEffect(() => {
    if (version !== null && version.id !== null) {
      refetch({ pagination: { page: 1, perPage: 500 }, filter: { studentId, transcriptId, versionId: version?.id } })
    }
  }, [version, refetch, studentId, transcriptId])

  const voidClaim = {
    id: '',
    transcript_id: transcriptId,
    transcript_version_id: version?.id,
    status: 'OPEN',
    creation_datetime: null,
    closed_datetime: null,
    reason: ''
  }

  return (
    <Card sx={SHOW_CARD_CONTAINER}>
      <CardHeader
        title='Relevé de note'
        action={
          <Toolbar>
            <SelectTranscriptVersion selected={version} idStudent={studentId} idTranscript={transcriptId} onChange={setVersion} />
          </Toolbar>
        }
      />
      <CardContent>
        <Box sx={SHOW_CONTAINER}>
          <PDFViewer pdf={version?.pdf} />
          <Paper elevation={1} sx={ASIDE_CONTAINER}>
            <Typography sx={ASIDE_TITLE}>Réclamations</Typography>
            <Box sx={ASIDE}>{claimList && claimList.length > 0 && claimList.map(claim => <ClaimItem claim={claim} key={claim.id} />)}</Box>
            <Box sx={ASIDE_ACTIONS}>
              <ClaimDialog
                title='Faire une réclamation'
                content={handleClose => <ClaimForm onSubmit={handleClose} claim={voidClaim} />}
                openButton={<Button sx={BUTTON}>Faire une réclamation</Button>}
              />
            </Box>
          </Paper>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TranscriptShow
