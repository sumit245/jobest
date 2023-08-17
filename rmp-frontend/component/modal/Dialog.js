import React from 'react'
export default function DialogPopup({ show, title, children, onClose }) {

    return (
        <div
            className={`modal fade ${show ? 'show' : ''}`}
            id="employerLoginModal"
            style={{ display: show ? 'block' : 'none', height: 690 }}
            tabIndex="-1"
            aria-labelledby="employerLoginModal"
            aria-hidden={!show}
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ borderRadius: 8 }}>
                    <div className="modal-header bg-primary"
                        style={{
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6
                        }}>
                        <h5 className="modal-title text-white" id="employerLoginModal" >
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-w"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
