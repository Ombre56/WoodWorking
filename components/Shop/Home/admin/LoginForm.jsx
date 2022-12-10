import React, { useState } from 'react'
import styled from 'styled-components';

const correctDetails = {
    login: "admin",
    password: "admin"
};

export default function LoginForm({checkAdmin, setCheckAdmin}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const checkDeatils = (
      login === correctDetails.login
      &&
      password === correctDetails.password
    );

    if (checkDeatils) {
      setCheckAdmin(!checkAdmin);
      setError("Witaj adminie!");
    } else {
      setError("Błąd, podałeś błędne dane!");
    
      if (login.length <= 0 || password.length <= 0) {
        setError("Błąd, pole (login/hasło) nie może byc puste");
      }
      setLogin("")
      setPassword("")
    }
  }
  
  return (
    <FormContainer>
      <h1>Panel administratora</h1>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <input
            type="text"
            name="login"
            id="login"
            placeholder='Wpisz login...'
            autoComplete='off'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Wpisz hasło...'
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormSubmit type="submit">Zaloguj</FormSubmit>
      </Form>
      <Error>
        {error}
      </Error>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 1.875rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  input{
    width: 200px;
    border: solid 1.5px #9e9e9e;
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    margin: 1rem;
    font-size: 1rem;
  }
  input::placeholder{
    color: #9e9e9e;
  }
`;

const FormSubmit = styled.button`
  width: 120px;
  height: 30px;
  align-self: center;
  background: #397367;
  border-radius: 10px;
  font-weight: bold;
  color: #FFFFFF;
  border: none;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Error = styled.div`
  padding-top: 20px;
  color: #C10000;
  font-weight: bold;
`;