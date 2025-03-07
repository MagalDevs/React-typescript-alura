import React from 'react';
import style from "./Botao.module.scss"

interface IBotaoProps {
    children: React.ReactNode;
}

class Botao extends React.Component<IBotaoProps> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Botao;