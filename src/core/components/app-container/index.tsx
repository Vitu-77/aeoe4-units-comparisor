import { AppFooter } from "@core/components/app-footer.tsx";
import { AppHeader } from "@core/components/app-header";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AppContainer: React.FC<Props> = ({ children }) => (
  <main className="w-full h-full grid grid-rows-[60px_auto_auto]">
    <AppHeader />
    {children}
    <AppFooter />
  </main>
);
