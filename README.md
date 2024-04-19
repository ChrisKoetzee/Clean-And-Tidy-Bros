# Clean-And-Tidy-Bros

1.  Install node modules -  npm install
2.  Install react scripts - npm install react-scripts --save-dev

3.  Install emailjs - npm install @emailjs/browser
        Where the logic is to be applied:(both in the modalContact component and the getAQuote component :)
            - import emailjs from '@emailjs/browser'; 
            - The free emailjs only allows 200 emails per month
            - On emailjs there are 2 templates and 2 email services being used 
                    1. For the contacts button
                    2. For the quotes form
            - Using the .env file for the keys of emailjs

4.  Install Toastify - npm install react-toastify
        Where the logic is to be applied:
            - import { toast } from 'react-toastify'; and import 'react-toastify/dist/ReactToastify.css'; 
        In a root componenet where the button is:
            - import { ToastContainer } from 'react-toastify';   
            - and insert as a componenet - <ToastContainer/>

5.  The Template component consists of the footer as well as the navbar and is included on each page in order to be displayed on   each page by means of using the template it would make it easier to be interted and this gets put in only in the root file

6.  In the navbar:
        a. Here we have the name of the company that also works a a link to the home page
        b. In the middle of the navbar there are links to the various pages and when clicked the link color change to black to show the user which page they are currently on
        c. On the right side of the navbar we have the contact button which when clicked brings up the modal contact. This is the same modal that is used in the footer as well and when clicked brings up a form that needs to be completed and submitted sending an email to the owners.

7.  In the footer:
        a. On the right side of the footer we have the links to the companies social media and when clicked takes the user to the various pages. FYI- no Twitter account has been set up yet hence why there is no link to twitter.
        b. On the left side of the page there is contact information that the user can use to contact the owners directly or they they can use the contact button that is linked to the modalContact which brings up a form and when this form is submitted it gets sent to the ownners with all the infomation from the form  

8.  In the modalContact componenant:
        a. In this component we have the the logic for both toastify and emailjs
        b. It is a pop up madal linked to a contact button so when it is clicked the modal pops up with a form that needs to be     completed and when submited an email gets sent to the owners email with the details that was interted.
        c. Button is loacted both in the navbar as well as the footer in order that it is always easily accessable for the user

    
9.  In the Home page:
        Here we have the companies logo, a link to a digital flyer with more infomation about the buisness and the vision as well as the mission of the company.

10. In the about page:
        Here we only have more information about the company pertaining to how it got started with an image of the school where the 2 owners met

11. In the Services page:
        On this page we have more infomation pertaining to the available services that are available in the form of a table and when the mouse hovers over a particular service it has slight animation.

12. In the Get a quote page:
        This page has a form that needs to be completed and when submitted an email get sent to the owners with the infomation of the form that the client completed and with this information the owners can compile a quote and submit it to the client or either make contact with the client if more information is requiered.

13. There are 2 other pages:
        These have been commented out as there was not sufficient content to be used in them, but can be set up at a later stage and be uncommented:
            -In the gallery page there is a caroursel where the owners can have before and after images highlighting work that was done before.
            - In the Testimonial page we have some dummy testimonials set up and when you hover over it get highlighted in a light blue as well as has a slight animation to it.

        These were not completed as the owners did not have enough content as well as needed to pay for a database to host the infomation

        
# The achitecture used for this site
    - ReactJS
    - CSS
    - HTML
    - React Bootstrap
    - MDB react UI Kit
    - Emailjs
    - Toastify

    Deployed using Netlify
    

    

