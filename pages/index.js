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
                {/* <section class="message -left">
                    <i class="nes-bcrikko"></i>

                    <div class="nes-balloon from-left">
                        <p>Hello Player of Arcade, Welcome to the system</p>
                    </div>
                </section> */}
            </div>

        </Container>
    )
}

export default index;