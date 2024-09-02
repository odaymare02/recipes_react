import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className='bg-dark bg-gradient p-3 text-white'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero eu lectus bibendum viverra.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <h3>Contact Us</h3>
                    <p>Phone: +123 456 7890</p>
                    <p>Email: info@example.com</p>
                    <p>Address: 123 Main St, City, State, ZIP</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <p className="text-center">&copy; 2022 Pizza Parlor. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
