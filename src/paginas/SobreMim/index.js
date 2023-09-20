import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";



export default function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >   
            <h3 className={styles.subtitulo}>
                Olá, eu sou o João

            </h3>
            <img 
                src={fotoSobreMim}
                alt=''
                className={styles.fotoSobreMim}
            />
            
            <p className={styles.paragrafo}>Tenho 22 anos e moro em Osasco-SP. Sempre gostei de criar e estimular minha criatividade. Desde que comecei a estudar programação, fiquei fascinado com a possibilidade de transformar ideias em realidade. Se você está procurando um desenvolvedor front-end comprometido e dedicado, você veio ao lugar certo. Estou sempre em busca de novas oportunidades para colaborar e criar algo especial. Estou ansioso para iniciar minha carreira como programador, contribuir para projetos desafiadores e me desenvolver profissionalmente. Tenho um forte compromisso com a qualidade do código e a entrega de produtos finais que atendam às necessidades dos usuários. Estou aberto a oportunidades de trabalho, tanto em tempo integral quanto em meio período, e estou disposto a enfrentar novos desafios e crescer como profissional de desenvolvimento front-end. Então, não hesite em entrar em contato comigo para discutir projetos futuros e ideias criativas.</p>
 
        </PostModelo>

    );

}