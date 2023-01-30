import React from "react";
import { useField } from "formik";

interface IFormInput {
  label: string;
  name: string;
  onChange?: (data?: any) => void;
  onClick?: () => void;
  required?: boolean;
  placeholder?: string;
}

const FormInput = ({ name, label, required, placeholder, ...rest }: IFormInput) => {
  const [field, { error, touched }] = useField({
    name: name,
    type: name,
  });
  return (
    <div>
      <label className="text-black-1 text-sm text-Gilroy-medium inline-block pb-7">
        {label}
        <span className="text-klooft-red">{required && "*"}</span>
      </label>
      <div className="h-12 border border-solid border-klooft-grey rounded-lg px-4">
        <input
          placeholder={placeholder}
          className="w-full h-full capitalize border-0 outline-0 text-xs text-klooft-grey text-Gilroy-regular"
          {...field}
          {...rest}
        />
      </div>
      {error && touched ? (
        <span className="text-red-1 pt-11 text-Gilroy-regular text-xs">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default FormInput;
