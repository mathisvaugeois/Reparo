import HeaderStyles from '../styles/components/Header.module.css'
import Link from 'next/link'

export default function Header(){
    return(
        <nav className={HeaderStyles.PageCentrale}>
          <div className={HeaderStyles.BandeMenuHaut}>
            <ul className={HeaderStyles.MenuRubriques}>
              <li><a href="/">Accueil</a></li>
              <li><a href="/annonce/123">Annonce</a></li>
              <li><a href="/contact">À propos de nous</a></li>
            </ul>
          </div>
        </nav>
    )
}