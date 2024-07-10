import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { LoadingItem } from "./loading-item";

interface InputItemProps {
  label: string;
  placeHolder: string;
  isMandatory: boolean;
  regex: string;
  content: string;
  onSetValue: (value?: string) => void;
}

export const InputItem = ({
  label,
  placeHolder,
  isMandatory,
  regex = "",
  content,
  onSetValue
}: InputItemProps) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(content);
  const [error, setError] = useState(false);

  useEffect(()=>{
      setValue(content)
  }, [content])

  const onChangeValue = (value: any) => {
    setValue(value.target.value);
    onSetValue(value.target.value);
  };

  const onCheckValue = () => {
    if (!isMandatory) {
      return;
    }


    setLoading(true);
    if (value == undefined || value == null || value.trim().length <= 0) {
      setError(true);
    } else {
      setError(false);
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col gap-2">
      <p>
        {label} 
        {error && (
          <span className="text-xs font-bold text-red-600">
            ( Vui lòng Nhập )
          </span>
        )}{" "}
      </p>
      <div className="relative">
        <div>
        <Input
          onBlur={() => onCheckValue()}
          onChange={(value) => onChangeValue(value)}
          value={value}
          placeholder={placeHolder}
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        </div>
       
        <div className="absolute -top-3 right-2">
            {loading && <LoadingItem /> }
        </div>
      </div>
    </div>
  );
};
