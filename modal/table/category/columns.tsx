"use client";

import { ActionTooltip } from "@/components/action-tooltip";
import { AlertDialogItem } from "@/components/alert-dialog-item";
import { URL_API_CATEGORY } from "@/constants/url-constant";
import axios, { AxiosResponse } from "axios";
import { useModal } from "@/modal/popup/use-modal-store";
import { ColumnDef } from "@tanstack/react-table";
import { ImageOff, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { error } from "console";
import { formatISOStringToDate } from "@/util/function-util";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Category = {
  id: string;
  contentMenuChild: string;
  contentMenuParent: string;
  createdAt: string;
  imageUrl: string;
  updatedAt: string;
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "id",
    
  },
  {
    accessorKey: "contentMenuChild",
    header: "Menu con",
  },
  {
    accessorKey: "contentMenuParent",
    header: "Menu cha",
  },
  {
    accessorKey: "createdAt",
    header: "Ngày tạo",
    cell: ({ row }) => {
      return <p>
        {formatISOStringToDate(row.original.createdAt)}
      </p>
    }
  },
  {
    accessorKey: "imageUrl",
    header: "Hình",
    cell: ({ row }) => {
      const {onOpen} = useModal();


      return (
        <div className="relative h-full w-full">
          <div>
            {row.original.imageUrl == undefined ||
            row.original.imageUrl.length <= 0 ? (
              <ActionTooltip side="top" label="Chưa có hình">
                <ImageOff size={25} />
              </ActionTooltip>
            ) : (
              <Image
                src={row.original.imageUrl}
                height={50}
                width={50}
                alt={row.original.id}
                onClick={() => onOpen("detailImage", "" , row.original.imageUrl)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Ngày cập nhập",
    cell: ({ row }) => {
      return <p>
        {formatISOStringToDate(row.original.updatedAt)}
      </p>
    }
  },
  {
    id: "actionsDelete",
    cell: ({ row }) => {
      const { setIsRefresh} = useModal();
      const deleteItem = async (isConfirm: boolean) => {

        await axios
          .delete(`${URL_API_CATEGORY}/${row.original.id}`)
          .catch((error) => {
            toast.error("Có lỗi xảy ra");
          })
          .finally(() => {
            toast.success("Xóa thành công");
          });

        setIsRefresh(true);
        setTimeout(() => setIsRefresh(false), 1000);
      };
      return <AlertDialogItem deleteItem={deleteItem} />;
    },
  },
  {
    id: "actionEdit",
    cell: ({ row }) => {
      const { onOpen } = useModal();
      return (
        <div
          onClick={() => onOpen("editCategory", row.original.id, "")}
          className="cursor-pointer font-bold text-blue-600"
        >
          Edit
        </div>
      );
    },
  },
];
