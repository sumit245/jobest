import React, { useState } from 'react'
export default function ReferCandidateForm() {
    const [invalidFName, setInvalidFName] = useState('')
    const [invalidLName, setInvalidLName] = useState('')
    return (
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
            <div className="row mx-2 mt-2">
                <div className='col-md-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Linked Profile link <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="React Native" />
                        <small id="emailHelp" className="form-text text-muted">{invalidFName}</small>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="input-group">
                        <div className="custom-file">
                            <label className="custom-file-label" htmlFor="inputGroupFile">Upload Resume</label>
                            <input type="file" className="form-control" id="inputGroupFile" accept='.pdf,.docx,.zip,image/*' />
                        </div>
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}
