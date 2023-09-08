import { Link } from 'react-router-dom';
import styles from './Rodape.module.css';
import rodape from 'assets/CACTO_CODE.png';
export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <Link to="./">
        <img src={rodape} alt='Rodape' height="70"/>
      </Link>
      <Link>
        <h4>Desenvolvido por CactoCode.</h4>
      </Link>
    </footer>
  )
}