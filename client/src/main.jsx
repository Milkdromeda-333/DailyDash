import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserContext } from './context/UserContext'
import Layout from "./components/Layout";
import App from './App';
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import './styles/index.scss'

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <App />,
     
    }, {
      path: "/dashboard",
      element: <Dashboard />
    }, {
      path: "/goals",
      element: <Goals />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </React.StrictMode>
)
