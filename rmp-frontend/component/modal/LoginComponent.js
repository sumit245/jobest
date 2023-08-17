export default function LoginComponent({ onClose, onShowRegistration }) {
    const onChangeText = () => { };
    return (
        <div className="login-form">
            <form>
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
                    <div className="col-sm-6">
                        <button type="button" class="btn btn-secondary w-100">Cancel</button>

                    </div>
                    <div className="col-sm-6">
                        <button type="button" class="btn btn-primary w-100" onClick={() => alert('Successfully Requested. Please wait our executive will contact you soon  ')}>Login Now</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <a className="reset-psw" href="#">Forgot your password?</a>
                    </div>
                    <div className="col-sm-6">
                        <span className='reset-psw' style={{ color: '#777' }}>Not registered yet?{" "}</span>
                        <a className="reset-psw" href="#" onClick={onShowRegistration}> Create an account</a>
                    </div>
                </div>

            </form>
        </div>
    );
}
