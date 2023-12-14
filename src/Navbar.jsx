import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import blog from './blog.svg'
import './Navbar.css'

function AppHeader() {
  return (
    <>
    <header>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container px-3">
          <Navbar.Brand href="./index.html">
            <img src={blog} alt="blog" />
          </Navbar.Brand>
          <button className="navbar-toggler offcanvas-nav-btn" type="button">
            <i className="bi bi-list">
            </i>
          </button>
<div class="offcanvas offcanvas-start offcanvas-nav show" style={{ width: '20rem' }} data-asia-model="true" role="dialog">
            <div className="offcanvas-header">
              <a href="./index.html" className="text-inverse">
                <img src={blog} alt="blog" />
              </a>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body pt-0 align-items-center">
              <Nav className="navbar-nav mx-auto align-items-lg-center">
                <NavDropdown title="Landings" id="landings-dropdown">
                  <NavDropdown.Item >Landing Overview</NavDropdown.Item>
                  <NavDropdown.Item >Saas v.1</NavDropdown.Item>
                  <NavDropdown.Item >Sass v.2</NavDropdown.Item>
        <NavDropdown.Item >Accounting</NavDropdown.Item>
        <NavDropdown.Item >Finance</NavDropdown.Item>
        <NavDropdown.Item >Jamstack Agency</NavDropdown.Item>
        <NavDropdown.Item >Conference</NavDropdown.Item>
        <NavDropdown.Item >Personal</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Pages" className="">
        <NavDropdown.Item >List View</NavDropdown.Item>
        <NavDropdown.Item >Grid View</NavDropdown.Item>
        <NavDropdown.Item >Grid View v.2</NavDropdown.Item>
        <NavDropdown.Item >Sidebar</NavDropdown.Item>
        <NavDropdown.Item >Category</NavDropdown.Item>
        <NavDropdown.Item >Single Post</NavDropdown.Item>
    </NavDropdown>

     <NavDropdown title="Blocks">
      <NavDropdown.Item >Footer</NavDropdown.Item>
      <NavDropdown.Item >Hero</NavDropdown.Item>
      <NavDropdown.Item >navbar</NavDropdown.Item>
      <NavDropdown.Item >form</NavDropdown.Item>
      <NavDropdown.Item >team</NavDropdown.Item>
      <NavDropdown.Item >stats</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Accounts">
      <NavDropdown.Item >Profile</NavDropdown.Item>
      <NavDropdown.Item >Security</NavDropdown.Item>
      <NavDropdown.Item >Billing</NavDropdown.Item>
      <NavDropdown.Item >Team</NavDropdown.Item>
      <NavDropdown.Item >Session</NavDropdown.Item>
      <NavDropdown.Item >Social</NavDropdown.Item>
    </NavDropdown>

      <NavDropdown title="Accounts">
      <NavDropdown.Item >Documentations</NavDropdown.Item>
      <NavDropdown.Item >Changelog</NavDropdown.Item>
    </NavDropdown>
              </Nav>
              <div className="mt-3 mt-lg-0 d-flex align-items-center">
                <a href="./signin.html" className="btn btn-light mx-2">
                  Login
                </a>
                <a href="./signup.html" className="btn btn-primary">
                  Create account
                </a>
              </div>
            </div>
          </div>
        </div>
      </Navbar>

    </header>

    </>
    
  );
}
export default AppHeader;