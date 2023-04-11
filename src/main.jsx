import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from '../src/components/Main/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Error from './components/Error/Error';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';
import AppLied from './components/AppLied/AppLied';
// creating route herer 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      { 
        path: '/jobdet/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('/data.json')
      },
      {
        path:'/appliedJobs',
        element: <AppLied></AppLied>,
        loader: ()=> fetch('/data.json')
      },
      {
        path:'/blog',
        element: <Blogs></Blogs>
      },
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

