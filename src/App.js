import React, { useState, useEffect } from 'react'
import Logo from '../src/images/Logo_FB.png'
import Bandeira from '../src/images/bandeira.jpg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { RiBarChart2Fill } from "react-icons/ri"
import { FaSearchDollar } from "react-icons/fa"

function App(){
  const [resultado, setResultado] = useState(null)
  const [corpo, setCorpo] = useState(false)
  const [valor, setValor] = useState('')
  const [moeda, setMoeda] = useState('')
  const [convertido, setConvertido] = useState('')

  async function obtemCotacao() {
    let urlCota = `https://economia.awesomeapi.com.br/json/all/`
    await fetch(urlCota)
     .then(response => response.json())
     .then(data => {
       console.log(data)
       setResultado(data)
     })
     .catch(function(error){
       console.error(`Sinto muito, ocorreu um erro inesperado. Erro: ${error.message}`)
     })
  }

  function converter(valor, moeda, resultado){
    let convertido = moeda ? valor / resultado[moeda]['ask'] : 0
    setConvertido(convertido.toFixed(2))
    console.log(convertido)
  }

  useEffect(() => {
    document.title = "Fatec Bolsas - Home"
  },[])

  useEffect(() => {
    if(resultado){
      setCorpo(true)
      converter(valor, moeda, resultado)
    }else{
      setCorpo(false)
    }
  },[resultado, moeda, valor])

  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo" width="100px"/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#dev">Devs</Nav.Link>
        </Nav>
      </Navbar>
      <Jumbotron className="centralizar">
        <h1><RiBarChart2Fill/> Fatec - Bolsas</h1>
        <p>
          Converta todas as moedas para Real Brasileiro
        </p>
      </Jumbotron>

      <Container>
        <Row>
          <Col>
          <Form>
            <Form.Group>
              <Form.Label>Moeda a converter</Form.Label>
              <Form.Control as="select" onChange={event => setMoeda(event.target.value)}>
                <option value="" diabled>Selecione uma Moeda</option>
                <option value="USD">Dólar Americano</option>
                <option value="CAD">Dólar Canadense</option>
                <option value="AUD">Dólar Australiano</option>
                <option value="EUR">Euro</option>
                <option value="GBP">Libra Esterlina</option>
                <option value="ARS">Peso Argentino</option>
                <option value="JPY">Iene Japonês</option>
                <option value="CHF">Franco Suiço</option>
                <option value="CNY">Yuan Chinês</option>
                <option value="YLS">Novo Shekel Israelense</option>
                <option value="BTC">Bitcon</option>
                <option value="LTC">Litecoin</option>
                <option value="ETH">Ethereum</option>
                <option value="XRP">Ripple</option>
              </Form.Control>
          </Form.Group>
          <Form.Group >
              <Form.Label>Valor</Form.Label>
              <Form.Control type="number" onChange={event => setValor(event.target.value)} placeholder="Ex: 300" />
          </Form.Group>
          <Form.Group >
          <Button className="botao_procura" variant="outline-success" onClick={() => obtemCotacao()}> <FaSearchDollar color="yellow"/>Converter</Button>
          </Form.Group>
        {corpo &&
          <Card bg="primary" className="text-center">
            <Card.Header>
              <h3>Conversão</h3>
            </Card.Header>
            <Card.Body className="bg-light">
              <img src={Bandeira} alt="Brasil" width="250px" />
              <h1>R$ {convertido}</h1>
            </Card.Body>
          </Card>
        }
          </Form>
          </Col>
        </Row>
      </Container>

      
        
      <div id="rodape">
        <p id="conteudo_rodape">Fatec - Bolsas &copy; Todos os Direitos Reservados <br/> Desenvolvido por Raynner Brito e Pedro Domingues</p>
      </div>

    </>
  )

}
export default App