import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import uploadImageIcon from "../../../assets/uploadImgIcon.svg";
import { useFormikContext } from "formik";
import Button from "../../shared/Button";
import { IProperty } from "../../../utils/interfaces/property-details";
import { toast } from "react-hot-toast";

const Photos = ({ handleReduceStep }: IProperty) => {
  const { values, isValid, setFieldValue }: any = useFormikContext();
  const [imgUrl, setImgUrl] = useState<Blob[] | MediaSource[]>([]);
  const handleDrop = (acceptedFiles: any) => {
    setFieldValue("photos", [...values.photos, acceptedFiles[0]]);
    if (acceptedFiles[0]) setImgUrl([...imgUrl, acceptedFiles[0]]);
  };
  const handleDropRejected = () => {
    return toast.error("Maximum file upload size is 1MB");
  };

  return (
    <div className="pt-5 px-63">
      <div className="flex items-end justify-between">
        <div className="flex gap-x-4 items-end">
          <h2 className="text-black-1 tracking-widest font-Gilroy-bold text-32 uppercase">
            photos
          </h2>
          <span className="text-black-1 text-xs tracking-widest font-Gilroy-medium uppercase">
            (required)
          </span>
        </div>
        <p className="text-black-1 text-xs tracking-widest font-Gilroy-medium uppercase">
          required
        </p>
        <div />
      </div>
      <div className="flex flex-col gap-y-35">
        <Dropzone
          onDrop={handleDrop}
          onDropRejected={handleDropRejected}
          accept={{
            "image/*": [".jpeg", ".png", ".jpg", ".gif"],
          }}
          maxSize={10e5}
          maxFiles={5}
          disabled={values.photos.length === 5}
        >
          {({ getRootProps, getInputProps }) => (
            <section className="mt-8 relative mx-auto w-370 h-133 rounded-lg flex justify-center items-center border border-dashed border-klooft-grey box-border cursor-pointer">
              <div
                {...getRootProps()}
                className="flex flex-col items-center gap-y-27"
              >
                <input
                  {...getInputProps()}
                  className="opacity-0 absolute w-0 h-0"
                />
                <img src={uploadImageIcon} alt="" />
                <p className="text-black text-sm font-Gilroy-medium">
                  Drop or <span className="text-klooft-red">Upload</span> an
                  image here
                </p>
              </div>
            </section>
          )}
        </Dropzone>
        <div className="flex items-center justify-center gap-x-6">
          <div className={`${!values.photos[0] && 'border-dashed border border-klooft-grey'} w-185 h-107 rounded-lg`}>
            <img
              src={
                (values.photos[0] &&
                  URL.createObjectURL(values.photos[0]!)) as string
              }
              alt=""
              className={`${values.photos[0] && 'rounded-lg w-full h-full'} object-cover border-none`}
            />
          </div>
          <div className={`${!values.photos[1] && 'border-dashed border border-klooft-grey'} w-185 h-107 rounded-lg`}>
            <img
              src={
                (values.photos[1] &&
                  URL.createObjectURL(values.photos[1]!)) as string
              }
              alt=""
              className={`${values.photos[1] && 'rounded-lg w-full h-full'} object-cover border-none`}
            />
          </div>
          <div className={`${!values.photos[2] && 'border-dashed border border-klooft-grey'} w-185 h-107 rounded-lg`}>
            <img
              src={
                (values.photos[2] &&
                  URL.createObjectURL(values.photos[2]!)) as string
              }
              alt=""
              className={`${values.photos[2] && 'rounded-lg w-full h-full'} object-cover border-none`}
            />
          </div>
          <div className={`${!values.photos[3] && 'border-dashed border border-klooft-grey'} w-185 h-107 rounded-lg`}>
            <img
              src={
                (values.photos[3] &&
                  URL.createObjectURL(values.photos[3]!)) as string
              }
              alt=""
              className={`${values.photos[3] && 'rounded-lg w-full h-full'} object-cover border-none`}
            />
          </div>
          <div className={`${!values.photos[4] && 'border-dashed border border-klooft-grey'} w-185 h-107 rounded-lg`}>
            <img
              src={
                (values.photos[4] &&
                  URL.createObjectURL(values.photos[4]!)) as string
              }
              alt=""
              className={`${values.photos[4] && 'rounded-lg w-full h-full'} object-cover border-none`}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-52 pt-101">
        <Button
          btnType="button"
          btnText="back"
          onClick={handleReduceStep}
          className="capitalize border border-solid border-black w-335 h-50 tracking-05 text-klooft-black text-base font-Gilroy-semibold rounded-lg"
        />
        <Button
          btnType="submit"
          btnText="log data"
          disabled={!isValid}
          className="capitalize bg-klooft-red w-335 h-50 tracking-05 text-white text-base font-Gilroy-semibold rounded-lg disabled:opacity-75"
        />
      </div>
    </div>
  );
};

export default Photos;
