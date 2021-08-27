import React, { useState } from 'react';



const Form = (props) => {
    const [descripcion, setDescripcion] = useState ("");
    const { agregarItem } = props
    const handleSubmit = e => {
        e.preventDefault();
        agregarItem({
            done: false,
            id:(+new Date()).toString(),
            descripcion
        });
        console.log(descripcion)
        setDescripcion("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="todolist">
            <div className= "formulario">
                <input type="text" 
                    className="texto" 
                    value={descripcion} 
                    onChange={e => setDescripcion(e.target.value)}>
                </input>
                <button className="boton" disabled={descripcion ? "" : "disabled"}>
                    AGREGAR
                </button>
            </div>
            </div>
        </form> 
            )
}

export default Form
