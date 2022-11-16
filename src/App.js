import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row } from './styles'
import { useState } from 'react'


function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  //operação para limpar o display
  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number => {
    setCurrentNumber(prev => `${prev === '0'? '' : prev}${number}`)
  })

  //operação para somar dois números
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  //operação para subtrair dois números
  const handleRemNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  //operação para multiplicar dois números
  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  //operação para dividir dois números
  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  //operação para dar o resultado da operação
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== "" && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleRemNumbers();
          break;

        case '*':
          handleMultNumbers();
          break;

        case '/':
          handleDivNumbers();
          break;
      
        default:
          break;
      }
    }
  }
  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
              <Button label="" />
              <Button label="C" onClick={handleClear} />
              <Button label="/" onClick={handleDivNumbers}/>
              <Button label="*" onClick={handleMultNumbers}/>
            </Row>
            <Row>
              <Button label="7" onClick={() => handleAddNumber('7')}/>
              <Button label="8" onClick={() => handleAddNumber('8')}/>
              <Button label="9" onClick={() => handleAddNumber('9')}/>
              <Button label="-" onClick={handleRemNumbers}/>
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAddNumber('4')}/>
              <Button label="5" onClick={() => handleAddNumber('5')}/>
              <Button label="6" onClick={() => handleAddNumber('6')}/>
              <Button label="+" onClick={handleSumNumbers}/>
            </Row>
            <Row>
              <Button label="1" onClick={() => handleAddNumber('1')}/>
              <Button label="2" onClick={() => handleAddNumber('2')}/>
              <Button label="3" onClick={() => handleAddNumber('3')}/>
              <Button label="=" onClick={handleEquals}/>
            </Row>
        </Content>        
      </Container>
    </div>
  );
}

export default App;
