import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Nav({onSearch}) {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <img src={Logo} alt="React Bootstrap logo"/>
          <Navbar.Brand >Henry - Weather App
          </Navbar.Brand>
          <SearchBar onSearch={onSearch} />
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
