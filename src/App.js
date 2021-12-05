
import './App.css';
import ContractTable from './ContractTable';
import { Container, Grid } from "semantic-ui-react";
function App() {
  return (
    <div className="App">
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column >
            <Container style={{ margin: 20  }}>
            <ContractTable></ContractTable>
            </Container>
          </Grid.Column>
        </Grid>
    </div>
  );
}

export default App;
