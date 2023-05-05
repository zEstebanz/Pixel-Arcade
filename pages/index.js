import estilos from '../public/css/style.module.css'
import Container from '../components/Container';
import Head from 'next/head';

const index = () => {
    return (

        <Container>
            <Head>
                <title>Pixel Arcade</title>
            </Head>

            <div className={estilos.indexCoverBack}>
                <h1 className={estilos.titleCover}>Pixel<span className={estilos.span}> Arcade</span></h1>

            </div>
        </Container>
    )
}

export default index;