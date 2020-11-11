import React, { useEffect, useState } from 'react';
import '../App.css';
import List from '../components/list';
import withListLoading from '../components/withListLoading';
import { Col, Row, Container } from "../components/grid";
import Footer from "../components/footer"
import axios from 'axios'

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://localhost:8080/api/users';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);
  return (
    <div className='App'>
      <Container fluid className='repo-container'>
        <Row>
          <Col size="md-12">
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}
export default App;