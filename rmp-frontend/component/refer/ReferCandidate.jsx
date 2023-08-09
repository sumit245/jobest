'use client'
import ReferCandidateForm from './ReferCandidateForm';
import ReferCandidateJobs from './ReferCandidateJobs';

export default function ReferCandidate() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-start">
                    <ReferCandidateJobs />
                    <div className="col-md-8">
                        <div className='card bg-white border-light p-4'>
                            <div className='card-header bg-white border-light'>
                                <h6 className="fw-bold fs-1 fs-lg-1 text-center lh-sm">Refer your candidate</h6>
                            </div>
                            <ReferCandidateForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
