import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import AboutUs from './pages/AboutUs';
import SignUp from './pages/SignUp';
import Register from './pages/Register';

const App = () => {
  const API_BASE_URL = 'http://localhost:5000'; // Add this constant

  const addJob = async (newJob) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });
      if (!res.ok) throw new Error('Failed to add job');
      return await res.json();
    } catch (error) {
      console.error('Error adding job:', error);
      return null;
    }
  };

  const deleteJob = async (id) => {
    try {
      console.log('Deleting job with ID:', id); // Debug
      const res = await fetch(`${API_BASE_URL}/api/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete job');
      return true;
    } catch (error) {
      console.error('Error deleting job:', error);
      return false;
    }
  };

  const updateJob = async (job) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
      if (!res.ok) throw new Error('Failed to update job');
      return await res.json();
    } catch (error) {
      console.error('Error updating job:', error);
      return null;
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="edit-jobs/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFound />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Register" element={<Register />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;