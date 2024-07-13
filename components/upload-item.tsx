import { useEffect, useState } from "react";
import { FileUpload } from "./file-upload";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { CircleX, RemoveFormatting } from "lucide-react";

interface UploadItemProps {
  label: string;
  onSetValue: (value?: string) => void;
  urlImage: string;
}

export const UploadItem = ({
  label,
  onSetValue,
  urlImage,
}: UploadItemProps) => {
  const [url, setUrl] = useState(urlImage);
  const onChange = (url: string) => {
    setUrl(url);
    onSetValue(url);
  };

  const removeUrl = () => {
    setUrl("");
    onSetValue("");
  }

  useEffect(() => {
    setUrl(urlImage);
  }, [urlImage]);

  return (
    <div className="flex flex-col gap-2">
      <p>{label}</p>
      <div className="text-black border-2 flex items-center justify-center border-gray-200 p-4 rounded-md">
        {url != undefined && url.trim().length > 0 ? (
          <div className="relative">
            <Image
              height={500}
              width={500}
              src={url}
              className="w-52 h-52"
              alt="none"
            />
            <div className="absolute text-white rounded-full bg-red-500 cursor-pointer  -top-3 -right-3" onClick={() => removeUrl()}>
              <CircleX size={23} />
            </div>
          </div>
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
