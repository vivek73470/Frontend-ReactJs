import React from "react";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { Books } from '../../Pages/Books/Books'
import { EditBook } from "../../Pages/EditBooks/EditBook";
import { Login } from "../../Pages/Login/Login";
import { SingleBook } from "../../Pages/SingleBook/SingleBook";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route
        path="/books/:id"
        element={
          <RequireAuth>
            <SingleBook />
          </RequireAuth>
        }
      />
      <Route
        path="/books/:id/edit"
        element={
          <RequireAuth>
            <EditBook />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};
