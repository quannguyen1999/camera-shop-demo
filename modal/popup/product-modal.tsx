"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios, { AxiosResponse } from "axios";
import { Button } from "@/components/ui/button";
import { useModal } from "./use-modal-store";
import { InputItem } from "@/components/input-item";
import { UploadItem } from "@/components/upload-item";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LoadingItem } from "@/components/loading-item";
import { URL_API_CATEGORY, URL_API_PRODUCT } from "@/constants/url-constant";
import { ComboboxItem } from "@/components/combobox-item";
import Image from "next/image";
import { Plus } from "lucide-react";
interface DropdownModal {
  id: string;
  value: string;
}

interface ImageModal {
  id: string;
  imageUrl: string;
}

export const AddProductModal = () => {
  const apiUrl = URL_API_PRODUCT;
  const ADD_CONSTANT = "addProduct";
  const EDIT_CONSTANT = "editProduct";

  const [loading, setLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState("");
  const [categorys, setCategorys] = useState<DropdownModal[]>([]);

  const [images, setImages] = useState<ImageModal[]>([]);

  const { isOpen, onClose, type, setIsRefresh, id, setId } = useModal();

  const isModalOpen =
    isOpen && (type === ADD_CONSTANT || type === EDIT_CONSTANT);

  const onChangeImage = (id: string, value: string) => {
    setImageUrl(value);
    setImages((prevImages) => [
      ...prevImages,
      {
        id: id,
        imageUrl: value,
      },
    ]);
  };

  const resetMainImage = () => {
    setImageUrl("");
  };

  const clearData = () => {
    setImageUrl("");
    setContent("");
    setQuantity("");
    setPrice(0);
    setCategoryId("");
    setName("");
  };

  useEffect(() => {
    const getById = async () => {
      //Common
      let data = await axios
        .get(`${apiUrl}/${id}`)
        .catch((error) => {
          toast.error("Có lỗi xảy ra");
        })
        .finally(() => {
          setLoading(false);
        });

      if (data != null) {
        const product = data.data.products;
        setImageUrl(product.imageUrl);
        setContent(product.content);
        setQuantity(product.quantity);
        setPrice(product.price);
        setCategoryId(product.categoryId);
        setName(product.name);

        setImages(data.data.images);
      }
    };

    const getAllCategories = async () => {
      let data = await axios
        .get(`${URL_API_CATEGORY}/get-all-name`)
        .catch((error) => {
          toast.error("Có lỗi xảy ra");
        })
        .finally(() => {
          setLoading(false);
        });

      if (data != null) {
        const categories = data.data.items;

        const result: DropdownModal[] = [];
        categories.map((t: any) => {
          result.push({
            id: t.id,
            value: t.contentMenuChild,
          });
        });
        console.log(result);
        setCategorys(result);
      }
    };

    setLoading(true);
    getAllCategories();
    if (type === EDIT_CONSTANT) {
      getById();
    }
    if (type === ADD_CONSTANT) {
      clearData();
    }
    setLoading(false);
  }, [id, type]);

  //syncn data
  useEffect(() => {
    setImageUrl(imageUrl);
    setContent(content);
    setQuantity(quantity);
    setPrice(price);
    setCategoryId(categoryId);
    setName(name);
  }, [imageUrl, content, quantity, price, categoryId]);

  const handleClose = () => {
    onClose();
    setId("");
  };

  const onSubmit = async () => {
    if(validateForm() == false){
        return;
    };

    const parsedValueQuantity = parseInt(quantity, 10);
    const parsedValuePrice = parseInt(price.toString(), 10);
    
    triggerApi(
      type === ADD_CONSTANT
        ? axios.post(apiUrl, {
            imageUrl,
            content,
            quantity: parsedValueQuantity,
            price: parsedValuePrice,
            categoryId,
            name,
            images
          })
        : axios.patch(`${apiUrl}/${id}`, {
            imageUrl,
            content,
            quantity: parsedValueQuantity,
            price: parsedValuePrice,
            categoryId,
            name,
            images
          }),
      type == ADD_CONSTANT ? "Thêm thành công" : "Cập Nhập Thành Công"
    );
  };

  const validateForm = () => {
    if (
      !isValid(imageUrl) ||
      !isValid(content) ||
      !isValid(quantity) ||
      !isValid(categoryId)
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return false;
    }

    return true;
  };

  const triggerApi = async (
    request: Promise<AxiosResponse<any>>,
    messageSuccess: string
  ) => {
    setLoading(true);
    await request
      .catch((error) => {
        toast.error("Có lỗi xảy ra");
      })
      .finally(() => {
        setLoading(false);
      });

    setIsRefresh(true);
    toast.success(messageSuccess);
    setTimeout(() => setIsRefresh(false), 1000);
  };

  const isValid = (value: string) => {
    if (value == undefined || value.toString().trim().length <= 0) {
      return false;
    }
    return true;
  };

  const chooseImage = (urlImage: string) => {
    setImageUrl(urlImage);
  }

  const onChangeValueComboBox = (value: string) => {
    setCategoryId(value);
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent
        className="bg-white text-black 
      p-0 overflow-hidden w-full transition-all
      dark:bg-gray-800
      "
      >
        <DialogHeader className="pt-5 px-6">
          <DialogTitle className="text-base  dark:text-white">
            {type == ADD_CONSTANT ? "Thêm Sản phẩm" : "Sữa Sản phẩm"}
          </DialogTitle>
          <div className="flex flex-col p-4 gap-3">
            <div className="flex flex-row gap-2">
              <ComboboxItem
                currentValue={categoryId}
                onChangeValue={(value) => onChangeValueComboBox(value)}
                label="Loại mặt hàng"
                datas={categorys}
                placeholder="Vui lòng chọn loại mặt hàng"
              />
              <div className="flex-1">
                <InputItem
                  onSetValue={(value: any) => setName(value)}
                  content={name}
                  isMandatory
                  regex=""
                  placeHolder="Vui lòng nhập tên sản phẩm..."
                  label="Tên sản phẩm"
                />
              </div>
            </div>
            <InputItem
              onSetValue={(value: any) => setContent(value)}
              content={content}
              isMandatory
              regex=""
              placeHolder="Vui lòng nhập chi tiết sản phẩm..."
              label="Thông tin chi tiết sản phẩm"
            />
            <div className="flex flex-row gap-2">
              <InputItem
                onSetValue={(value: any) => setQuantity(value)}
                content={quantity}
                isMandatory
                regex=""
                type="number"
                placeHolder="Vui lòng nhập số lượng sản phẩm..."
                label="Số lượng sản phẩm"
              />
              <div className="flex-1">
                <InputItem
                  onSetValue={(value: any) => setPrice(value)}
                  content={price.toString()}
                  isMandatory
                  regex=""
                  type="number"
                  placeHolder="Vui lòng nhập giá sản phẩm..."
                  label="Giá sản phẩm"
                />
              </div>
            </div>
            <UploadItem
              urlImage={imageUrl}
              onSetValue={(value: any) => onChangeImage("", value)}
              label="Hình Sản phẩm"
            />
            <div className="flex flex-row gap-2">
              <div className="flex justify-center items-center">
                <Button
                  className="h-12 font-bold rounded-full"
                  onClick={() => resetMainImage()}
                >
                  <Plus size={15} />
                </Button>
              </div>
              {images.map((t, index) => (
                <div key={index}>
                  <Image
                    src={t.imageUrl}
                    height={500}
                    width={500}
                    className="w-20 h-20 cursor-pointer"
                    alt={t.id}
                    onClick={() => chooseImage(t.imageUrl)}
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogHeader>
        <DialogFooter className="p-5 bg-gray-100 dark:bg-gray-800 px-6 py-4">
          <Button
            onClick={() => onClose()}
            type="submit"
            className="bg-gray-400 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700"
          >
            Hủy
          </Button>

          <Button
            onClick={() => onSubmit()}
            type="submit"
            className="bg-gray-400 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700"
            disabled={loading}
          >
            {loading ? (
              <LoadingItem />
            ) : type == ADD_CONSTANT ? (
              "Thêm"
            ) : (
              "Cập nhập"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
