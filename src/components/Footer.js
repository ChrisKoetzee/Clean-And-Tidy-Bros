import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBRow, 
  MDBCol,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-navy' style={{ backgroundColor: '#61dafb' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
            <div className='me-5 d-none d-lg-block'>
                <MDBRow>
                    <h4><strong>Contact Us</strong></h4>
                    <MDBCol>
                        <p><strong>Get connected with us on social networks : </strong></p>
                        <div style={{ display: 'flex' }} className='justify-content-center'>
                        <MDBBtn
                            floating
                            className='m-1 d-flex justify-content-center align-items-center'
                            style={{ backgroundColor: '#3b5998'}}
                            href='https://www.facebook.com/profile.php?id=100095054632468&mibextid=LQQJ4d'
                            role='button'
                        >
                            <MDBIcon fab icon='facebook-f'/>
                        </MDBBtn>
                        <MDBBtn
                            floating 
                            className='m-1 d-flex justify-content-center align-items-center'
                            style={{ backgroundColor: '#55acee' }}
                            href='https://twitter.com/douglasroadps'
                            role='button'
                        >
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1 d-flex justify-content-center align-items-center'
                            style={{ backgroundColor: '#ac2bac' }}
                            href='https://instagram.com/clean_and_tidy_bros_pty?igshid=MWZjMTM2ODFkZg=='
                            role='button'
                        >
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>
                        </div>
                    </MDBCol>
                    <MDBCol>
                        <p>
                            <MDBIcon icon="envelope" className="me-3" />
                            email address : brostidyandclean02@gmail.com
                        </p>
                        <p>
                            <MDBIcon icon="phone" className="me-3" />
                            Contact Eathan on +27749634583 or Contact Kariem on +27742170023
                        </p>
                        <MDBBtn className="ms-auto px-3" >Contact Us</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </div>  
          
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright : 
        <a className='text-black' href='https://lustrous-shortbread-942556.netlify.app/'>
             - Created by TnT Development
        </a>
      </div>
    </MDBFooter>
  );
}