import {create} from 'zustand';

interface ModalStore {
    data: any[];
    setData: (data: any[]) => void;
    
}

export const useMenuStore = create<ModalStore>((set) => ({
    data: [],
    setData: (data = []) => set({data: data})
}))