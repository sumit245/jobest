export default function RegistrationComponent({ onClose, onShowLogin }) {
    const onChangeText = () => { };

    return (
        <div className="login-form">
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" class="form-control" placeholder="First name" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" class="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <label for="inlineFormInputGroupUsername">Mobile Number</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">+91</div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Mobile Number" />
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-sm-6">
                        <label for="inlineFormInputCompany">Company Name</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="inlineFormInputCompany" placeholder="Company Name" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label for="inlineFormInputCompanyWebsite">Company Website</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="inlineFormInputCompanyWebsite" placeholder="Company Website" />
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <label for="inlineFormInputCompanyEmail">Company Email Id</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="inlineFormInputCompanyEmail" placeholder="Company Mail ID" />
                        </div>
                    </div>
                </div>

                <div className="row my-2">
                    <div className="col">
                        <label for="inlineFormInputCompanyPassword">Password</label>
                        <div className="input-group">
                            <input className="form-control" id="inlineFormInputCompanyPassword" placeholder="Password" type="password" />
                        </div>
                    </div>
                </div>

                <div className="row my-2">
                    <div className="col">
                        <label for="inlineFormInputCompanyConfirmPassword">Confirm Password</label>
                        <div className="input-group">
                            <input className="form-control" id="inlineFormInputCompanyConfirmPassword" placeholder="Password" type="password" />
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-sm-6">
                        <button type="button" class="btn btn-secondary w-100">Cancel</button>

                    </div>
                    <div className="col-sm-6">
                        <button type="button" class="btn btn-primary w-100" onClick={() => alert('Successfully Requested. Please wait our executive will contact you soon  ')}>Create An Account</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <a className="reset-psw" href="#">Forgot your password?</a>
                    </div>
                    <div className="col-sm-6">
                        <span className='reset-psw' style={{ color: '#777' }}>Already a member?{" "}</span>
                        <a className="reset-psw" href="#" onClick={onShowLogin} >Login</a>
                    </div>
                </div>
            </form>
        </div>
    );
}
