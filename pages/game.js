import estilos from '../public/css/style.module.css'
import Container from '../components/Container';
import Head from 'next/head';


const index = () => {
    return (

        <Container>
            <Head>
                <title>Pixel Arcade - Games</title>
            </Head>

            <div className={estilos.indexCoverBack}>
                <h1 className={estilos.titleCover}>Pixel<span className={estilos.span}> Games</span></h1>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img src="https://i.3djuegos.com/juegos/5327/super_mario_bros/fotos/ficha/super_mario_bros-1698422.webp" className="card-img-top" alt="Juego 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Super Mario</h5>
                                    <p className="card-text">Super Mario Bros, Nintendo</p>
                                    <a href="#" className="nes-btn btn-primary">Jugar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img src="https://via.placeholder.com/300x200.png?text=Juego+2" className="card-img-top" alt="Juego 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Juego 2</h5>
                                    <p className="card-text">Descripción del juego 2</p>
                                    <a href="#" className="btn btn-primary">Jugar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img src="https://via.placeholder.com/300x200.png?text=Juego+3" className="card-img-top" alt="Juego 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Juego 3</h5>
                                    <p className="card-text">Descripción del juego 3</p>
                                    <a href="#" className="btn btn-primary">Jugar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img src="https://via.placeholder.com/300x200.png?text=Juego+4" className="card-img-top" alt="Juego 4" />
                                <div className="card-body">
                                    <h5 className="card-title">Juego 4</h5>
                                    <p className="card-text">Descripción del juego 4</p>
                                    <a href="#" className="btn btn-primary">Jugar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default index;