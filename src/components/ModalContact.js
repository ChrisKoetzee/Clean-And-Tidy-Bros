import React, { useState, useRef } from "react";
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
} from "mdb-react-ui-kit";
import emailjs from '@emailjs/browser';




const ModalContact = () => {
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: ""
  });

  const Form = useRef();

  const toggle = () => setForm(!form);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_email) {
      console.log("Email address is required.");
      return;
    }
    
    console.log("Sending email...");
  
    emailjs
      .sendForm('service_5kxb4hc', 'template_5mx6s6t', Form.current, {
        publicKey: 'fGwhF0VBFnRcFWDtb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormData({
            user_name: "",
            user_email: "",
            user_message: ""
          });
          toggle();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  const submitForm = (e) => {
    e.preventDefault();
    sendEmail(e);
  };
 

  return (
    <div>
      <MDBBtn onClick={toggle}>Contact Us</MDBBtn>
      <MDBModal tabIndex="-1" show={form} setShow={setForm}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Please complete the form below</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <form ref={Form} onSubmit={submitForm}>
                <MDBInput
                  className="mb-4"
                  type="text"
                  id="Name"
                  label="Name and Surname"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                />
                <MDBInput
                  className="mb-4"
                  type="email"
                  id="email"
                  label="Email address"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="textarea"
                  rows={4}
                  label="Message"
                  style={{
                    minHeight: "100px",
                    resize: "vertical",
                  }}
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleInputChange}
                />
                <MDBInput
                  className="mb-4"
                  type="submit"
                  value="Send"
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <h5>Thank you and enjoy your day.</h5>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default ModalContact;
