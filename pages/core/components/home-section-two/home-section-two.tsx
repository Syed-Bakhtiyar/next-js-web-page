import { FormControl, TextField, Select, InputLabel, MenuItem, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useState } from 'react';
import styles from '../../../../styles/Home-section-two.module.css';
import finanzCheck from '../../../../public/assets/FFG-Finanzcheck-T.png';
import goldIcon from '../../../../public/assets/ekomi_gold_siegel_finanzcheck_de.png';
import topZinsIcon from '../../../../public/assets/top-zins-garantie-seal.png';

let index = 0;
export default function HomeSectionTwo() {
  const laufZeits = [1,2,3,4,5,6,7,8,9,10];
  const verwendungszwecks = ['Umschuldung', 'Gebrauchtfahrzeug', 'Neufahrzeug', 'Einrichtung/Möbel', 'Renovierung', 'Urlaub', 'PC/TV/Hifi/Video', 'Ausgleich Girokonto', 'Umzug', 'Immobilienfinanzierung', 'Freie Verwendung'];
  const carouselItems = [
    'Die Beratung war sehr freundlich. Leider war die Änderung der Telefonnum...',
    'Ich war und bin mit der Beratung vom Herrn Rein sehr zufrieden. So stel...',
    'Schnelle kompetente Beratung, nicht aufdringlich, sondern sachlich und z...',
    'Ich war und bin mit der Beratung vom Herrn Rein sehr zufrieden. So stel...',
    'Schnelle kompetente Beratung, nicht aufdringlich, sondern sachlich und z...',
    'sehr angenehmer Kontakt',
    'Sehr gute, schnelle Abwicklung, tolle Beratung. Alles Gute bis nächste...',
    'Sehr kompetent, schnelle und unproblematisch Abwicklung. Sehr zu empfeh...',
    'Sehr kompetent, hilfreich und menschlich. Sehr empfehlenswert',
    'Angebot der Tagobank, sehr empfehlenswert. Schnelle Abwicklung, freundli...',
    'Alles ok',
    'Sehr sehr sehr zufrieden schnell und zuverlässig herzlichen Dank'
  ];
  const [displayedCarouselItem, setDisplayCarouselItem] = useState(carouselItems.slice(0, 3));

  

  const nextPrevious = (action: String) => {
    if(action === 'next'){
      if(index === (carouselItems.length - 1) || carouselItems[carouselItems.length - 1] === displayedCarouselItem[displayedCarouselItem.length - 1]){
        return;
      }
      index++;
      setDisplayCarouselItem(carouselItems.slice(index, (index + 3)));
      return;
    }
    if(index === 0 || carouselItems[0] === displayedCarouselItem[0]){
      return;
    }
    index--;
    setDisplayCarouselItem(carouselItems.slice(index, (index + 3)));
  }

  return (
    <div>
      <div className={`row ${styles.sectionTwoGridStyling}`}>
        <div className={`${styles.flexBoxDisplay} col-md-6 col-sm-12`} >
          <div>
            <img src={finanzCheck.src}/>
          </div>
          <div className={styles.sectionTwoIconsContainerStyling}>
            <img src={goldIcon.src}/>
          </div>
          <div className={styles.sectionTwoIconsContainerStyling}>
            <img src={topZinsIcon.src}/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <p className={styles.sectionTwoParaStyle}>
            <a href="https://www.finanzcheck.de/lp/minuszins/"><u>¹-0,4% Effektiver Jahreszins</u> </a> bei: 1.000€ Netto-Darlehensbetrag, 12 Monate Laufzeit, 0,00% fester Sollzins p.a., monatliche Rate 83,15€, Gesamtbetrag 997,83€, Fidor Bank | Entspricht zugleich dem repräsentativen Beispiel gem. § 6a PAngV. Kredit erfordert Online-Kontoauszug (Kontoblick) und Eröffnung eines Girokontos bei der Fidor Bank. Das Girokonto ist während der Kreditlaufzeit kostenlos.
          </p>
        </div>
      </div>
      <div className={`${styles.flexBoxDisplay} ${styles.sectionTwoHeadng}`}>
        <p>Das sagen unsere Kunden</p>
      </div>
      <div className={`${styles.flexBoxDisplay} ${styles.centerAlignment}`}>
        <ChevronLeftIcon onClick={()=>{nextPrevious('prev')}}/>
        {
          displayedCarouselItem.map((item, index)=>{
            return  <p key={index} className={styles.sectionTwoCarouselItemToDisplay}>
                      {item}
                    </p>
          })
        }
        <ChevronRightIcon onClick={()=>{nextPrevious('next')}}/>
      </div>
    </div>
  )
}
