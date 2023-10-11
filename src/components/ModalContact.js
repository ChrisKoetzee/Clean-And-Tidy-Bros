import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

const ModalContact = () => {
    const [ form, setForm ] = useState(false);

    const toggle = () => setForm(!form);

    return (
        <div>
            <MDBBtn onClick={toggle}>Contact Us</MDBBtn>
        
            <MDBModal tabIndex='-1' show={form} setShow={setForm} >
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Please complete the form below</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <MDBRow className='mb-4'>
                                    <MDBCol>
                                        <MDBInput className='mb-4' type='text' id='Name' label='Name' />                                       
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput className='mb-4' type='text' id='Surname' label='Surname' />
                                    </MDBCol>
                                </MDBRow>
                                <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />
                                <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' />
                                <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='primary' conClick={toggle}>Submit</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
        
    )
}

export default ModalContact;