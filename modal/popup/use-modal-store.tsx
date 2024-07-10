import {create} from 'zustand';

export type ModalType = 'addCategory' | 'editCategory' | 'deleteCategory' | 'addProduct' | 'addOrder';

interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    isRefresh: boolean;
    id: string,
    onOpen: (type: ModalType, id: string) => void;
    onClose: () => void;
    setIsRefresh: (isRefresh: boolean) => void;
    setId: (id: string) => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    isRefresh: false,
    id: "",
    onOpen: (type, id = "") => set({isOpen: true, type: type, id: id}),
    onClose: () => set({type: null, isOpen: false}),
    setIsRefresh: (isRefresh: boolean) => set({isRefresh: isRefresh}),
    setId: (id: string) => set({id: id}),
}))