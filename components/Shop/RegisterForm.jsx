import React, { useReducer } from 'react'
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useMutation } from 'react-query';
import styled from 'styled-components'
import { addUser, getUsers } from '../../lib/helperUser'
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

export default function RegisterForm() {
  const [formData, setFormData] = useReducer(formReducer, {})
  const addMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.prefetchQuery('products', getUsers)
    }
  })

  const handleSubmit = (e,res) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0) {
      return (
        console.log("Wypełnij dane!")
      )
    }
    
    let { email, password } = formData;
    
    const model = {
      email,
      password,
    };

    addMutation.mutate(model);

    // console.log(formData)
  }

  if (Object.keys(formData).length < 0) return <Bug message={"Dane nie zostały dodane!"}></Bug>
  if (addMutation.isLoading) return <div>Ładowanie!</div>
  // if (addMutation.isError) return <Bug message={addMutation.error.message}></Bug>
  // if (addMutation.isSuccess) return <Success message={"Dane zostały dodane poprawnie!"}></Success>

  return (
    <FormContainer>
      <FormTitle>Rejestracja</FormTitle>
        <Form action='/api/register' method='post' onSubmit={handleSubmit}>
          <Inputs>
              <InputContainer>
                <div className='left-side'>
                  <FaUser />
                  <LineBorder />
                </div>
                <div className='right-side'>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    // pattern="[a-z0-9._%+-]"
                    required
                    maxLength={20}
                    placeholder='e-mail'
                    onChange={setFormData}
                  />
                </div>
              </InputContainer>
              <InputContainer>
                <div className='left-side'>
                  <RiLockPasswordFill />
                  <LineBorder />
                </div>
                <div className='right-side'>
                  <input 
                    type="password" 
                    name="password"
                    required
                    id="password" 
                    placeholder='hasło'
                    onChange={setFormData}
                  />
                </div>
              </InputContainer>
              <InputContainer>
                <div className='left-side'>
                  <RiLockPasswordFill />
                  <LineBorder />
                </div>
                <div className='right-side'>
                  <input 
                    type="password" 
                    name="password2" 
                    id="password2"
                    required
                    placeholder='powtórz hasło'
                    onChange={setFormData}
                  />
                </div>
              </InputContainer>
          </Inputs>

          <CheckBox>
            <input type="checkbox" required name="accept_rules" id="accept_rules" />
            <p>Zapoznałem/am się i akceptuję <a href="">regulamin*</a></p>
          </CheckBox>

          <RegisterButton type='submit'>
            <p>Zarejestruj</p>
          </RegisterButton>
        </Form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const FormTitle = styled.h1`
  font-weight: 400;
  font-size: 96px;
  line-height: 106px;
  margin: 15px 0 50px 0;
    @media screen and (max-width: 800px){
      font-size: 50px;
      margin-bottom: 30px;
    }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

const InputContainer = styled.div`
  width: 30.375rem;
  height: 4.875rem;
  border: 1px solid #000000;
  border-radius: 24.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 2rem;
    height: 2rem;
    color: rgba(0, 0, 0, 0.2)
  }
  .left-side{
    width: 2.8125rem;
    display: flex;
    align-items: center;
  }
  .right-side{
    flex-basis: 80%;
    color: rgba(0, 0, 0, 0.2)
  }
  input{
    border: none;
    width: 100%;
    padding: 10px 0;
    &::placeholder{
      font-family: 'Akshar';
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
      color: rgba(0, 0, 0, 0.2);
    }
  }
    @media screen and (max-width: 800px){
      width: 19rem;
      height: 3.0625rem;
    }
`;

const LineBorder = styled.div`
  width: 32px;
  height: 1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transform: rotate(90deg);
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  p{
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    a{
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

const RegisterButton = styled.button`
  width: 168px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 33px;
  gap: 10px;
  background: #F17900;
  border-radius: 24.5px;
  border: none;
  cursor: pointer;
  p{
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.375rem;
    color: #FFFFFF;
  }
`;