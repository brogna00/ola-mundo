import styles from './Post.module.css';
import './Post.css';
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post(){
    
    const paramentros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(paramentros.id);
    })

    if(!post){
        return <NaoEncontrada />
    }

    const postsRecomendados = posts.filter((post) => post.id !== Number(paramentros.id)).sort((a, b) => b.id - a.id).slice(0, 4);

    return(
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <h2 className={styles.tituloOutrosPosts}>
                            Outras publicações que você pode gostar:
                        </h2>
                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={ post } />
                                </li>

                            ))};
                        </ul>

                    </PostModelo>
                } />
            </Route>
        </Routes>

    )

}
