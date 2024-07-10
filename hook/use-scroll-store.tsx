import {create} from 'zustand';

interface ModalStore {
    isInMainPage: boolean;
    isAdminPage: boolean;
    setIsMainPage: (isInMainPage: boolean) => void;
    setIsAdminPage: (isAdminPage: boolean) => void;
    
}

export const useScrollStore = create<ModalStore>((set) => ({
    isInMainPage: true,
    isAdminPage: false,
    setIsMainPage: (value = true) => set({isInMainPage: value}),
    setIsAdminPage: (value = false) => set({isAdminPage: value}),
}))