import { HeadersAdapter } from 'next/dist/server/web/spec-extension/adapters/headers'
import TextStyle from '../styles/components/text.module.css'
import AnnoncePage from './Annonce'

export default function text(){
    return(
        <div className={`${TextStyle.under_carte_texte}`}>
        Sur le site <a className={`${TextStyle.bleu_highlith}`} href='../layout.tsx'>reparo.fr</a>, passez des annonces gratuites et sans commission. 
        Vous pouvez consulter des <a href="<AnnoncePage/>">petites annonces</a> de particuliers et de professionnels partout en France, 
        que vous cherchiez des annonces de réparation de voiture, vélo ou alors faire de la plomberie, éléctricité, peinture 
        ou des réparation en tout genre. 
    </div>
 
    )
}