import React from 'react';

import Checkbox from './checkbox';

const Tasks = (props) => {
    const { lista, setLista } = props;
    
    const onChangeStatus = e => {
        const { nombre, revisado } = e.target;
        const listaActual = lista.map(item => (
            {...item, 
                done: item.id === nombre ? revisado : item.done}
        ));
        setLista(listaActual);
    };

    const onClickRemoveItem = () => {
        const listaActual = lista.filter(item => !item.done);
        setLista(listaActual);
    };
    const mapeo = lista.map(item => (<Checkbox key={item.id} data={item} onChange={onChangeStatus} />));
    
    return (<div className= "listadoTodo">
        {lista.length ? mapeo : "No hay tareas"}
        {lista.length ? (
            <p>
                <button className="boton2" onClick={onClickRemoveItem}>
                    Eliminar todo lo realizado
                </button>
            </p>
        ) : null}
        
    </div>);
};

export default Tasks