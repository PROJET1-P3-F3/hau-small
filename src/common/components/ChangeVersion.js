import React, { useState } from 'react'
import { Typography, FormControl, NativeSelect, InputLabel } from '@mui/material'

export const SelectVersion = ({ idVersion, idStudent, idTranscript }) => {
  const [version, setVersion] = useState('')
  const allVersions = ['Version 1', 'Version 2', 'Version 3']

  // Fonction pour changer la version
  const changeVersion = newVersion => {
    setVersion(newVersion)
  }

  return (
    <div>
      <Typography variant='h2'>Student ID: {idStudent}</Typography>
      <Typography variant='h3'>Transcript ID: {idTranscript}</Typography>
      <Typography variant='body1'>Current Version: {version}</Typography>

      <FormControl fullWidth>
        <InputLabel variant='standard' htmlFor='version-native'>
          Version
        </InputLabel>
        <NativeSelect
          value={version}
          onChange={e => changeVersion(e.target.value)}
          inputProps={{
            name: 'version',
            id: 'version-native'
          }}
        >
          {allVersions.map((v, k) => (
            <option key={`select_transcript_version-${v}-${k}`} value={v}>
              {v}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  )
}
