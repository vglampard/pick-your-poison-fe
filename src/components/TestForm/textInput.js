import React from 'react'
import {Controller, useFormContext} from 'react-hook-form'
import TextField from '@material-ui/core'

// MUST HAND DOWN CONTROL AS PROP

export default function textInput({name, label, control}) {

  return (
    <div>
        <Controller name={name}
        control={control}
        render={({field: {onChange, value}, fieldState: {error}, formStae, 
        }) => (
           <TextField  
           helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
        )}
        />



    </div>
  )
}
