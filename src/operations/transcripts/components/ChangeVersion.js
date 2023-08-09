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
      sx={{ minWidth: 240 }}
      onChange={handleChange}
      options={versions}
      value={selected}
      getOptionLabel={e => e.ref}
      renderInput={params => <TextField label='Version' {...params} />}
      loading={isLoading}
    />
  )
}
