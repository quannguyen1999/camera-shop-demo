import React from 'react';
import { MenuItem } from './menu-item';

interface MenuItemProps {
  listChild: { id: string, name: string }[]; // Define the shape of the list items
}

export const MenuItems = ({ listChild }: MenuItemProps) => {
  return (
    <>
      {listChild.map((value, index) => (
        <MenuItem name={value.name} key={index} id={value.id}/>
      ))}
    </>
  );
};