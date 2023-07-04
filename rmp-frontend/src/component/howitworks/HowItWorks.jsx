import React from 'react'

export default function HowItWorks() {
    return (
        <section className="py-5">
            <div
                className="bg-holder"
                style={{
                    backgroundImage: "url(assets/img/illustrations/bg.png)",
                    backgroundPosition: "left top",
                    backgroundSize: "initial",
                    marginTop: "-180px"
                }}
            ></div>
            {/*/.bg-holder*/}
            <div className="container">
                <div className="row flex-center">
                    <div className="col-md-5 order-md-0 text-center text-md-start">
                        <img
                            className="img-fluid mb-4"
                            src="assets/img/illustrations/passion.png"
                            width={450}
                            alt=""
                        />
                    </div>
                    <div className="col-md-5 text-center text-md-start">
                        <h6 className="fw-bold fs-2 fs-lg-3 display-3 lh-sm">
                            This is how ReferMyPal will transform the recruitment industry
                        </h6>
                        <p className="my-4 pe-xl-8">
                            {" "}
                            find a job that suits your interests and talents. A high salary is not
                            the top priority. Most importantly,You can work according to your
                            heart's desire.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
