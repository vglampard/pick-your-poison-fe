import TextField from "@material-ui/core/TextField";
import React from "react";
import { Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

export const FormWithHookForm = () => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form>
      <Controller
        name={"textValue"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Text Value"} />
        )}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>
    </form>
  );
};