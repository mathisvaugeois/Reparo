import Carte from '../components/Carte'
import TextStyle from '../styles/accueil.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Carte />
      <div className={`${TextStyle.under_carte_texte}`}>
        Sur le site <span><Link href="/">reparo.fr</Link></span>, passez des annonces gratuites et sans commission.
        Vous pouvez consulter des <span><Link href="/annonce">petites annonces</Link></span> de particuliers et de professionnels partout en France,
        que vous cherchiez des annonces de réparation de voiture, vélo ou alors faire de la plomberie, éléctricité, peinture
        ou des réparation en tout genre.
      </div>
    </main>
  )
}
