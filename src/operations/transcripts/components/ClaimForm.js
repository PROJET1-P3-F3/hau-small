import { useForm, FormProvider } from 'react-hook-form'
import { claimResolver } from '../../../common/resolvers'
import { useNotify } from 'react-admin'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { transcriptClaimProvider } from '../../../providers/transcript-provider'
import { useParams } from 'react-router-dom'
import { v4 as uuidV4Generator } from "uuid"

const getIdFromClaim = (claim = {}) => ({
  transcriptId: claim.transcript_id,
  versionId: claim.transcript_version_id,
  claimId: claim.id
})

export const ClaimForm = ({ claim = {}, onSubmit }) => {
  const params = useParams()
  const form = useForm({ resolver: claimResolver, mode: 'all', defaultValues: claim })
  const notify = useNotify()
  const [isLoading, setLoading] = useState(false)

  const fetch = async data => {
    try {
      setLoading(true)
      if(!claim.creation_datetime){
        claim.creation_datetime = new Date().toISOString()
      }
      if(!claim.id){
        claim.id = uuidV4Generator()
      }
      await transcriptClaimProvider.saveOrUpdate({ ...claim, ...data }, {
        ...getIdFromClaim(claim),
        studentId: params?.studentId
      })
      notify('Modification effectuer avec succès.')
      onSubmit && onSubmit()
    } catch (error) {
      notify('Une erreur s\'est produite.', { type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = form.handleSubmit(fetch)

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField error={!!form.formState.errors['reason']}
                   helperText={!!form.formState.errors['reason'] && form.formState.errors['reason']?.message}
                   label='Raison' multiline {...form.register('reason')}
                   sx={{ minWidth: '10rem' }}
        />
        <Button type='submit' sx={{maxWidth: "150px", alignSelf: "flex-end", marginTop: 2}} disabled={isLoading}>
          Enregistrer
        </Button>
      </form>
    </FormProvider>
  )
}
