import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppContextProvider } from './context/appContext.tsx'
import { DashboardHome } from './pages/dashBoardHome.tsx'
import { MyHotels } from './pages/myHotels.tsx'
import { DashBoardPage } from './pages/dashboard.tsx'
import { ManageHotel } from './pages/manageHotel.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
    },
    {
      path: "/dashboard",
      element: <DashboardHome />,
      children: [
        {
          path: "/dashboard",
          element: <DashBoardPage />
        },
        {
          path: "my-hotels",
          element: <MyHotels />,
          children: [
            {
              path: "add-hotel",
              element: <ManageHotel />
            }
          ]
        }
      ]
    }
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
