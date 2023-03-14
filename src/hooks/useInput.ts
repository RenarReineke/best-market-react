import React, { useState } from "react";
import { ValidationResultType, useValidate, ValidatorListType } from "./useValidate";

export type InputReturn = {
  value: string;
  setValue: (value: string) => void;
  dirtyValue: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validators: ValidationResultType;
};

export const useInput = (validators: ValidatorListType): InputReturn => {
  const [value, setValue] = useState("");
  const [dirtyValue, setDirtyValue] = useState(false);

  const validatorsResult = useValidate(value, validators);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirtyValue(true);
  };

  return {
    value,
    setValue,
    dirtyValue,
    onChange,
    onBlur,
    validators: validatorsResult,
  };
};
