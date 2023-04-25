import React from "react";
import hero from './img/hero.png'
import ld01 from './img/ld01.svg'
import ld02 from './img/ld02.svg'
import ld03 from './img/ld03.svg'
import './scss/style.scss'


export const LandingPage=()=>{
    return(
        <>
         <div className="container-fluid">
            <div className="row principal-landing">
                <div className="col-6">
                    <div className="mt-5 p-5">
                        <span>Con Jobinder encuentra</span><br/>
                        <h1>Un trabajo de acuerdo a tus habilidades desde cualquier parte de México</h1>
                        <p>La plataforma que te brinda una retroalimentacion de mejoramiento de habilidades tecnicas despues de una entrevista.</p>
                            <div className="buttons-actions w-75">
                                 <button type="button" class="btn btn-outline-primary">Saber más</button>
                                 <button type="button" class="btn btn-primary">Empezar</button>
                            </div>
                    </div>
                </div>
                <div className="col-6">
                    <img src={hero} className="w-100"/>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
            <h1 className="text-center">Como funciona?</h1>
            <div className="cards-functional">
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                    <img src={ld01}className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Empieza</h5>
                        <p className="card-text">Llena tu perfil con tu experiencia laboral, agrega tus hablidades tecnicas. 
                                                Y nosotros generamos un listado con las vacantes afines a tus datos.</p>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                    <img src={ld03}className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Haz match!</h5>
                        <p className="card-text">Aplica a las diversas vacantes, genera el match perfecto y espera respuesta de la empresa para iniciar 
                                                 un proceso de reclutamiento.</p>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                    <img src={ld02}className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Recibe Feedback</h5>
                        <p className="card-text">Asi es!, podras recibir una retroalimentacion de las entrevistas que tengas. Podras mejorar con las recomendaciones
                                                 de los reclutadores.</p>
                    </div>
                    </div>
                </div>
            </div>
                
            </div>
            <div className="d-flex justify-content-center mt-5">
            <button type="button" class="btn btn-primary btn-lg">Comienza ahora</button>
            </div>
        </div>
        
        </>
       
    )
}
export default LandingPage;