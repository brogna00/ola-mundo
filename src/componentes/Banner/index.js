import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Explorando o universo das interfaces!
                </h1>   
                <p className={styles.paragrafo}>
                    Bem-vindo! Sou João Brogna, desenvolvedor Front-end com especialidade em React, Javascript, HTML, CSS e mais recentemente Java. Apaixonado por criar experiências para os usuários. Vamos conversar?
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                
                />

            </div>  

        </div>

    );

}