import { create } from 'zustand';
import { getGoogleSheetData } from './sheets';

export const useModalStore = create((set) => ({
  isModalOpen: false,
  closeModal: () => set({isModalOpen: false}),
  openModal: () => set({ isModalOpen: true }),
}));

