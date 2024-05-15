import { FC, PropsWithChildren } from "react";
import { Navigate, useParams } from "react-router-dom";
import React from "react";

export const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();

  return id! ? (
    <div>{children}</div>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};
