import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';
import Clima from './Clima';

class App extends Component {
  state={
    error:'',
    consulta:{},
    resultado:{}
  }
  componentDidUpdate(){
    this.consultarApi();
  }
  componentDidMount(){
    this.setState({
      error:false
    })
  }

  consultarApi=()=>{
    const {ciudad, pais}=this.state.consulta;
    if(!ciudad || !pais) return null;
    // leer la url y agregar api key
    const appId='af14ef2b7008115571feea5ffe99ecf2'
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    // console.log(url);
    // query con fetch api
    fetch(url)
    .then(respuesta=>{
      return respuesta.json();
    })
    .then(datos=>{
      this.setState({
        resultado: datos
      })
    })
    .catch(error=>{
      console.log(error)
    })
    
  }
  datosConsulta=respuesta=>{
    if(respuesta.ciudad==='' || respuesta.pais===''){
      this.setState({
        error:true
      })
    }else{
      this.setState({
        consulta:respuesta,
        error:false
      })
    }
  }
  render() {
    const error=this.state.error;
    let resultado;
    if (error){
      resultado=<Error mensaje="Ambos campos son obligatorios"/>
    }else{
      resultado=<Clima/>
    }
    return (
      <div className="app">
        <Header
          titulo='Clima React'
        />
        <Formulario
          datosConsulta={this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;

