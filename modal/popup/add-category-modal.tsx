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
      p-0 overflow-hidden w-[400px] transition-all
      dark:bg-gray-800
      "
      >
        <DialogHeader className="pt-5 px-6">
          <DialogTitle className="text-base text-center dark:text-white">Thêm Bạn</DialogTitle>
         
        </DialogHeader>
        <DialogFooter className="bg-gray-100 dark:bg-gray-800 px-6 py-4">
          <Button type="submit" className="bg-gray-400 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700" >
            Hủy
          </Button>
          <Button type="submit" className="bg-blue-600 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700" >
            Tìm Kiếm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
