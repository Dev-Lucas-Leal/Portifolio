import styles from "@/app/styles/projetos.module.css";
import Image from "next/image";
import {FaGithub} from "react-icons/fa";

export default
function Projetos(){
    return(
        <div className={styles.projetos} id="projetos">
            <h2 className={styles.tituloProjetos}>Projetos</h2>
            <div className={styles.containerProjetos}>
                <div className={styles.projetoCard}>
                    <div className={styles.img}>
                        <Image className={styles.fotoproj}
                        src="/to-do-list.png"
                        alt="Foto do projeto To-Do List" 
                        width={600}
                        height={400} />
                    </div>
                    <div className={styles.conteudo}>
                        <h3>To Do List</h3>
                        <p>Aplicação para o gerenciamento de tarefas com armazenamento na memoria principal e interface responsiva</p>
                    <div className={styles.linguagensUtilizadas}>
                        <img src="/tech/foto-react.png" alt="react" />
                        <img src="/tech/javascript-foto.png" alt="javascript" />
                        <img src="/tech/foto-node.png" alt="node" />
                        <img src="/tech/foto-html.png" alt="html" />
                        <img src="/tech/css-foto.png" alt="css" />
                        <img src="/tech/express-js-foto.png" alt="express" />
                    </div>
                    <a href="https://github.com/Dev-Lucas-Leal/Projeto-To-Do-List"
                    target="_blank"
                    className={styles.verGithub}>
                    <FaGithub  /> Ver no Github
                    </a>
                    </div>
                </div>
                <div className={styles.projetoCard}>
                    <div className={styles.img}>
                        <Image className={styles.fotoproj}
                        src="/foto-landing-page-cafe.png"
                        alt="Foto do projeto Cafeteria" 
                        width={600}
                        height={400} />
                    </div>
                    <div className={styles.conteudo}>
                        <h3>Cafeteria</h3>
                        <p>Aplicação de uma landing de uma cafeteria online, onde permite a visualização de produtos e a realização de pedidos</p>
                    <div className={styles.linguagensUtilizadas}>
                        <img src="/tech/php-foto.png" alt="php" />
                        <img src="/tech/javascript-foto.png" alt="javascript" />
                        <img src="/tech/sql-foto.png" alt="sql" />
                        <img src="/tech/foto-html.png" alt="html" />
                        <img src="/tech/css-foto.png" alt="css" />
                    </div>
                    <a href="https://github.com/Felipep06/remakecafeteria/tree/felipe"
                    target="_blank"
                    className={styles.verGithub}>
                    <FaGithub  /> Ver no Github
                    </a>
                    </div>
                </div>
                <div className={styles.projetoCard}>
                    <div className={styles.img}>
                        <Image className={styles.fotoproj}
                        src="/cadastro-venda-foto.png"
                        alt="Foto do projeto Cadastro" 
                        width={600}
                        height={400} />
                    </div>
                    <div className={styles.conteudo}>
                        <h3>Cadastro de Vendas</h3>
                        <p>Aplicação para o gerenciamento de Vendas, que permite o cadastro de vendas, sua criação, remoção e atualização</p>
                    <div className={styles.linguagensUtilizadas}>
                        <img src="/tech/foto-react.png" alt="react" />
                        <img src="/tech/javascript-foto.png" alt="javascript" />
                        <img src="/tech/foto-node.png" alt="node" />
                        <img src="/tech/foto-html.png" alt="html" />
                        <img src="/tech/css-foto.png" alt="css" />
                    </div>
                    <a href="https://github.com/Dev-Lucas-Leal/Projeto-To-Do-List"
                    target="_blank"
                    className={styles.verGithub}>
                    <FaGithub  /> Ver no Github
                    </a>
                    </div>
                </div>
                <div className={styles.projetoCard}>
                    <div className={styles.img}>
                        <Image className={styles.fotoproj}
                        src="/foto-portifolio.png"
                        alt="Foto do projeto To-Do List" 
                        width={600}
                        height={400} />
                    </div>
                    <div className={styles.conteudo}>
                        <h3>Portifólio</h3>
                        <p>Minha página de portifólio, onde mostra mais sobre mim,minhas habilidades , projetos e contato</p>
                    <div className={styles.linguagensUtilizadas}>
                        <img src="/tech/foto-react.png" alt="react" />
                        <img src="/tech/javascript-foto.png" alt="javascript" />
                        <img src="/tech/foto-node.png" alt="node" />
                        <img src="/tech/foto-html.png" alt="html" />
                        <img src="/tech/css-foto.png" alt="css" />
                        <img src="/tech/foto-ts.png" alt="ts" />
                        <img src="/tech/next-foto.png" alt="next" />
                    </div>
                    <a href="https://github.com/Dev-Lucas-Leal/Projeto-To-Do-List"
                    target="_blank"
                    className={styles.verGithub}>
                    <FaGithub  /> Ver no Github
                    </a>
                    </div>
                </div>
                <div className={styles.projetoCard}>
                    <div className={styles.img}>
                       
                    </div>
                    <div className={styles.conteudo}>
                        <h3>Canil Extremo Oriental</h3>
                        <p>Em andamento</p>
                    <div className={styles.linguagensUtilizadas}>
                        <img src="/tech/foto-react.png" alt="react" />
                        <img src="/tech/javascript-foto.png" alt="javascript" />
                        <img src="/tech/foto-node.png" alt="node" />
                        <img src="/tech/foto-html.png" alt="html" />
                        <img src="/tech/css-foto.png" alt="css" />
                    </div>
                    <a href=""
                    target="_blank"
                    className={styles.verGithub}>
                    <FaGithub  /> Ver no Github
                    </a>
                    </div>
                </div>
                <div className={styles.projetoCard}>
                    <div className={styles.img}>
                       
                    </div>
                    <div className={styles.conteudo}>
                        <h3>Curso de Química</h3>
                        <p>Em Andamento</p>
                    <div className={styles.linguagensUtilizadas}>
                        <img src="/tech/foto-react.png" alt="react" />
                        <img src="/tech/javascript-foto.png" alt="javascript" />
                        <img src="/tech/foto-node.png" alt="node" />
                        <img src="/tech/foto-html.png" alt="html" />
                        <img src="/tech/css-foto.png" alt="css" />
                    </div>
                    <a href=""
                    target="_blank"
                    className={styles.verGithub}>
                    <FaGithub  /> Ver no Github
                    </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}