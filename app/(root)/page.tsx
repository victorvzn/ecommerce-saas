'use client'

// import { UserButton } from "@clerk/nextjs";
// <UserButton afterSignOutUrl="/" />
 
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  // const onOpen = useStoreModal((state) => state.onOpen)
  // const isOpen = useStoreModal((state) => state.isOpen)

  const { onOpen, isOpen } = useStoreModal()

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <main className="p-4">
      Root page
    </main>
  );
}

export default SetupPage