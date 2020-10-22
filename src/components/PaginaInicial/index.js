import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const PaginaInicial = () => (
    <div className='container'>
        <h1>Escolha seu caminho em JavaScript</h1>

        <div className="conteudo-opcoes">
            <Link className="opcao-front-end" to='/front-end' >Front-End</Link>
            <Link className="opcao-back-end" to='/back-end' >Back-End</Link>
        </div>
    </div>
);

export default PaginaInicial;