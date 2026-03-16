import styles from "@/app/styles/skills.module.css";
import App from "../anima";

export default function Habilidades(){
  return(
    <div className={styles.habilidades} id="habilidades">
      <h2>Habilidades</h2>
      <p className={styles.sub}>
        Tecnologias e competências que utilizo para desenvolver soluções completas
      </p>
      <div className={styles.hardContainer}>
        <App/>
      </div>
      <div className={styles.softGrid}>
        <div className={styles.softCard}>
          <h4>Comunicação</h4>
          <p>Capacidade de explicar soluções técnicas claramente para os colaboradores e clientes.</p>
        </div>
        <div className={styles.softCard}>
          <h4>Trabalho em equipe</h4>
          <p>Experiência colaborando com amigos universitários e outros desenvolvedores em projetos.</p>
        </div>
        <div className={styles.softCard}>
          <h4>Resolução de problemas</h4>
          <p>Foco em encontrar soluções eficientes e escaláveis para desafios complexos.</p>
        </div>
        <div className={styles.softCard}>
          <h4>Adaptabilidade</h4>
          <p>Aprendizado rápido de novas tecnologias e metodologias de acordo com o que o projeto exige.</p>
        </div>
      </div>
    </div>
  )
}