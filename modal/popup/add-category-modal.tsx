"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import qs from "query-string";
import { Button } from "@/components/ui/button";
import { useModal } from "./use-modal-store";
import { InputItem } from "@/components/input-item";
import { FileUpload } from "@/components/file-upload";
import { UploadItem } from "@/components/upload-item";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LoadingItem } from "@/components/loading-item";

export const AddCategoryModal = () => {
  const [loading, setLoading] = useState(false);

  const [menuParent, setMenuParent] = useState("");
  const [menuChild, setMenuChild] = useState("");
  const [urlImage, setUrlImage] = useState("");

  const { isOpen, onClose, type, setIsRefresh, id, setId } = useModal();

  const isModalOpen =
    isOpen && (type === "addCategory" || type === "editCategory");

  useEffect(() => {
    console.log(id);
    console.log(type);

    const getCategoryById = async () => {
      let data = await axios
        .get(`/api/category/${id}`)
        .catch((error) => {
          toast.error("Có lỗi xảy ra");
        })
        .finally(() => {
          setLoading(false);
        });

      if (data != null) {
        console.log("fuck this " + data.data.categories.contentMenuParent);
        setMenuParent(data.data.categories.contentMenuParent);
        setMenuChild(data.data.categories.contentMenuChild);

        console.log(data.data.categories.imageUrl)
        setUrlImage(data.data.categories.imageUrl);
      }
    };

    if (type === "editCategory") {
      getCategoryById();
    }

    if (type === "addCategory") {
      setMenuParent("");
      setMenuChild("");
      setUrlImage("");
    }
  }, [id, type]);

  const handleClose = () => {
    onClose();
    setId("");
  };

  const onSubmit = async () => {
    if (
      !isValid(menuParent) ||
      !isValid(menuChild)
      // !isValid(urlImage)
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (type == "addCategory") {
      setLoading(true);
      await axios
        .post("/api/category", {
          menuParent,
          menuChild,
          urlImage,
        })
        .catch((error) => {
          toast.error("Có lỗi xảy ra");
        })
        .finally(() => {
          setLoading(false);
        });
      setIsRefresh(true);
      toast.success("Thêm thành công");
      setIsRefresh(false);

      setMenuParent("");
      setMenuChild("");
      setUrlImage("");
    }
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
            {menuParent}
            {menuChild}
            <InputItem
              onSetValue={(value: any) => setMenuParent(value)}
              content={menuParent}
              isMandatory
              regex=""
              placeHolder="Vui lòng nhập danh mục cha..."
              label="Danh mục cha *"
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
            ) : type == "addCategory" ? (
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
