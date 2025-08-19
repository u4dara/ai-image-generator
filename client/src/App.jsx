import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout.jsx';
import { Home, CreatePosts } from './pages/index.js';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/create-post" element={<CreatePosts />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
