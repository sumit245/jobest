'use client'
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
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
                    <li className="nav-item px-2">
                        <Link className="nav-link fw-medium" href="/employers">
                            Employer
                        </Link>
                    </li>
                    <li className="nav-item px-2">
                        <a className="btn btn-lg btn-primary rounded-pill bg-gradient" href="signin">
                            Sign In
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
