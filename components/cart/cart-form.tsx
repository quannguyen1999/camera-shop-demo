import { useState } from "react";
import { InputItem } from "../input-item";

export const CartForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col gap-5 p-2">
      <p className="font-bold text-amber-700 text-2xl uppercase">
        thông tin thanh toán
      </p>
      <InputItem
        onSetValue={(value: any) => setEmail(value)}
        content={email}
        isMandatory
        regex=""
        placeHolder="Vui lòng nhập emai..."
        label="Địa chỉ email"
      />
      <div className="flex flex-row gap-5">
        <InputItem
          onSetValue={(value: any) => setName(value)}
          content={name}
          isMandatory
          regex=""
          placeHolder="Vui lòng nhập tên..."
          label="Tên"
        />
        <InputItem
          onSetValue={(value: any) => setMiddleName(value)}
          content={middleName}
          isMandatory
          regex=""
          placeHolder="Vui lòng nhập Họ..."
          label="Họ"
        />
      </div>
      <InputItem
        onSetValue={(value: any) => setAddress(value)}
        content={address}
        isMandatory
        regex=""
        placeHolder="Vui lòng địa chỉ..."
        label="Địa chỉ"
      />

      <InputItem
        onSetValue={(value: any) => setCity(value)}
        content={city}
        isMandatory
        regex=""
        placeHolder="Vui lòng nhập tỉnh/thành phố..."
        label="Tỉnh/Thành phố"
      />

      <InputItem
        onSetValue={(value: any) => setPhone(value)}
        content={phone}
        isMandatory
        regex=""
        type="number"
        placeHolder="Vui lòng Nhập số điện thoại"
        label="Điện thoại"
      />
    </div>
  );
};
