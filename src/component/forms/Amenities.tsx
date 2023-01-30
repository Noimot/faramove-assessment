import React from "react";
import { data, IData } from "../../utils/amenities-data";
import { useFormikContext } from "formik";

const Amenities = () => {
  const { values, setFieldValue }: any = useFormikContext();
  const handleSelectAmenity = (amenity: IData) => {
    if (!values.amenities.includes(amenity.name)) {
      return [...values.amenities, amenity.name];
    } else {
      return values.amenities.filter((val: string) => {
        return val !== amenity.name;
      })
    }
   
  };
  return (
    <div className="px-63 py-5">
      <h2 className="text-black-1 tracking-widest font-Gilroy-bold text-32 capitalize">
        Amenities{" "}
        <span>
          ({values?.amenities?.length} /{data?.length})
        </span>
      </h2>
      <p className="text-grey-3 font-Gilroy-semibold text-base py-9">
        Pick more than one house amenities (what the house has to offer)
        <span className="text-klooft-red">*</span>
      </p>
      <div className="flex items-center gap-x-5">
        {data.map((amenities: IData) => (
          <div
            key={amenities.id}
            className={`${
              values?.amenities?.includes(amenities.name)
                ? "border-[1.5px] border-green-1"
                : "border-[0.5px] border-grey-3"
            } w-133 h-82 rounded-10 border-solid flex flex-col items-center justify-center capitalize gap-y-3 hover:cursor-pointer`}
            onClick={() =>
              setFieldValue("amenities", handleSelectAmenity(amenities))
            }
          >
            <img src={amenities.icon} alt="" />
            <p className="text-black-2 text-sm font-Gilroy-regular">
              {amenities.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
