import React, { Component } from 'react';

class Formulario extends Component {
    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" type="text"/>
                                <label htmlFor="ciudad">Ciudad: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                            <select id="pais">
                                <option value="" defaultValue>Elige un país</option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="CR">Costa Rica</option>
                                <option value="ES">España</option>
                                <option value="US">Estados Unidos</option>
                                <option value="MX">México</option>
                                <option value="PE">Perú</option>
                            </select>
                            <label htmlFor="pais">País: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn btn-large yellow accent-4" value="Buscar..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Formulario;