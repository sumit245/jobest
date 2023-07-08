import React from 'react'

export default function Categories() {
    return (
        <section className="py-5">
            <div className="bg-holder d-none d-sm-block" style={{ backgroundImage: 'url(assets/img/illustrations/category-bg.png)', backgroundPosition: 'right top', backgroundSize: '200px 320px' }}>
            </div>
            {/*/.bg-holder*/}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-6 text-center mb-3">
                        <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Browse jobs by category</h5>
                        <p className="mb-5">Choose from the list of most popular categories</p>
                    </div>
                </div>
                <div className="row flex-center h-100">
                    <div className="col-10 col-xl-9">
                        <div className="row">
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center"> <img src="assets/img/illustrations/finance.png" height={120} alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Accounting</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center"> <img src="assets/img/illustrations/design.png" height={120} alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Design/Creative</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center"> <img src="assets/img/illustrations/programmer.png" height={120} alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Programmer</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center"> <img src="assets/img/illustrations/production.png" height={120} alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Production</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center"> <img src="assets/img/illustrations/education.png" height={120} alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Education</h6>
                                            <p className="mb-0 card-text">100 open position</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
                                <div className="card py-4 shadow-sm h-100 hover-top">
                                    <div className="text-center"> <img src="assets/img/illustrations/consultancy.png" height={120} alt="" />
                                        <div className="card-body px-2">
                                            <h6 className="fw-bold fs-1 heading-color">Consultancy</h6>
                                            <p className="mb-0 card-text">100 open position</p>
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
