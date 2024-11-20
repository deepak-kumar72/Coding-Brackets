"use client";

import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}

      <Toaster position="bottom-right" />
    </>
  );
};

export default Provider;
