import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";

export const ClaimFormCard = ({ idTranscript, versionId, sendClaim }) => {

  const onSubmit = (data) => {
    console.log({
        reason : data.text
    });
  };

  const {handleSubmit,register,formState: {errors}} = useForm({defaultValues: {text: ''}});

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CardHeader>Test</CardHeader>
        <Typography variant="body2" color="text.secondary">
          Transcript: {idTranscript}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Version ID: {versionId}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="text"
            label="Texte"
            value={claim.text}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            {...register("text", {required: true})}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Envoyer
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
