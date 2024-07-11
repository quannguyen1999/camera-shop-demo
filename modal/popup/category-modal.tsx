"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios, { AxiosResponse } from "axios";
import qs from "query-string";
import { Button } from "@/components/ui/button";
import { useModal } from "./use-modal-store";
import { InputItem } from "@/components/input-item";
import { FileUpload } from "@/components/file-upload";
import { UploadItem } from "@/components/upload-item";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LoadingItem } from "@/components/loading-item";
import { RatioGroupItem } from "@/components/ratio-group-item";
import { AlertDialogItem } from "@/components/alert-dialog-item";
import { URL_API_CATEGORY } from "@/constants/url-constant";

export const AddCategoryModal = () => {
  const apiUrl = URL_API_CATEGORY;
  const ADD_CONSTANT = "addCategory";
  const EDIT_CONSTANT = "editCategory";

  const [loading, setLoading] = useState(false);
  

  const [menuParent, setMenuParent] = useState("");
  const [menuChild, setMenuChild] = useState("");
  const [urlImage, setUrlImage] = useState("");

  const { isOpen, onClose, type, setIsRefresh, id, setId } = useModal();

  const isModalOpen =
    isOpen && (type === ADD_CONSTANT || type === EDIT_CONSTANT);

  const clearData = () => {
    setMenuParent("");
    setMenuChild("");
    setUrlImage("");
  };

  useEffect(() => {
    const getById = async () => {
      //Common
      let data = await axios
        .get(`${apiUrl}${id}`)
        .catch((error) => {
          toast.error("Có lỗi xảy ra");
        })
        .finally(() => {
          setLoading(false);
        });

      if (data != null) {
        setMenuParent(data.data.categories.contentMenuParent);
        setMenuChild(data.data.categories.contentMenuChild);
        setUrlImage(data.data.categories.imageUrl);
      }
    };

    if (type === EDIT_CONSTANT) {
      setLoading(true);
      getById();
      setLoading(true);
    }
    if (type === ADD_CONSTANT) {
      clearData();
    }
  }, [id, type]);

  //syncn data
  useEffect(() => {
    // console.log(menuParent)
    setMenuParent(menuParent);
    setMenuChild(menuChild);
    setUrlImage(urlImage);
  }, [menuParent, menuChild, urlImage]);

  const handleClose = () => {
    onClose();
    setId("");
  };

  const onSubmit = async () => {
    validateForm();
    triggerApi(
      type === ADD_CONSTANT
        ? axios.post(apiUrl, {
            menuParent,
            menuChild,
            urlImage,
          })
        : axios.patch(`${apiUrl}${id}`, {
            menuParent,
            menuChild,
            urlImage,
          }),
      type == ADD_CONSTANT ? "Thêm thành công" : "Cập Nhập Thành Công"
    );
  };

  const validateForm = () => {
    if (
      !isValid(menuParent) ||
      !isValid(menuChild)
      // !isValid(urlImage)
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }
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
    if (value == undefined || value.trim().length <= 0) {
      return false;
    }
    return true;
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent
        className="bg-white text-black 
      p-0 overflow-hidden w-full transition-all
      dark:bg-gray-800
      "
      >
        <DialogHeader className="pt-5 px-6">
          <DialogTitle className="text-base text-center dark:text-white">
            {type == "addCategory" ? "Thêm Mặt Hàng" : "Sữa Mặt Hàng"}
          </DialogTitle>
          <div className="flex flex-col p-4 gap-3">
            <RatioGroupItem
              onSetValue={(value: any) => setMenuParent(value)}
              content={menuParent}
              menu={[
                {
                  value: "Phông nền chụp ảnh",
                },
                {
                  value: "Phụ kiện chụp Food",
                },
              ]}
            />
            <InputItem
              onSetValue={(value: any) => setMenuChild(value)}
              content={menuChild}
              isMandatory
              regex=""
              placeHolder="Vui lòng nhập danh mục con..."
              label="Danh mục con *"
            />
            <UploadItem
              urlImage={urlImage}
              onSetValue={(value: any) => setUrlImage(value)}
              label="Hình Mặt Hàng"
            />
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
