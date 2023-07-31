'use client'
import Link from "next/link"
import Image from "next/image"
import { Dropdown } from "react-bootstrap"

export default function Navbar({ isLoggedIn }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top pb-3 backdrop">
            <a className="navbar-brand d-flex align-items-center fw-bold fs-2" href="#">
                <Image className="navbar-brand-logo" src="/assets/img/icons/logo.png" height={74} width={74} alt="ReferMyPal" />
                <div>
                    <h4 className="navbar-brand-logo mt-2">Refer My Pal</h4>
                    <h6 className="navbar-brand-logo-subtitle">A refer in need a pal indeed</h6>
                </div>
            </a>
            <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobilemenu"
                aria-controls="mobilemenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0 "
                id="mobilemenu">
                <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                    <li className="nav-item px-2">
                        <Link className="nav-link fw-medium" href="/jobs">
                            Jobs
                        </Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link className="nav-link fw-medium" href="/blogs">
                            Blogs
                        </Link>
                    </li>
                    {
                        !isLoggedIn && (
                            <li className="nav-item px-2">
                                <Link className="nav-link fw-medium" href="/employers">
                                    Employer
                                </Link>
                            </li>
                        )
                    }
                    <li className="nav-item px-2">
                        {
                            isLoggedIn ? (
                                <Dropdown>
                                    <Dropdown.Toggle as="div" style={{ cursor: 'pointer' }} id="dropdown-basic">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: '36px' }} alt="Avatar" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: '36px' }} alt="Avatar" />
                                                </div>
                                                <div className="col-sm-8">
                                                    <h6>Sumit Ranjan</h6>
                                                    <h6>USER004</h6>
                                                </div>
                                            </div>
                                            <a className="btn btn-sm btn-outline-primary rounded-pill bg-gradient" style={{ width: '100%' }} href="view_profile">View Profile</a>
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-3">Manage Referals</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Settings & Privacy</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Write a blog</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Contact Us</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-4">Log out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>


                            ) : (
                                <a className="btn btn-lg btn-primary rounded-pill bg-gradient" href="signin">
                                    Sign In
                                </a>
                            )
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}
