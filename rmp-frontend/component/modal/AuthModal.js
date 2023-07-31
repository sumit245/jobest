'use client'
import "./modalstyle.css"

export default function AuthModal({ title, reject, accept, rejectHandler, acceptHandler, children }) {
    return (
        <div id="login" className="popup" role="dialog">
            <div className="popup-header">
                <h4 className='popup-title'>{title}</h4>
                <button type='button' className='close-btn'>X</button>
            </div>
            <div className="popup-body">
                {children}
            </div>
            <div className="popup-footer">
                <button className="reject-btn" type="button" onClick={rejectHandler} >{reject}</button>
                <button className="accept-btn" type="button" onClick={acceptHandler} >{accept}</button>
            </div>
        </div>
    )
}
