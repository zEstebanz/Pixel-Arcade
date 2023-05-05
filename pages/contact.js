import estilos from '../public/css/style.module.css'
import Container from '../components/Container';
import Head from 'next/head';

const contact = () => {
    return (

        <Container>
            <Head>
                <title>Pixel Arcade - contact</title>
            </Head>

            <div className={estilos.indexCoverBack}>
                <h1 className={estilos.titleCover}><span className={estilos.span}>Contact</span></h1>

            </div>
        </Container>
    )
}

export default contact;