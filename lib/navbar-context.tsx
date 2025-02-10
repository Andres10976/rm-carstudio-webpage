"use client";

import React, { createContext, useContext, useState } from "react";

type NavbarContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
}
