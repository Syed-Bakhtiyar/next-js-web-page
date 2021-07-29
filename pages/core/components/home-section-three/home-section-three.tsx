import { FormControl, TextField, Select, InputLabel, MenuItem, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from '../../../../styles/Home-section-three.module.css';
import ideaIc from '../../../../public/assets/idea-ic.png';
import Box from '@material-ui/core/Box';

export default function HomeSectionThree() {
  const laufZeits = [1,2,3,4,5,6,7,8,9,10];
  const ideas = ['Wir bieten Ihnen einen unabhängigen und kostenlosen Vergleich von Kreditangeboten', 
                 'Wir holen für Sie individuelle Kreditangebote ein. Unsere Kreditanfragen sind SCHUFA-neutral, also ohne negative Auswirkung auf Ihren SCHUFA-Score', 
                 'Zusätzlich bieten wir Ihnen weitere Dienstleistungen rund um Ihren Kreditwunsch, z. B. unsere individuelle telefonische Beratung und technische Unterstützung, um die Bearbeitung Ihrer Kreditanfrage durch die Bank zu beschleunigen', 
                 'Mit FINANZCHECK.de gelangen Sie sicher und mühelos an Ihr Wunschdarlehen'];
  return (
    <Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h3 className={`${styles.blueColor}`}>
            Die FINANZCHECK.de Vorteile im Überblick
          </h3>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling} ${styles.ideaContainer}`}>
        <Box className={`${styles.ideaImageContainer}`}>
          <img src={ideaIc.src}/>
        </Box>
        <Box className={`${styles.flexBoxDisplay} ${styles.ideaListingcontainer}`}>
          <ul>
            {
              ideas.map(idea => {
                return <li><p className={`${styles.paragraphStyleSection3}`}>{idea}</p></li>
              })
            }
          </ul>
        </Box>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h3 className={`${styles.blueColor}`}>
            Warum FINANZCHECK.de?
          </h3>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          FINANZCHECK.de ist Ihre erste Adresse, wenn es um günstige, sichere und seriöse Kredite geht. Ein Kredit ist etwas sehr Persönliches. Daher stehen Sie und Ihre Bedürfnisse bei uns immer im Mittelpunkt. Es gibt viele gute Gründe, weshalb Sie uns als Experten für Ihren individuellen Finanzierungswunsch vertrauen können:
        </p>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil wir eine ausgezeichnete Beratung haben
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Effektiver Jahreszins, Tilgungsmodalitäten, Haushaltsrechnung – bei Ihrer Suche nach dem passenden Kredit können viele Fragen auftauchen. Wir vermitteln daher nicht nur günstige Kredite, sondern kümmern uns wirklich um Ihr Anliegen. Sie haben jederzeit die Möglichkeit, persönlich mit einem unserer 170 erfahrenen Kreditberater zu sprechen. Dabei finden Sie gemeinsam mit Ihrem persönlichen Berater die passende Lösung für Ihr Finanzierungsvorhaben.
        </p>
      </Box>
    </Box>
  )
}
