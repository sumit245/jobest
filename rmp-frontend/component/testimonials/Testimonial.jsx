import React from 'react'

export default function Testimonial() {
    return (
        <section className="py-8">
            <div className="container-lg">
                <div className="row flex-center">
                    <div className="col-md-11 col-lg-6 col-xl-4 col-xxl-5">
                        <h6 className="fs-3 fs-lg-4 lh-sm">Testimonials</h6>
                    </div>
                    <div className="col-lg-4 position-relative mt-n5 mt-md-n4"><a className="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true" /><span className="visually-hidden">Previous</span></a><a className="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true" /><span className="visually-hidden">Next</span></a></div>
                </div>
                <div className="row flex-center">
                    <div className="col-xl-10 px-0">
                        <div className="carousel slide pt-6" id="carouselExampleDark" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval={10000}>
                                    <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                                        <div className="col-md-4 mb-8 mb-md-0">
                                            <div className="card card-span h-100 shadow-lg">
                                                <div className="card-span-img"><img src="assets/img/gallery/user-1.png" alt="" /></div>
                                                <div className="card-body d-flex flex-column flex-center py-6">
                                                    <div className="my-4">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-8 mb-md-0">
                                            <div className="card card-span h-100 shadow-lg">
                                                <div className="card-span-img"><img src="assets/img/gallery/user-2.png" alt="" /></div>
                                                <div className="card-body d-flex flex-column flex-center py-6">
                                                    <div className="my-4">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-8 mb-md-0">
                                            <div className="card card-span h-100 shadow-lg">
                                                <div className="card-span-img"><img src="assets/img/gallery/user-3.png" alt="" /></div>
                                                <div className="card-body d-flex flex-column flex-center py-6">
                                                    <div className="my-4">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval={2000}>
                                    <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                                        <div className="col-md-4 mb-8 mb-md-0">
                                            <div className="card card-span h-100 shadow-lg">
                                                <div className="card-span-img"><img src="assets/img/gallery/user-1.png" alt="" /></div>
                                                <div className="card-body d-flex flex-column flex-center py-6">
                                                    <div className="my-4">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-8 mb-md-0">
                                            <div className="card card-span h-100 shadow-lg">
                                                <div className="card-span-img"><img src="assets/img/gallery/user-2.png" alt="" /></div>
                                                <div className="card-body d-flex flex-column flex-center py-6">
                                                    <div className="my-4">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-8 mb-md-0">
                                            <div className="card card-span h-100 shadow-lg">
                                                <div className="card-span-img"><img src="assets/img/gallery/user-3.png" alt="" /></div>
                                                <div className="card-body d-flex flex-column flex-center py-6">
                                                    <div className="my-4">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                                        <div className="col-md-4 mb-8 mb-md-0">
                                            <div className="card card-span h-100 shadow-lg">
                                                <div className="card-span-img"><img src="assets/img/gallery/user-1.png" alt="" /></div>
                                                <div className="card-body d-flex flex-column flex-center py-6">
                                                    <div className="my-4">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-8 mb-md-0">
                                            <div className="card card-span h-100 shadow-lg">
                                                <div className="card-span-img"><img src="assets/img/gallery/user-2.png" alt="" /></div>
                                                <div className="card-body d-flex flex-column flex-center py-6">
                                                    <div className="my-4">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-8 mb-md-0">
                                            <div className="card card-span h-100 shadow-lg">
                                                <div className="card-span-img"><img src="assets/img/gallery/user-3.png" alt="" /></div>
                                                <div className="card-body d-flex flex-column flex-center py-6">
                                                    <div className="my-4">
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </li>
                                                            <li className="list-inline-item me-0">
                                                                <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
