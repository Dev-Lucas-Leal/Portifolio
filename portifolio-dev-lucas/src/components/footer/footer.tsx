import styles from "@/app/styles/footer.module.css";
import { FaRegCopyright } from "react-icons/fa";
 export default function Footer(){
    return(

        <footer className={styles.footer} id="rodape">
            <FaRegCopyright className={styles.iconeCopyright} />
            <p>Todos os direitos reservados - 2026</p>
        </footer>
    )
}