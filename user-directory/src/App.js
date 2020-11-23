import './App.css';
import { Table } from "react-bootstrap";


function App() {

  const styles = {
    header: {
      backgroundColor: "#6495ED",
      padding: "1rem",
      margin: "0"
    },
    input: {
      marginLeft: "auto",
      marginRight: "auto",
      padding: "5px",
    }

  }; return (
    <div>
      <div className="App">
        <header>
          <h1 style={styles.header}>Search for Employee</h1>
        </header>
      </div>

      <div>
        <h2>
          Search:
        </h2>
        <input style={styles.input}></input>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
