import React from 'react'

export default function Featured() {
    return (
        <section className="py-8">
            <div className="container">
                <div className="row flex-center">
                    <div className="col-md-5 order-md-1 text-center text-md-end"><img className="img-fluid mb-4" src="assets/img/illustrations/feature.png" width={450} alt="" /></div>
                    <div className="col-md-5 text-center text-md-start">
                        <h6 className="fw-bold fs-2 fs-lg-3 display-3 lh-sm">Over 10,000 top <br /> companies join with us</h6>
                        <p className="my-4 pe-xl-8">Posting now includes out of the box integration with major CRM &amp;amp; accounting and ERP platforms, as well as an open API that allows you to seamlessly integrate with your business systems.</p>
                    </div>
                </div>
            </div>{/* end of .container*/}
        </section>
    )
}
