import estilos from '../public/css/style.module.css'

const FormSignin = () => {
    return (

        <div className={estilos.indexCoverBack}>

            <div className={`${estilos.formSignin} container pt-5 pb-5`}>
                <h2 className={`${estilos.textSubTituloPixel}`}>Registrate</h2>

                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form className={`${estilos.formSigninText}`}>
                            <div className="mb-1">
                                <label htmlFor="name" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" id="name" name="name" required />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="email" className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control" id="email" name="email" required />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="password" name="password" required />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="age" className="form-label">Edad</label>
                                <input type="number" className="form-control" id="age" name="age" min={10} required />
                            </div>
                            <button type="submit" className={`${estilos.formSigninText} nes-btn is-success mt-4`} >Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FormSignin;