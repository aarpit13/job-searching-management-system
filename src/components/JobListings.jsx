import React, { useEffect, useState } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`Failed to fetch jobs: ${res.status}`);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          {loading ? (
            <div className="flex justify-center items-center w-full h-full">
              <Spinner loading={loading} />
            </div>
          ) : jobs.length === 0 ? (
            <p className="text-center">No jobs available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job._id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobListings;