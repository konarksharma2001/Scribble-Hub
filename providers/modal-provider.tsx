"use client";

import { useEffect, useState } from "react";

import { RenameModal } from "@/components/modals/rename-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // This UseEffect ensures that any of these modals cannot be rendered on server side.
  // Just on the client side we need them to render, therefore the useEffect hook is only called on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <RenameModal />
    </>
  );
};