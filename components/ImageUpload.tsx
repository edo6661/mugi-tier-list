import { UploadDropzone } from "@/lib/utils";
import React from "react";
interface ImageUploadProps {
  setValue: any;
}
const ImageUpload = ({ setValue }: ImageUploadProps) => {
  return (
    <>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => setValue("imageUrl", res[0].url)}
        appearance={{
          container: {
            padding: "0.5rem 0",
          },
        }}
      />
    </>
  );
};

export default ImageUpload;
