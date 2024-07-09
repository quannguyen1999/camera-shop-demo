'use client'
import React, { useEffect } from "react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"

export const RatioGroupItem = () => {
    const [position, setPosition] = React.useState("Mới Nhất")
    return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ring-offset-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">{position}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="Mới Nhất">Mới Nhất</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Giá Tăng dần">Giá Tăng dần</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Giá giảm dần">Giá giảm dần</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
}