import React, { useState } from 'react'
import Logo from '../src/images/Logo_FB.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


import { RiBarChart2Fill } from "react-icons/ri"
import { FaSearchDollar } from "react-icons/fa"



function App(){

  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img src={Logo} width="100px"/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#dev">Devs</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl placeholder="Pesquisar"/>
           &nbsp;
          <Button variant="outline-info"><FaSearchDollar color="yellow"/> Buscar</Button>
        </Form>
      </Navbar>
      <Jumbotron className="centralizar">
        <h1><RiBarChart2Fill/> Fatec - Bolsas</h1>
        <p>
          Consulte os altos e baixos da bolsa de valores por aqui
        </p>
      </Jumbotron>

      <div className="conteudo"></div>
      <div className="conteudo"></div>
      <div className="conteudo"></div>
      <div className="conteudo2"></div>

      <div id="rodape">
        <p id="conteudo_rodape">Fatec - Bolsas &copy; Todos os Dirteitos Reservados <br/> Desenvolvido por Raynner Brito e Pedro Domingues</p>
      </div>

    </>
  )

}
export default App