"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

interface ComboBoxProps {
  datas: any[];
  label: string;
  placeholder: string;
  currentValue: string;
  onChangeValue: (value: string) => void;
}

export const ComboboxItem = ({ datas, label, placeholder, currentValue, onChangeValue }: ComboBoxProps) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(currentValue);
  useEffect(()=> {
    setId(currentValue)
  }, [currentValue]);
  return (
    <div className="flex flex-col gap-2">
      <div>
        <p>{label}</p>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between focus-visible:ring-0 focus-visible:ring-offset-0"
          >
                        {id
              ? datas.find((data) => data.id === id)?.value
              : "Tìm kiếm..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[425px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>Không tìm thấy</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {datas.map((framework) => (
                  <CommandItem
                    key={framework.id}
                    value={framework.id}
                    onSelect={(currentValue) => {
                      setId(currentValue === id ? "" : currentValue);
                      setOpen(false);
                      onChangeValue(id);
                    }}
                    className="cursor-pointer aria-disabled"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        id === framework.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.value}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
