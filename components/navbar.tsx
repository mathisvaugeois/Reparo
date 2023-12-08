import NavbarStyles from '../styles/components/navbar.module.css'

export default function Navbar(){
    return(
      <nav className={NavbarStyles.PageCentrale}>
        <div className={NavbarStyles.BandeMenuHaut} /*"ParamOpaciteMenu"*/>
          <ul className={NavbarStyles.MenuRubriques}>
            <li><a href="page">Accueil</a></li>
            <li><a href="annonce/123">Annonce</a></li>
            <li><a href="#">À propos de nous</a></li>
          </ul>
        </div>
      </nav>
    )
}