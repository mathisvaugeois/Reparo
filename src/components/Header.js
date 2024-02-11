import HeaderStyles from '../styles/components/header.module.css'
import Link from 'next/link'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import SignOutButton from './signOutButton'


export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <nav className={HeaderStyles.PageCentrale}>
      <div className={HeaderStyles.BandeMenuHaut}>
        <ul className={HeaderStyles.MenuRubriques}>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/annonce/123">Annonce</Link></li>
          <li><Link href="/contact">À propos de nous</Link></li>
          <li><Link href="/admin">admin</Link></li>
          <li>{session?.user ? (
            <SignOutButton />
          ) : (
            <Link href="/auth/sign-in">Sign-in</Link>
          )}</li>
        </ul>
      </div>
    </nav>
  )
}