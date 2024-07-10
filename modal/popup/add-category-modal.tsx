"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useModal } from "./use-modal-store";
import { InputItem } from "@/components/input-item";


export const AddCategoryModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "addCategory";

  const handleClose = () => {
    onClose();
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
          <DialogTitle className="text-base text-center dark:text-white">Thêm Mặt Hàng</DialogTitle>
          <div className="flex flex-col p-4 gap-3">
              <InputItem isMandatory regex="" placeHolder="Vui lòng nhập tên mặt hàng..." label="Tên mặt hàng *"/>
              <InputItem isMandatory regex="" placeHolder="Vui lòng nhập danh mục cha..."  label="Danh mục cha *"/>
              <InputItem isMandatory regex="" placeHolder="Vui lòng nhập danh mục con..."  label="Danh mục con *"/>
              

          </div>
        </DialogHeader>
        <DialogFooter className="p-5 bg-gray-100 dark:bg-gray-800 px-6 py-4">
          <Button onClick={() => onClose()} type="submit" className="bg-gray-400 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700" >
            Hủy
          </Button>
          <Button type="submit" className="bg-gray-400 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700" >
            Thêm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
