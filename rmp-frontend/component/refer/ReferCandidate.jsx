'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ReferCandidate() {
    const [jobsTotal, setJobs] = useState([])
    const [invalidFName, setInvalidFName] = useState('')
    const [invalidLName, setInvalidLName] = useState('')
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
            <ul className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <li
                        key={index}
                        className={index + 1 === currentPage ? 'page-item active' : 'page-item'}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        <a class="page-link" href="#">{index + 1}</a>

                    </li>
                ))}
            </ul>
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
                        <h3 className="fw-bold fs-1 fs-lg-1 text-center lh-sm text-light">{job.title}</h3>
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
                            <a href="#" className="btn btn-primary">Refer to a candidate</a>
                        </div>
                    </div>
                </div>
            )
        })
    };
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-md-4 bg-white p-4">
                        <div className="news-cards-container">{renderNewsCards()}</div>
                        {renderPagination()}
                    </div>
                    <div className="col-md-8">
                        <div className='card bg-white border-light p-4'>
                            <div className='card-header bg-white border-light'>
                                <h6 className="fw-bold fs-1 fs-lg-1 text-center lh-sm">Refer your candidate</h6>
                            </div>
                            <form>
                                <div className="row mx-2 mt-2">
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">First Name <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">{invalidFName}</small>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Middle Name</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Last Name <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">{invalidLName}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-2 mt-2">
                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Mobile Number <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">{invalidFName}</small>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email Id <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-2 mt-2">
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Industry <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Industry" />
                                            <small id="emailHelp" className="form-text text-muted">{invalidFName}</small>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Location <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location" />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Country</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Country" />
                                            <small id="emailHelp" className="form-text text-muted">{invalidLName}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-2 mt-2">
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Primary Skill <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="React Native" />
                                            <small id="emailHelp" className="form-text text-muted">{invalidFName}</small>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Secondary Skill 1</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Android" />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Secondary Skill 2</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website design" />
                                        </div>
                                    </div>
                                </div>
                                <div className='row mx-4 mt-2'>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">I consent to the candidate being informed of his refrence via me</label>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary">Refer Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
