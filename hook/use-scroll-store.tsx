import {create} from 'zustand';

interface ModalStore {
    isInMainPage: boolean;
    setIsMainPage: (isInMainPage: boolean) => void;
    
}

export const useScrollStore = create<ModalStore>((set) => ({
    isInMainPage: true,
    setIsMainPage: (value = true) => set({isInMainPage: value})
}))