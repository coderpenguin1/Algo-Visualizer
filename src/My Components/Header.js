import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Algo Visualizer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <div style={{display:'inline-block', width:'50px'}}></div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Merge Sort</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Quick Sort</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bubble Sort</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Insertion Sort</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Selection Sort</a>
                        </li>
                            
                    </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
                )
}
