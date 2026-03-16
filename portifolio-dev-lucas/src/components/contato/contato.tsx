"use client"
import {FaGithub,FaLinkedin} from "react-icons/fa";
import styles from "@/app/styles/contato.module.css";
import { MdEmail } from "react-icons/md";
 export default function Contato(){
    return(
        <div className={styles.contatos}  id="contatos">
            <h2>Contatos</h2>
            <div className={styles.contContainer}>
            <div className={styles.contatoEsquerdo}>
                <ol>
                    <li><a href="https://github.com/Dev-Lucas-Leal"><FaGithub className={styles.iconesC}/>GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/lucasleal083/"><FaLinkedin className={styles.iconesC}/>LinkedIn</a></li>
                    <li><a href=""><MdEmail  className={styles.iconesC}/>llucaslleal2006@gmail.com</a></li>
                </ol>
            </div>
            <div className={styles.contatoDireito}>
                <div className={styles.containerDireitaContato}>
                    <h3>Entre em contato comigo!</h3>
                    <form action="" method="" className={styles.formContato}>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required placeholder="Digite seu Nome" className={styles.inputNome}/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required placeholder="Digite seu Email" className={styles.inputEmail}/>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" required placeholder="Digite sua mensagem" className={styles.textarea}></textarea>
                        <button type="submit" className={styles.btnSubmit}>Enviar</button>
 
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}