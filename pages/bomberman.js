import estilos from '../public/css/style.module.css'
import Container from '../components/Container';

const bomberman = () => {
    return (
        <Container>
            <div className={`${estilos.indexCoverBack} d-flex justify-content-center pt-5`}>
                <div className={estilos.boxGamePlayCustom}>
                    <iframe src="https://www.retrogames.cc/embed/20411-bomberman-usa.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
                </div>
            </div>
        </Container>

    );
}
export default bomberman;