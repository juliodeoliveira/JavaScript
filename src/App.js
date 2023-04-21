
import './App.css';

function App() {
  return (
    <div className="App">
      Hello world!
    </div>
  );
}

function calculate(a, b) {
  const add = a + b
  const subtract = a - b
  const multiply = a * b
  const divide = a / b

  return [add, subtract]
}

const [add, subtract] = calculate(4, 7)

document.body.innerText += `Soma: ${add}`
document.body.innerText += `Subtração: ${subtract}`

export default App;
