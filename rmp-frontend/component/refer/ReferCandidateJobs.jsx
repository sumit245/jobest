import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ReferCandidateJobs() {
    const [jobsTotal, setJobs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const fetchJobs = async () => {
        const response = await axios.get('http://localhost:4000/api/jobs/')
        console.log(response.data);
        setJobs(response.data)
    }
    useEffect(() => {
        fetchJobs()
    }, [])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPagination = () => {
        const totalPages = Math.ceil(jobsTotal.length / itemsPerPage);

        return (
            <div className='d-flex justify-content-end'>
                <ul className="pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <li
                            key={index}
                            className={index + 1 === currentPage ? 'page-item active' : 'page-item'}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            <button class="page-link">{index + 1}</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
    const renderNewsCards = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const jobs = jobsTotal.slice(startIndex, endIndex);

        return jobs.map((job, index) => {
            return (
                <div className='card bg-white border-light w-100 mb-4' key={index}>
                    <div className='card-header bg-primary'>
                        <h4 className="fw-bold fs-1 text-center lh-sm text-light">{job.title}</h4>
                    </div>
                    <div className="card-body">
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
            )
        })
    };

    return (
        <div className="col-md-4 bg-white p-4">
            <div className="news-cards-container">{renderNewsCards()}</div>
            {renderPagination()}
        </div>
    )
}
