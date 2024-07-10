"use client";

import { AlertDialogItem } from "@/components/alert-dialog-item";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModal } from "@/modal/popup/use-modal-store";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

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
  },
  {
    accessorKey: "imageUrl",
    header: "Hình",
    cell: ({ row }) => {
      return (
        <div className="relative h-full w-full">
          <div>
            <Image
              src={row.original.imageUrl}
              height={50}
              width={50}
              alt={row.original.id}
            />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Ngày cập nhập",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const {onOpen} = useModal();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-red-500">
            <DropdownMenuItem className="cursor-pointer"> Xóa </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={() => onOpen("editCategory",row.original.id)}> Sửa </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
