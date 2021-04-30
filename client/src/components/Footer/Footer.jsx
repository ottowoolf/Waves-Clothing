import React from "react";
import "./Footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small grey darken-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="flex-center">
              <Link className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </Link>

              <Link className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </Link>

              <Link className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </Link>

              <Link className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </Link>

              <Link className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </Link>

              <Link className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-4">
        © 2021 Copyright:&nbsp;
        <Link href="./Index.html">WavesClothing.com</Link>
      </div>
    </footer>
    // <footer id='contact'>
    //   <div classNameName='container'>
    //     <div classNameName='row text-center'>
    //       <div classNameName='col-md-4'>
    //         <hr classNameName='light' />
    //         <h5>HQ Office</h5>
    //         <hr classNameName='light' />
    //         <p>555-555-5555</p>
    //         <p>mail@email.com</p>
    //         <p>Address 1523 your st, Sydney,NSW, 2000</p>
    //         <p></p>
    //       </div>
    //       <div classNameName='col-md-4'>
    //         <hr classNameName='light' />
    //         <h5>Our Hours</h5>
    //         <hr classNameName='light' />
    //         <p>Monday: 9am - 5pm</p>
    //         <p>Saturday: 10am - 4pm</p>
    //         <p>Sunday: Closed</p>
    //       </div>
    //       <div classNameName='col-md-4'>
    //         <hr classNameName='light' />
    //         <h5>Service Area</h5>
    //         <hr classNameName='light' />
    //         <p>Sydney,NSW, 2000</p>
    //         <p>Melbourne,VIC, 3000</p>
    //         <p>Brisbane,QLD, 4000</p>
    //       </div>
    //       <div classNameName='col-12'>
    //         <hr classNameName='light-100' />
    //         <h5>&copy; OttoMation.com 2021</h5>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};
export default Footer;
