import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IAddProperty } from "../../../utils/interfaces/property-details";
import PropertyDetails from "./PropertyDetails";
import AddressDetails from "./AddressDetails";
import Photos from "./Photos";

const AddPropertyForm = () => {
  const [step, setStep] = useState<number>(1);
  const handleIncreaseStep = () => {
    setStep((state) => state + 1);
    window.scrollTo(0, 0);
  };
  const handleReduceStep = () => {
    setStep((state) => state - 1);
    window.scrollTo(0, 0);
  };
  const initialValues: IAddProperty = {
    propertyCategory: "",
    propertyName: "",
    beds: 0,
    bluraFinance: "yes",
    propertyCondition: "",
    serviceCharge: 0,
    aboutProperty: "",
    partPayment: 0,
    duration: 0,
    recurringAmount: 0,
    description: "",
    amenities: [],
    propertyAddress: "",
    state: "",
    city: "",
    appointmentNumber: 0,
    photos: [],
  };
  return (
    <main>
      <section className="px-63 py-33 flex items-center gap-x-52 border-b-[1.5px] border-solid border-klooft-grey-1">
        <div className="flex gap-x-3 items-center">
          <span
            className={`${
              step === 1
                ? "text-klooft-grey-1 bg-klooft-red"
                : "text-klooft-grey border-2 border-solid border-klooft-grey"
            } text-sm font-Gilroy-semibold w-8 h-8 rounded-full flex items-center justify-center`}
          >
            1
          </span>
          <p
            className={`${
              step === 1 ? "text-klooft-red" : "text-klooft-grey"
            } w-70 uppercase tracking-widest font-Gilroy-bold text-sm`}
          >
            property details
          </p>
        </div>
        <div className="w-103 border-b-2 border-solid border-klooft-grey-2" />
        <div className="flex gap-x-3 items-center">
          <span
            className={`${
              step === 2
                ? "text-klooft-grey-1 bg-klooft-red"
                : "text-klooft-grey border-2 border-solid border-klooft-grey"
            } text-sm font-Gilroy-semibold w-8 h-8 rounded-full flex items-center justify-center`}
          >
            {" "}
            2
          </span>
          <p
            className={`${
              step === 2 ? "text-klooft-red" : "text-klooft-grey"
            } w-16 uppercase tracking-widest font-Gilroy-bold text-sm`}
          >
            address details
          </p>
        </div>
        <div className="w-103 border-b-2 border-solid border-klooft-grey-2" />
        <div className="flex gap-x-3 items-center">
          <span
            className={`${
              step === 3
                ? "text-klooft-grey-1 bg-klooft-red"
                : "text-klooft-grey border-2 border-solid border-klooft-grey"
            } text-sm font-Gilroy-semibold w-8 h-8 rounded-full flex items-center justify-center`}
          >
            {" "}
            3
          </span>
          <p
            className={`${
              step === 3 ? "text-klooft-red" : "text-klooft-grey"
            } uppercase tracking-widest font-Gilroy-bold text-sm`}
          >
            photos
          </p>
        </div>
        <div className="" />
      </section>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          propertyCategory: Yup.string().required(
            "Property category is required"
          ),
          propertyName: Yup.string().required("Property name is required"),
          beds: Yup.number().required("Number of bed is required"),
          bluraFinance: Yup.string().required("Blura finance is required"),
          propertyCondition: Yup.string().required(
            "Property condition is required"
          ),
          serviceCharge: Yup.number().typeError("This field expects a number"),
          aboutProperty: Yup.string().required(
            "Property description is required"
          ),
          partPayment: Yup.number().required("Part payment is required"),
          duration: Yup.number().required("Duration is required"),
          recurringAmount: Yup.number().required(
            "Recurring amount is required"
          ),
          description: Yup.string().typeError("This field expects a string"),
          amenities: Yup.array()
            .of(Yup.string().min(1))
            .min(1, "Select at least one amenity"),
          propertyAddress: Yup.string().required(
            "Property address is required"
          ),
          state: Yup.string().required("State is required"),
          city: Yup.string().required("City is required"),
          appointmentNumber: Yup.number().typeError(
            "This field expects a number"
          ),
          photos: Yup.array().of(Yup.string().min(1)).min(1),
        })}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            <>
              {step === 1 && (
                <PropertyDetails handleIncreaseStep={handleIncreaseStep} />
              )}
              {step === 2 && (
                <AddressDetails
                  handleIncreaseStep={handleIncreaseStep}
                  handleReduceStep={handleReduceStep}
                />
              )}
              {step === 3 && <Photos handleReduceStep={handleReduceStep} />}
            </>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default AddPropertyForm;
