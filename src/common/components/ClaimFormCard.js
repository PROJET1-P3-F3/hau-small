import React from 'react'
import { Typography, Card, CardContent, CardHeader, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form'

export const ClaimFormCard = ({ idTranscript, versionId, sendClaim }) => {
  const onSubmit = data => {
    console.log({
      reason: data.text
    })
  }

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ defaultValues: { text: '' } })

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CardHeader>Test</CardHeader>
        <Typography variant='body2' color='text.secondary'>
          Transcript: {idTranscript}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Version ID: {versionId}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField name='text' label='Texte' fullWidth multiline rows={4} margin='normal' {...register('text', { required: true })} required />
          <Button type='submit' variant='contained' color='primary'>
            Envoyer
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
