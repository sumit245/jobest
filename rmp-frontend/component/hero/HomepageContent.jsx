'use client'
import { useState } from "react"

export default function HomepageContent() {
  const [search, setSearch] = useState("")

  const onSearch = async () => {
    const response = await fetch(`http://localhost:4000/api/jobs/search-by-skills/${search}`)
    const data = await response.json()
    if (data.length === 0) {
      alert('No results found')
    }
  }

  return (
    <section className="py-0" id="home">
      <div
        className="bg-holder d-none d-sm-block"
        style={{
          backgroundImage: "url(assets/img/illustrations/hero-bg.png)",
          backgroundPosition: "right top",
          backgroundSize: "contain"
        }}
      ></div>
      {/*/.bg-holder*/}
      <div
        className="bg-holder d-sm-none"
        style={{
          backgroundImage: "url(assets/img/illustrations/hero-bg.png)",
          backgroundPosition: "right top",
          backgroundSize: "contain"
        }}
      ></div>
      {/*/.bg-holder*/}
      <div className="container">
        <div className="row align-items-center min-vh-75 min-vh-md-100">
          <div className="col-md-7 col-lg-6 py-6 text-sm-start text-center">
            <h1 className="mt-6 mb-sm-4 display-2 fw-semi-bold lh-sm fs-4 fs-lg-6 fs-xxl-8 text-uppercase">
              A refer in need <br className="d-block d-lg-none d-xl-block" />
              a pal indeed!
            </h1>
            <p className="mb-4 fs-1">
              Every step of the way
            </p>
            <div className="pt-3">
              <form onSubmit={onSearch}>
                <div className="input-group w-xl-75 w-xxl-50 d-flex flex-end-center">
                  <input
                    className="form-control rounded-pill shadow-lg border-0"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Seacrh by skill, company and job"
                  />
                  <img
                    role="button"
                    onClick={onSearch}
                    className="input-box-icon me-2"
                    src="assets/img/illustrations/search.png"
                    width={30}
                    alt=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

