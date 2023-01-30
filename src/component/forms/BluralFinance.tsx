import React from "react";
import FormInput from "../shared/FormInput";
import FormSelect from "../shared/FormSelect";
import TextArea from "../shared/TextArea";

const BluralFinance = () => {
  return (
    <div className="px-63 py-5">
      <h2 className="text-black-1 tracking-widest font-Gilroy-bold text-32 capitalize pb-5">
        blura finance
      </h2>
      <div className="flex items-center gap-x-61">
        <div className="flex-[0.5] flex flex-col gap-y-5">
        <FormInput
            label="Amount to be paid (Part Payment)"
            name="partPayment"
            placeholder="0"
            required
          />
          <FormSelect
            label="Spread Duration (monthly)"
            name="duration"
            required
          >
            <option value="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </FormSelect>
          <FormInput
            label="Recurring Amount (monthly)"
            name="recurringAmount"
            placeholder="0"
            required
          />
        </div>
        <div className="flex-[0.5] flex flex-col gap-y-5">
          <TextArea
            name="description"
            label="Description"
            height="h-232"
          />
        </div>
      </div>
    </div>
  );
};

export default BluralFinance;
