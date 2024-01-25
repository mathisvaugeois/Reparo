import HeaderStyles from '../styles/components/Header.module.css'
import Link from 'next/link'

export default function Header(){
    return(
        <nav className={HeaderStyles.PageCentrale}>
          <div className={HeaderStyles.BandeMenuHaut}>
            <ul className={HeaderStyles.MenuRubriques}>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/annonce/123">Annonce</Link></li>
              <li><Link href="/contact">À propos de nous</Link></li>
            </ul>
          </div>
        </nav>
    )
}