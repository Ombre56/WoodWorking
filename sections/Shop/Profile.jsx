import { useSession, signIn, signOut } from "next-auth/react"
import styled from "styled-components"
import ShopLayout from "../../components/Shop/Home/ShopLayout"
import { BiUser } from 'react-icons/bi';
import { RiShoppingBasket2Fill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';

export default function Profile() {
  const { data: session } = useSession()
  return (
    <ShopLayout>
      {session ?
        <ProfileContainer>
          <Title>Witaj <u>{session.user.name}</u></Title>
          <UserName>Zalogowany jako: <u><b>{session.user.email}</b></u></UserName>
          <Inputs>
              <InputContainer>
                <div className='left-side'>
                  <BiUser />
                  <LineBorder />
                </div>
                <div className='right-side'>
                  <p>Twoje dane</p>
                </div>
              </InputContainer>
              <InputContainer>
                <div className='left-side'>
                  <RiShoppingBasket2Fill />
                  <LineBorder />
                </div>
                <div className='right-side'>
                  <p>Zamówienia</p>
                </div>
              </InputContainer>
              <InputContainer>
                <div className='left-side'>
                  <MdFavorite />
                  <LineBorder />
                </div>
                <div className='right-side'>
                  <p>Ulubione</p>
                </div>
              </InputContainer>
          </Inputs>
          <Button onClick={() => signOut()}>Wyloguj</Button>
        </ProfileContainer>
        :
        <ProfileContainer>
          <Title>Profil</Title>
        Nie jesteś zalogowany! <br />
          <Button onClick={() => signIn()}>Zaloguj</Button>
        </ProfileContainer>
      }
    </ShopLayout>
  )
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.1875rem;
  text-align: center;
  color: #000000;
  margin-bottom: 1.25rem;
  position: relative;
  &::before{
    content: '»';
    color: #F17900;
    padding-right: 10px;
  }
  &::after{
    content: '«';
    color: #F17900;
    padding-left: 10px;   
  }
    @media screen and (min-width: 992px){
      font-size: 2.5rem;
      line-height: 3.5rem;
    }
`;

const UserName = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 121.5%;
  margin: .625rem 0 2.5rem 0;
  text-align: center;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

const LineBorder = styled.div`
  width: 32px;
  height: 1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transform: rotate(90deg);
`;

const InputContainer = styled.div`
  width: 30.375rem;
  height: 4.875rem;
  border: 1px solid #000000;
  border-radius: 24.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: #F17900;
    color: #FFFFFF;
  }
  svg{
    width: 2rem;
    height: 2rem;
  }
  .left-side{
    width: 2.8125rem;
    display: flex;
    align-items: center;
  }
  .right-side{
    flex-basis: 80%;
    color: #000000;
    &:hover{
      color: #FFFFFF;
    }
  }
  p{
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
    padding-left: 30%;
  }
    @media screen and (max-width: 800px){
      width: 19rem;
      height: 3.0625rem;
      p{
        padding-left: 15%;
      }
    }
`;

const Button = styled.button`
  margin-top: 3.125rem;
  cursor: pointer;
  width: 9.375rem;
  height: 3.125rem;
  background: #F17900;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 20px;
  border-radius: 24.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 39px;
  gap: 10px;
  border: none;
  transition: 0.5s ease-in-out;
  &:hover{
    border: 1px solid #F17900;
    background-color: #FFFFFF;
    color: #000000;
  }
`;