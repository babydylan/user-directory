import React, { Component } from "react";
import API from "../utils/Api"
import Table from "../components/Table";
import Search from "../components/Search";
import Row from "../components/Row";



class Home extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    API.userList().then(res => {
      this.setState({ users: res.data.results });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const styles = {
      header: {
        backgroundColor: "#6495ED",
        padding: "1rem",
        margin: "0"
      },
      input: {
        marginLeft: "1rem",
        marginRight: "auto",
        padding: "5px",
      },
      search: {
        marginLeft: "1rem"
      }
    };
    return (
      <div>
        <div className="App">
          <header>
            <h1 style={styles.header}>Search for Employee</h1>
          </header>
        </div>

        <div>
          <h2 style={styles.search}>
            Search:
        </h2>
          <Search style={styles.input}></Search>
        </div>

        <Table>
          {this.state.users.map(user => (
            <Row
              key={user.id}
              image={user.picture.large}
              firstName={user.name.first}
              lastName={user.name.last}
              phone={user.phone}
              email={user.email}
              dob={user.dob.date}
            />

          ))}
        </Table>
      </div>
    );
  }
}
export default Home;