const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="mb-4">Contacto</h4>
                        <ul className="list-unstyled">
                            <li>Pixel Arcade</li>
                            <li>Calle Falsa 123</li>
                            <li>contacto@pixelarcade.com</li>
                            <li>555-1234</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mb-4">Redes sociales</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mb-4">Suscríbete</h4>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Suscríbete</button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    <p className="mb-0">© 2021 Pixel Arcade. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;