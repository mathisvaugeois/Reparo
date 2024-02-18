
import HeaderStyles from '../styles/components/Header.module.css'
import Link from 'next/link'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import SignOutButton from './SignOutButton'
import Image from 'next/image'



export default async function Header(){
  const session = await getServerSession(authOptions) ;
    return(
        <nav className={HeaderStyles.PageCentrale}>
          <div className={HeaderStyles.BandeMenuHaut}>
           
            <ul className={HeaderStyles.MenuRubriques}>
            <li className={HeaderStyles.image_pos} style={{float:'left'}}><Link href="/"><Image 
              src="/logoReparo.png"  
              width={60}
              height={60}
              alt="Logo du site"/></Link></li>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/annonce/123">Annonce</Link></li>
              <li><Link href="/contact">À propos de nous</Link></li>
              <li style={{float:'right'}}><Link href="/admin">admin</Link></li>
              <li style={{float:'right'}}><Link href="/annonce/creation">Création d'annonce</Link></li>
            
            <li style={{float:'right'}}>{session?.user ? (
              <SignOutButton/>
            ) : (
              <Link href="/auth/sign-in">Sign-in</Link>
            )}
            </li>
            </ul>
          </div>
        </nav>
    )
}