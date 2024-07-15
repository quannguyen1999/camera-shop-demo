"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface RatioGroupItemProps {
  menu: any[];
  onSetValue: (value: any) => void;
  content: string
}

export const RatioGroupItem = ({ menu, onSetValue, content }: RatioGroupItemProps) => {
  const [position, setPosition] = React.useState(content);
  useEffect(()=> {
    setPosition(content)
  }, [content])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="ring-offset-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {position}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={(value) => {
            setPosition(value);
            onSetValue(value);
          }}
        >
          {menu.map((t, index) => (
            <DropdownMenuRadioItem key={index} value={t.value}>
              {t.value}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
