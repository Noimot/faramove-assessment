import React from "react";
import FormInput from "../shared/FormInput";
import FormSelect from "../shared/FormSelect";
import TextArea from "../shared/TextArea";

const PropertyDetailsForm = () => {
  return (
    <div className="px-63 pt-5 pb-30 ">
      <h2 className="text-black-1 tracking-widest font-Gilroy-bold text-32 capitalize pb-5">
        property details
      </h2>
      <div className="flex items-center gap-x-61">
        <div className="flex-[0.5] flex flex-col gap-y-5">
          <FormSelect
            label="Property Category"
            name="propertyCategory"
            required
          >
            <option value="">property category</option>
            <option value="residentail">residential</option>
          </FormSelect>
          <FormSelect label="Property Name" name="propertyName" required>
            <option value="">property name</option>
            <option value="mini condo">mini condo</option>
          </FormSelect>
          <FormSelect label="Number of Beds" name="beds" required>
            <option value="">0</option>
            <option value="2">2</option>
          </FormSelect>
          <FormSelect
            label="Is this a Blura finance property (Yes/No)"
            name="bluraFinance"
            required
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </FormSelect>
        </div>
        <div className="flex-[0.5] flex flex-col gap-y-5">
          <FormSelect
            label="Property Condition"
            name="propertyCondition"
            required
          >
            <option value="">property type</option>
            <option value="serviced">serviced</option>
          </FormSelect>
          <FormInput
            label="Service Charge (&#8358;)"
            name="serviceCharge"
            placeholder="0"
          />
          <TextArea
            name="aboutProperty"
            label="Description (About Property)"
            required
            height="h-140"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsForm;
