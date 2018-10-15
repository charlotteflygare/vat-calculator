import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0,
      vatSum: 0
    }
  }

  handleInput= event => {
    const vat = parseInt(event.target.value)
    this.setState({
      vatRate: vat
    })
  }

  handleInputIncVat= event => {
    const inc = parseInt(event.target.value)
    this.setState({
      incVat: inc,
      exVat:  incVatToExtVat(this.state.vatRate, inc),
      vatSum: inc - incVatToExtVat(this.state.vatRate, inc)
    })
  }

  handleInputExVat= event => {
    const ex = parseInt(event.target.value)
    this.setState({
      incVat: exVatToIncVat(this.state.vatRate, ex),
      exVat: ex,
      vatSum: exVatToIncVat(this.state.vatRate, ex) - ex
    })
  }


  render() {
    return (
      <div className="App">
        <div className="container-border">
          <div className="container">
            <h1>Calculate VAT</h1>
            <form>
              <div className="radio-buttons">
                <div>
                  <input
                    id="moms25percent"
                    type="radio"
                    value="25"
                    checked={this.state.vatRate === 25}
                    onChange={this.handleInput} />
                  <label htmlFor="moms25percent">25%</label>
                </div>
                <div>
                  <input
                    id="moms12percent"
                    type="radio"
                    value="12"
                    checked={this.state.vatRate === 12}
                    onChange={this.handleInput} />
                  <label htmlFor="moms12percent">12%</label>
                </div>
                <div>
                  <input
                    id="moms6percent"
                    type="radio"
                    value="6"
                    checked={this.state.vatRate === 6}
                    onChange={this.handleInput} />
                  <label htmlFor="moms6percent">6%</label>
                </div>
              </div>
              <div className="input-textfield-container">
                <div className="input-textfield">
                  <label htmlFor="inkVat">Inklusive moms</label>
                  <input
                    type="number"
                    name="inkVat"
                    onChange={this.handleInputIncVat}
                    value={this.state.incVat.toFixed(0)}/>
                </div>
                <div className="input-textfield">
                  <label htmlFor="ExVat">Exklusive moms</label>
                  <input
                    type="number"
                    name="ExVat"
                    onChange={this.handleInputExVat}
                    value={this.state.exVat.toFixed(0)} />
                </div>
                <div className="input-textfield">
                  <label htmlFor="VatSum">Momssumma</label>
                  <input
                    type="number"
                    name="VatSum"
                    value={this.state.vatSum.toFixed(0)} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


    )
  }

}

export default App
