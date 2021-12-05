import React,{ useState ,useEffect}  from 'react'
import { Table, Button, Icon, Popup } from 'semantic-ui-react'
import axios from 'axios';

const ContractTable = () => {
  const [contracts, setcontracts] = useState({data : []});

  useEffect(async () => {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );

    setcontracts({data:result.data});
    console.log(contracts);
  }, []);


  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Detail</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>

              {contracts.data.map(contract => (
                  <Table.Row>
                    <Table.Cell>{contract.id}</Table.Cell>
                    <Table.Cell>{contract.name}</Table.Cell>
                    <Table.Cell>{contract.username}</Table.Cell>
                    <Table.Cell>{contract.email}</Table.Cell>
                    <Table.Cell>{contract.phone}</Table.Cell>
                    <Table.Cell> 
                      <Popup trigger={ 
                        <Button animated='fade'>
                            <Button.Content visible><Icon name='info' /></Button.Content>
                            <Button.Content hidden>info</Button.Content>
                          </Button>
                        }
                      >
                      <Popup.Header>More info</Popup.Header>
                      <Popup.Content>
                        <Icon name='home' />
                        <p>{contract.address.street + ",  " + contract.address.suite + ",  " + contract.address.city + ",  " + contract.address.zipcode}</p>
                        <Icon name='address book' />
                        <p>{contract.company.name + ",  " + contract.company.catchPhrase + ",  " + contract.company.bs}</p>
                        <Icon name='code' />
                        <p>{contract.website}</p>
                      </Popup.Content></Popup>
                    </Table.Cell>
                  </Table.Row>
                  
              ))}
    
      </Table.Body>

      <Table.Footer height='40px'>
        <Table.Row>
          <Table.HeaderCell colSpan='20'>
          
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default ContractTable;