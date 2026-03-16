"use client";
import Image from "next/image";
import styles from "@/app/styles/hero.module.css";
import { useEffect,useState } from "react";
import {FaGithub,FaLinkedin} from "react-icons/fa";

 export  default function Hero(){
   
    return(
        <div className={styles.hero} >
            
            <div className={styles.header} >
            <div className={styles.iconDev}>
                <Image src="/dev-foto-icone.png" width={50} height={50} alt="Icone de desenvolvedor" />
                <h1>Lucas Leal</h1>
            </div>
            <div className={styles.navegacao}>
                <ul className={styles.lista}>
                    <li><a href="#sobre" >Sobre</a></li>
                    <li><a href="#habilidades" >Habilidades</a></li>
                    <li><a href="#projetos" >Projetos</a></li>
                    <li><a href="#contatos" >Contatos</a></li>
                </ul>

            </div>
            <div className={styles.redes}>
                 <a href="https://github.com/Dev-Lucas-Leal" target="_blank" rel="noopener noreferrer">
                 <FaGithub size={39} className={styles.github}  id="fgithub"/>
                 </a>
                  <a href="https://www.linkedin.com/in/lucasleal083/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={39} className={styles.linkedin}  id="flinkedin"/>
                  </a>
            </div>
            </div>
            <div className={styles.sobre} id="sobre">
                <div className={styles.ladoEsquerdo}>
                    <h2>Desenvolvedor Full - Stack </h2>
                    <h3>Transformando Suas Ideias em realidade no meio digital!</h3>
                    <p>Sou um desenvolvedor full-stack apaixonado por programação e desafios, buscando sempre soluções inovadoras e eficientes.<br></br> Com experiência em diversas tecnologias, estou sempre em busca de novos desafios para<br></br> aprimorar minhas habilidades e contribuir para projetos impactantes.</p>
                    <div className={styles.btnsHero}>
                        <button className={styles.btnBaixar}> <Image 
                        alt="foto de baixar cv"
                        src="/baixar-branco.png"
                        width={30}
                        height={30}  /> Baixar CV</button>
                        <button className={styles.btnGithub}> <Image 
                        alt="foto de github"
                        width={30}
                        height={30}
                        src="/github.png" /> Ver Github</button>
                    </div>
                </div>
                <div className={styles.ladoDireito}>
                    <Image className={styles.fotoHero}
                        src="/lucas_foto.jpg"
                        alt="Foto de Lucas" 
                        width={500}
                        height={500}
                        
                    />
                </div>

            </div>
       
        </div>
    )
}