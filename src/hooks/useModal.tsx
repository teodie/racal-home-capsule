'use client'
import { useContext, createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export type ModalContextType = {
  modalVisible: boolean,
  // Just here to remind me of how to type a setter function
  setModalVisible: Dispatch<SetStateAction<boolean>> 
  openModal: () => void,
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <ModalContext value={{ modalVisible, openModal, closeModal, setModalVisible }}>
      {children}
    </ModalContext>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)

  if (context === undefined) {
    throw new Error("Your trying to use the useModal hook outside the provider")
  }

  return context
}
