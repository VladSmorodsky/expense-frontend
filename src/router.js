import {createBrowserRouter} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./pages/Login";
import {NotFound} from "./pages/NotFound";
import {Expenses} from "./pages/Expenses";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/expenses',
    element: <Expenses />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);