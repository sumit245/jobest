'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Jobs({ data }) {
    const [jobs, setJobs] = useState([])
    const fetchData = async () => {
        const res = await axios.get('http://localhost:4000/api/jobs/')
        setJobs(res.data)
        console.log(res.data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className='py-2'>
            <div className='container'>
                <h1 className='text-center'>Jobs</h1>
                <div className='row'>
                    {jobs.map((job, index) => (
                        <div className='col-md-4 my-2' key={index}>
                            <div className='card'>
                                <div className='card-header bg-primary text-white'>{job.title}</div>
                                <div className='card-body'>
                                    <div className='d-flex justify-content-between'>
                                        <h6 className="card-title text-capitalize">{job.status}</h6>
                                        <h6>
                                            <span className='text-secondary'>Posted by:</span>
                                            {job.emp_id}
                                        </h6>
                                    </div>
                                    <p className="card-text">{job.description}</p>
                                    <div className='text-center'>
                                        <a href="#" className="btn btn-primary btn-sm">Refer to a candidate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
