import React from "react";
import FormInput from "../../shared/FormInput";
import FormSelect from "../../shared/FormSelect";
import { IProperty } from "../../../utils/interfaces/property-details";
import Button from "../../shared/Button";
import { useFormikContext } from "formik";

const AddressDetails = ({ handleReduceStep, handleIncreaseStep }: IProperty) => {
  const { values }: any = useFormikContext();

  return (
    <div className="px-63 pt-5">
      <h2 className="text-black-1 tracking-widest font-Gilroy-bold text-32 capitalize pb-5">
        property details
      </h2>
      <div className="flex items-center gap-x-61">
        <div className="flex-[0.5] flex flex-col gap-y-5">
          <FormInput
            label="Search Address"
            name="propertyAddress"
            required
            placeholder="property address"
          />
          <FormSelect label="State" name="state" required>
            <option value="">state</option>
            <option value="lagos">Lagos</option>
            <option value="kwara">Kwara</option>
          </FormSelect>
        </div>
        <div className="flex-[0.5] flex flex-col gap-y-5">
          <FormSelect label="City" name="city" required>
            <option value="">city</option>
            <option value="lagos">oshodi</option>
            <option value="kwara">offa</option>
          </FormSelect>
          <FormInput
            label="Appointment Number"
            name="appointmentNumber"
            // placeholder="1"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-52 pt-96 pb-60">
        <Button
          btnType="button"
          btnText="back"
          onClick={handleReduceStep}
          className="capitalize border border-solid border-black w-335 h-50 tracking-05 text-klooft-black text-base font-Gilroy-semibold rounded-lg"
        />
        <Button
          btnType="button"
          btnText="next"
          disabled={
            !(
              values.propertyAddress &&
              values.state &&
              values.city
            )
          }
          onClick={handleIncreaseStep}
          className="capitalize bg-klooft-red w-335 h-50 tracking-05 text-white text-base font-Gilroy-semibold rounded-lg disabled:opacity-75"
        />
      </div>
    </div>
  );
};

export default AddressDetails;
