import { create } from 'zustand';

export const useModalStore = create((set) => ({
  isModalOpen: false,
  closeModal: () => set({isModalOpen: false}),
  openModal: () => set({ isModalOpen: true }),
}));

