import React from "react";
import Amenities from "../../forms/Amenities";
import BluralFinance from "../../forms/BluralFinance";
import PropertyDetailsForm from "../../forms/PropertyDetails";
import { IProperty } from "../../../utils/interfaces/property-details";
import Button from "../../shared/Button";
import { useFormikContext } from "formik";

const PropertyDetails = ({ handleIncreaseStep }: IProperty) => {
  const { values, isValid }: any = useFormikContext();
  return (
    <div>
      <div className="flex flex-col divide-y-[1.5px] divide-solid divide-klooft-grey-1">
        <PropertyDetailsForm />
        {values.bluraFinance === "yes" ? <BluralFinance /> : null}
        <Amenities />
      </div>
      <div
        className={`${
          values.bluraFinance === "yes" ? "pb-30" : "pb-147"
        } flex items-center justify-center pt-87`}
      >
        <Button
          btnType="button"
          btnText="next"
          disabled={
            values.bluraFinance === "yes"
              ? !(
                  values.propertyCategory &&
                  values.propertyName &&
                  values.beds &&
                  values.propertyCondition &&
                  values.aboutProperty &&
                  values.amenities.length > 0 &&
                  values.partPayment &&
                  values.recurringAmount &&
                  values.duration
                )
              : !(
                  (values.propertyCategory &&
                    values.propertyName &&
                    values.beds &&
                    values.propertyCondition &&
                    values.aboutProperty &&
                    values.amenities.length > 0) ||
                  (values.partPayment &&
                    values.recurringAmount &&
                    values.duration)
                )
          }
          onClick={handleIncreaseStep}
          className="capitalize bg-klooft-red w-335 h-50 tracking-05 text-white text-base font-Gilroy-semibold rounded-lg disabled:opacity-75"
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
