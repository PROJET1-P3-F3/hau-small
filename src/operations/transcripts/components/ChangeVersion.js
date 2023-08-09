import React, { useEffect } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { useGetTranscriptVersion } from '../utils/use-get-transcript-versions'

export const SelectTranscriptVersion = ({ idStudent, idTranscript, onChange, selected }) => {
  const { versions, isLoading } = useGetTranscriptVersion(idStudent, idTranscript)

  const handleChange = (_event, value) => {
    onChange(value)
  }

  useEffect(() => {
    if (versions.length > 0) {
      onChange(versions[0])
    }
  }, [onChange, versions])

  return (
    <Autocomplete
      onChange={handleChange}
      options={versions}
      getOptionLabel={e => e.ref}
      renderInput={params => <TextField {...params} />}
      loading={isLoading}
      label='Version'
    />
  )
}
