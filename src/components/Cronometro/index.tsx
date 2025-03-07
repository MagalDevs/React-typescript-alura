import Botao from '../Botao'
import style from './Cronometro.module.scss'
import Relogio from './Relogio'

function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escoolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio/>
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  )
}

export default Cronometro
