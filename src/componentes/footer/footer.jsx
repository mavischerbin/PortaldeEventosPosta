import  react from 'reac'
import '../../estilosgenerales.css'
import '../header/header.css'
import './footer.css'
import logoportal from '../header/imgs/logoportal.png'

const PiePagina = () => {
    return (
        <div className='footer blanco'>
            <div className="col50"><img src={logoPortal} />
                <div className="col100 flex">
                    <div className="col50">
                        <ul className='lista_columna'>
                            <li>Categorias</li>
                            <li>Salones</li>
                            <li>Imagen Personal</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className="col50">
                        <ul className='lista_columna'>
                            <il>Avisos Legales</il>
                            <il>Terminos y condiciones</il>
                            <il>Trabaja con nosotros</il>
                            <il>Anuncia en el portal</il>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col50 oro60">b</div>
        </div>
    )
}

export default PiePagina