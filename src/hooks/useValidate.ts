import { useEffect, useState } from "react";

export type ValidationResultType = {
    isEmptyError: boolean;
    minValueError: boolean;
}

export type ValidatorListType = {
    isEmptyError: boolean;
    minValueError: number;
  };

export const useValidate = (value: string, validators: ValidatorListType): ValidationResultType => {
    const [isEmptyError, setIsEmptyError] = useState(true);
    const [minValueError, setMinValueError] = useState(true);

    useEffect(() => {
        for (const validator in validators) {
            switch(validator) {
                case 'isEmptyError':
                    value ? setIsEmptyError(false) : setIsEmptyError(true);
                    break;
                case 'minValueError':
                    value.length < validators[validator] ? setMinValueError(true) : setMinValueError(false);
                    break;
            }
        }
    }, [value, validators]);

    return {
        isEmptyError,
        minValueError
    }
}