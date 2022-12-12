import styled from 'styled-components'
import { getUsers } from '../../../../lib/helperUser';
import { useQuery } from 'react-query';

export default function ViewUsers() {
  const { isLoading, isError, data, error } = useQuery('users', getUsers);

  if (isLoading) {
    return <div>Produkt jest ładowany...</div>;
  }
  if (isError) {
    return <div>Błąd ładowania {error}</div>;
  }
  
  return (
    <>
      <TitleTable>Użytkownicy</TitleTable>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>
                <span>Nazwa</span>
              </th>
              <th>
                <span>Email</span>
              </th>
              <th>
                <span>Rola</span>
              </th>
              <th>
                <span>Adres zamieszkania</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              Object.values(data).map((obj, i) => <Tr {...obj} key={i} />)
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}

function Tr({ username, email, role, address }) {  
  return (
    <tr>
      <td>
        <span>
          {username}
        </span>
      </td>
      <TableDescription>
        <span>
          {email}
        </span>
      </TableDescription>
      <td>
        <span style={{fontWeight: 'bold'}}>
          {role}
        </span>
      </td>
      <td>
        <table>
          <tr>
            <td>
              <span>
                {address}
              </span>
            </td>
            <td>
              <span>
                {address}
              </span>
            </td>
            <td>
              <span>
                {address}
              </span>
            </td>
            <td>
              <span>
                {address}
              </span>
            </td>
            <td>
              <span>
                {address}
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  )
}

const Container = styled.div`
  margin: .625rem 12.875rem 8.25rem 7.875rem;
  padding-bottom: 1.25rem;
  overflow: auto;
  &::-webkit-scrollbar{
    height: 5px;
    width: 5px;
  }
  &::-webkit-scrollbar-track{
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb{
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
    @media screen and (max-width: 992px){
      margin: 0 .625rem .625rem .625rem;
    }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  tbody{
    background-color: #F6F4F4;
  }
  th{
    font-weight: bold;
    background-color: #000000;
    color: #FFFFFF;
  }
  td, th { 
    padding: 6px;
    text-align: center;
  }
`;

const TableDescription = styled.td`
  max-width: 46.875rem;
    @media screen and (max-width: 992px){
      width: 12.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
`;

const TitleTable = styled.h1`
  color: #B63E3B;
  font-size: 3rem;
  text-align: center;
  margin: 0;
  padding: 2.25rem 0;
  text-transform: uppercase;
    @media screen and (max-width: 800px){
      font-size: 2rem;
    }
`;