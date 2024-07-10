import { useState } from "react";
import { FileUpload } from "./file-upload";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";

interface UploadItemProps {
  label: string;
  onSetValue: (value?: string) => void;
}

export const UploadItem = ({ label, onSetValue }: UploadItemProps) => {
  const [url, setUrl] = useState("");
  const onChange = (url: string) => {
    setUrl(url);
    onSetValue(url);
  };
  return (
    <div className="flex flex-col gap-2">
      <p>{label}</p>
      <div className="text-black border-2 flex items-center justify-center border-gray-200 p-4 rounded-md">
        {url != undefined && url.trim().length > 0 ? (
          <Image height={500} width={500} src={url} className="w-52" alt="none" />
        ) : (
          <UploadButton
            endpoint="serverImage"
            onClientUploadComplete={(res) => onChange(res?.[0].url)}
          />
        )}
      </div>
    </div>
  );
};
