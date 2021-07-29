import styles from '../../../../styles/Home-section-four.module.css';
import ideaIc from '../../../../public/assets/idea-ic.png';
import zertifikatImage from '../../../../public/assets/Zertifikat.png'
import Box from '@material-ui/core/Box';
import goldIcon from '../../../../public/assets/ekomi_gold_siegel_finanzcheck_de.png';
import pageBuilderIcon from '../../../../public/assets/bewertet_pagebuilder_2020.png';
import trustPilotIcon from '../../../../public/assets/trustpilot_pagebuilder_2020.png';
import expertIcon from '../../../../public/assets/provenexpert_pagebuilder_2020.png';
import pageBuilder from '../../../../public/assets/ausgezeichnet_pagebuilder_2020.png';

export default function HomeSectionFour() {
  const ideas = ['Wir bieten Ihnen einen unabhängigen und kostenlosen Vergleich von Kreditangeboten', 
                 'Wir holen für Sie individuelle Kreditangebote ein. Unsere Kreditanfragen sind SCHUFA-neutral, also ohne negative Auswirkung auf Ihren SCHUFA-Score', 
                 'Zusätzlich bieten wir Ihnen weitere Dienstleistungen rund um Ihren Kreditwunsch, z. B. unsere individuelle telefonische Beratung und technische Unterstützung, um die Bearbeitung Ihrer Kreditanfrage durch die Bank zu beschleunigen', 
                 'Mit FINANZCHECK.de gelangen Sie sicher und mühelos an Ihr Wunschdarlehen'];
  return (
    <Box>

      <Box className={`row ${styles.sectionTwoGridStyling}`}>
        <Box className="col-md-6 col-sm-12">
          <Box >
            <p className={`${styles.imgFollowByParaContainer}`}>
              <img className={`${styles.imagePara}`} src={goldIcon.src}/>              
              <span>eKomi ist ein unabhängiges Bewertungssystem, welches Kunden ermöglicht, FINANZCHECK.de zu bewerten und auch Kommentare zu hinterlassen. Unsere eKomi-Bewertungen beweisen: Über 15.000 Kunden bewerten unseren Service positiv. Unsere effiziente und kompetente Kreditabwicklung bringt Sie schnell auf den Weg zu Ihrem Wunschkredit.</span>
            </p>
          </Box>
          <Box >
            <p className={`${styles.imgFollowByParaContainer}`}>
              <img className={`${styles.imagePara}`} src={pageBuilderIcon.src}/>              
              <span>Wenn es um Vertrauen geht, sind unsere Kunden bei uns in den besten Händen. Das zeigen nicht nur die positiven Bewertungen auf Bewertet.de, sondern auch die Weiterempfehlungen unserer zufriedenen Kunden. Mit Bewertet.de haben gerade Neukunden den Vorteil, Erfahrungsberichte und Bewertungen über FINANZCHECK.de zu lesen und auch selbst Beurteilungen zu verfassen. Dies ist nicht nur für Sie als Kunde optimal. Auch wir als Dienstleister können somit auf Feedback eingehen und unseren Service für Sie noch weiter verbessern.</span>
            </p>
          </Box>
        </Box>
        <Box className="col-md-6 col-sm-12">
          <Box >
            <p className={`${styles.imgFollowByParaContainer}`}>
              <img className={`${styles.imagePara}`} src={trustPilotIcon.src}/>              
              <span>Die Community von Trustpilot sieht uns als kompetenten und vertrauenswürdigen Dienstleister an. Das fördert nicht nur unsere Beziehung zu unseren Kunden, sondern bietet diesen auch völlige Transparenz unseres Angebotes. Mit der Bewertungscommunity Trustpilot haben Sie als Kunde die Gelegenheit, FINANZCHECK.de besser kennenzulernen und von authentischem Feedback zu profitieren.</span>
            </p>
          </Box>
          <Box >
            <p className={`${styles.imgFollowByParaContainer}`}>
              <img className={`${styles.imagePara}`} src={expertIcon.src}/>              
              <span>Auch die von Kunden abgegebenen Bewertungen und Kommentare auf ProvenExpert sprechen für sich: Sowohl unsere Beratung als auch die Kreditabwicklung werden durchweg positiv von unseren Kunden bewertet. Dadurch können Sie sich sicher sein, dass Sie mit uns schnell und mühelos zu Ihrem Wunschkredit gelangen.</span>
            </p>
          </Box>
          <Box >
            <p className={`${styles.imgFollowByParaContainer}`}>
              <img className={`${styles.imagePara}`} src={pageBuilder.src}/>              
              <span>Mit Ausgezeichnet.org haben Sie als Kunde die Möglichkeit, sich selbst ein Bild von uns zu machen. Wie zufrieden waren Kunden mit unserer Beratung, unserem Service und dem Angebot an Krediten. Diese und andere Fragen werden auf ausgezeichnet.org beantwortet.</span>
            </p>
          </Box>
        </Box>
      </Box>
      {/* <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
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
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil Ihre Daten bei uns sicher sind
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling} ${styles.widthSpecification}`}>
        <Box>
            <img className={styles.zertifikatImageStyling} src={zertifikatImage.src}/>
        </Box>
        <p className={`${styles.ideasParaStyling}`}>
          Wir legen größten Wert auf den Schutz Ihrer Daten. Wir wissen Ihr Vertrauen zu schätzen. Daher ist uns der gewissenhafte Umgang mit Ihren sensiblen Daten auch enorm wichtig. Unsere hohen Standards im Bereich der Datensicherheit haben wir daher auch dieses Jahr wieder für Sie vom <a className={`${styles.paragraphAnchor}`} href="https://www.tuev-saar.de/zertifikat/tk43790/"><u>TÜV Saarland</u></a> prüfen lassen.
        </p>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil Sie bei uns sparen können
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          FINANZCHECK.de kooperiert mit über 20 Partnerbanken in ganz Deutschland. Ihr Vorteil: Wir vergleichen die Angebote der Banken miteinander, suchen Ihnen das passende Angebot und finden so Ihren Wunschkredit.
        </p>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil Sie mit uns schnell und effizient zum Kredit kommen
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Wir holen für Sie mithilfe unserer Datenschnittstellen individuelle Kreditangebote in Echtzeit, d.h. binnen weniger Minuten ein. Der Abschluss des Kreditvertrages bei der Bank kann ebenfalls softwaregestützt erfolgen, so dass Sie binnen kürzester Zeit über Ihr Geld verfügen können. Auch die Abwicklung des Kreditvertrags und die Auszahlung des Geldes erfolgen schnell, in vielen Fällen schon innerhalb einer Woche. Schließen Sie Ihren Kredit komplett digital ab, erhalten Sie Ihr Geld sogar noch schneller. Wir bieten im Zuge unseres Kreditvergleichs sichere und schnelle Legitimationsverfahren an, die Ihren Kreditantrag beschleunigen. Wählen Sie ganz entspannt zwischen Videoident, das Sie bequem von Zuhause aus nutzen können, oder dem klassischen Postident-Verfahren.
        </p>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weil unsere Auszeichnungen für uns sprechen
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          99,3 Prozent der Kreditnehmer sind mit unseren Leistungen absolut zufrieden. Damit haben wir als Onlinevergleichsportal eine überdurchschnittlich hohe Kundenzufriedenheit. Damit dies auch so bleibt und wir in Zukunft noch besser werden, arbeiten wir jeden Tag daran, unseren Service für Sie weiter zu verbessern.
        </p>
      </Box> */}
    </Box>
  )
}
