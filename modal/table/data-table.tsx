"use client";

import {
  ColumnDef,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onNextPage: (value?: string) => void;
  onPreviousPage: (value?: string) => void;
  isHasNextPage: boolean;
  isHasPreviousPage: boolean;
  totalRecord: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onNextPage,
  onPreviousPage,
  isHasNextPage,
  isHasPreviousPage,
  totalRecord,
}: DataTableProps<TData, TValue>) {
 // Define the default visibility state for columns
 const defaultVisibility: VisibilityState = {
  id: false, // Hide the "email" column by default
  createdAt: false, // Hide the "amount" column by default
  updatedAt: false, // Hide the "amount" column by default
};

const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(defaultVisibility);

  // const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnVisibility,
    },
  });

  return (
    <div className="p-4">
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("id")?.getFilterValue() as string}
          onBlur={(event) =>
            console.log("do later")
          }
          className="max-w-sm focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto focus-visible:ring-0 focus-visible:ring-offset-0">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div>Total page: {totalRecord}</div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPreviousPage()}
          disabled={!isHasPreviousPage}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNextPage()}
          disabled={!isHasNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
