import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import ModalContact from "./ModalContact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-navy"
      style={{ backgroundColor: "#61dafb", marginTop: 0 }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <h4>
            <strong>Contact Us</strong>
          </h4>
          <MDBRow>
            <MDBCol xs={12} sm={6}>
              <p>
                <strong>Get connected with us on social networks : </strong>
              </p>
              <div
                style={{ display: "flex" }}
                className="justify-content-center"
              >
                <MDBBtn
                  floating
                  className="m-1 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#3b5998" }}
                  href="https://www.facebook.com/profile.php?id=100095054632468&mibextid=LQQJ4d"
                  role="button"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                {/* <MDBBtn
                  floating
                  className="m-1 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#55acee" }}
                  href="https://twitter.com/bros_tidy"
                  role="button"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn> */}
                <MDBBtn
                  floating
                  className="m-1 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="https://www.instagram.com/umfazi_clean_and_tidy_rsa?igsh=OG0yeTQ2M2lyc2tn&utm_source=qr"
                  role="button"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol xs={12} sm={6}>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                email address : brostidyandclean02@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                Contact Eathan on +27749634583, Kariem on +27742170023<br/> or Angelique on +27638130115
              </p>
              <ModalContact />
              <ToastContainer />
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", marginBottom: 0 }}
      >
        © {new Date().getFullYear()}  Copyright :
        <a className="text-black" href="#/">
          - Created by TnT Development
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
