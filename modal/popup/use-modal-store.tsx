import {create} from 'zustand';

export type ModalType = 'addCategory' | 'editCategory' | 'deleteCategory' | 'addProduct' | 'addOrder' | 'detailImage' | "editProduct";

interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    isRefresh: boolean;
    id: string,
    image: string,
    onOpen: (type: ModalType, id: string, image: string) => void;
    onClose: () => void;
    setIsRefresh: (isRefresh: boolean) => void;
    setId: (id: string) => void;
    setImage: (image: string) => void;
    
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    isRefresh: false,
    id: "",
    image: "",
    onOpen: (type, id = "", image = "") => set({isOpen: true, type: type, id: id, image: image}),
    onClose: () => set({type: null, isOpen: false}),
    setIsRefresh: (isRefresh: boolean) => set({isRefresh: isRefresh}),
    setId: (id: string) => set({id: id}),
    setImage: (image: string) => set({image: image}),
}))