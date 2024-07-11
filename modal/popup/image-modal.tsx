"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useModal } from "./use-modal-store";

export const ImageModal = () => {
    const { isOpen, onClose, type, image, setImage } = useModal();

    const isModalOpen =
    isOpen && (type === 'detailImage' );

    const handleClose = () => {
        onClose();
        setImage("");
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
          <DialogContent
            className="bg-white text-black 
         overflow-hidden w-full transition-all
          dark:bg-gray-800
          "
          >
            <DialogHeader className="">
              <div className="flex flex-col">
               <Image src={image} width={500} height={500} alt="none"/>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    )
}