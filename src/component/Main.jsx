import React from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "./data.json";

const historial = []

class Main extends React.Component{
    constructor(props){
        super(props)
        this.data = data;
        this.state = {
            count: 0,
            seleccionPrevia: ""
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          historial.push(this.state.seleccionPrevia);
        }
      }

    handleClick = (e) =>{
        const id = e.target.id;
        
        if(this.state.count >= 7){
            alert("Fin")
        }
        if(this.state.count === 0){
          id === "A" ? this.setState({
            count: this.state.count +1,
            seleccionPrevia: "A",
          }) : this.setState({
            count: this.state.count +2,
            seleccionPrevia: "B",
          })
        } else if(this.state.count >= 1 && this.state.seleccionPrevia === "A"){
          id === "A" ? this.setState({
            count: this.state.count +2,
            seleccionPrevia: "A",
          }) : this.setState({
            count: this.state.count +3,
            seleccionPrevia: "B",
          })
        } else if(this.state.count >= 1 && this.state.seleccionPrevia === "B"){
          id === "A" ? this.setState({
            count: this.state.count +1,
            seleccionPrevia: "A",
          }) : this.setState({
            count: this.state.count +2,
            seleccionPrevia: "B",
          })
        }
        
    }
    

    

    render(){
        return <div className="layout">
            <h1 className="historia">{data[this.state.count].historia}</h1>
            <Opciones className="opciones " handleClick={this.handleClick} 
            opcionA={data[this.state.count].opciones.a}
            opcionB={data[this.state.count].opciones.b}
            />
            <Recordatorio 
            seleccionPrevia={this.state.seleccionPrevia}
            historial={historial.map(
              (e, index) => (
                <li key={index}>{e}</li>
              ),
              data[this.state.count].id
            )}
            />
        </div>
    }
}


export default Main;