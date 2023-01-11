import { FC } from "react";
import { ReactNode } from "react";
import MainNavigation from "./main-navigation";

interface ChildrenType {
  children: ReactNode;
}

const Layout: FC<ChildrenType> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className="h-[calc(100vh-96px)] ">{children}</main>
    </>
  );
};

export default Layout;
