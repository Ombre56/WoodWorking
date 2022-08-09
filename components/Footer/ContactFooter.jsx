import React from 'react'
import styled from 'styled-components'

function ContactFooter() {
  return (
    <ContactFooterCotainer>
        <p>
          Biuro: +48 234 234 234<br /><br />

          Al. Niepodległości 56<br />
          10-045 Olsztyn
        </p>
    </ContactFooterCotainer>
  )
}

export default ContactFooter

const ContactFooterCotainer = styled.div`
  color: #8F8F8F;
  font-family: 'Roboto';
  font-size: 32px;
  padding-left: 140px;
     @media screen and (max-width: 800px){
      font-size: 20px;
      padding-left: 0;
     }
`;