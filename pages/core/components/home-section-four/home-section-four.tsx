import styles from '../../../../styles/Home-section-four.module.css';
import ideaIc from '../../../../public/assets/idea-ic.png';
import zertifikatImage from '../../../../public/assets/Zertifikat.png'
import Box from '@material-ui/core/Box';
import goldIcon from '../../../../public/assets/ekomi_gold_siegel_finanzcheck_de.png';
import pageBuilderIcon from '../../../../public/assets/bewertet_pagebuilder_2020.png';
import trustPilotIcon from '../../../../public/assets/trustpilot_pagebuilder_2020.png';
import expertIcon from '../../../../public/assets/provenexpert_pagebuilder_2020.png';
import pageBuilder from '../../../../public/assets/ausgezeichnet_pagebuilder_2020.png';
import { Typography } from '@material-ui/core';

export default function HomeSectionFour() {
  const lists = ['Wunschkredit in den Vergleichsrechner eintragen.', 
                'Aus mehreren Angeboten auswählen.', 
                'Formular ausfüllen und persönliche Daten angeben.', 
                'Optional: Unsere kostenlose Kontoblick-Funktion nutzen, um von den Vorteilen eines Online-Kredits zu profitieren.',
                'Individuelle Angebote von den Banken erhalten und auswählen.',
                'Auf Wunsch: Persönliche Beratung am Telefon einholen.',
                'Kreditvertrag unterschreiben (auch via digitaler Unterschrift möglich) und abschicken.',
                'Optional: Den Kredit komplett digital abschließen. Somit kann von einer schnelleren Auszahlung profitiert werden.',
                'Sobald die Bank die manuelle Kreditprüfung abgeschlossen hat, wird der Kreditbetrag schnellstmöglich ausgezahlt.'
              ];
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
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Wie läuft der Kreditvergleich bei FINANZCHECK.de ab?
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Unser Vergleich ist für Sie jederzeit transparent und völlig kostenfrei. Und so geht es:
        </p>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <ol className={`${styles.ideasParaStyling}`}>
          {
            lists.map(item => {
              return <li>{item}</li>
            })
          }
        </ol>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Unser Tipp: Schließen Sie Ihren Kredit komplett digital ab
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Dank modernster Datenschnittstellen zu unseren Partnerbanken und geprüften Softwarelösungen, können Sie vollständig auf Papierkram verzichten und gleichzeitig von besonders günstigen Zinsen und einer schneller Auszahlung profitieren.
        </p>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Videoident
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Damit sichergestellt werden kann, dass es sich bei dem potenziellen Kreditnehmer tatsächlich um Sie handelt, müssen Sie sich bei der Bank identifizieren. Mit dem Videoident-Verfahren funktioniert dies einfach und unkompliziert. Dafür ist ein Gerät mit integrierter Kamera notwendig, beispielsweise Ihr Smartphone, Ihr Tablet oder Ihr Notebook. Im Videoident-Verfahren identifizieren Sie sich mit Ihrem Ausweisdokument bei einem unserer Partner, wie IDnow oder WebID. Dieser prüft ob alle Angaben korrekt und vollständig sind.
        </p>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Kontoblick
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Der Kontoblick ist für Sie: sicher und schnell. Die Bearbeitung Ihres Kreditantrags bei der Bank wird beschleunigt, da die erforderlichen Unterlagen für die Banken sofort abgerufen werden können. Für Sie entfällt der Aufwand, die Informationen und Nachweise umständlich zusammenzutragen und per Post einzusenden. Wenn Sie neben dem Kontoblick auf die elektronische Unterschrift setzen, ist außerdem ein rein digitaler Abschluss eines Kreditvertrags möglich.
        </p>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Digitale Unterschrift
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Ihr Kreditvertrag muss von Ihnen selbstverständlich unterschrieben werden. Damit Ihnen der Weg zur Post erspart bleibt und Ihr Kredit schneller ausgezahlt werden kann, bietet Ihnen FINANZCHECK.de die digitale Unterschrift an. Damit können Sie ganz einfach und schnell Ihre Signatur unter Ihren Kreditvertrag setzen und sparen somit Zeit und Nerven. Nicht umsonst werden digitale Unterschriften immer beliebter.
        </p>
      </Box>

      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Welche Kredite bietet FINANZCHECK.de an?
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Bei uns finden Sie alle gängigen Formen von Darlehen. Sie können sowohl Ratenkredite mit freiem Verwendungszweck aufnehmen als auch Ihre Auto- oder Urlaubsfinanzierung mit uns realisieren. Unsere Partnerbanken decken das komplette Spektrum ab.
        </p>
      </Box>

      <Box className={`row ${styles.sectionTwoGridStyling}`}>
        <Box className="col-md-6 col-sm-12">

          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
              <h4 className={`${styles.blueColor}`}>
                Ratenkredit
              </h4>
          </Box>
          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
            <p className={`${styles.ideasParaStyling}`}>
              Die klassische Option für die Kreditaufnahme ist der Ratenkredit. Hier tilgen Sie das Kreditvolumen plus Zinsen durch monatliche, zuvor festgelegte Raten. Deren Höhe bemisst sich an Faktoren wie der Kreditsumme, Laufzeit und Ihrer persönlichen Bonität.
            </p>
          </Box>

          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
              <h4 className={`${styles.blueColor}`}>
              Autokredit
              </h4>
          </Box>
          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
            <p className={`${styles.ideasParaStyling}`}>
              Der zweckgebundene Autokredit nimmt den finanzierten PKW als Sicherheit. Daher erhalten Sie in diesem Bereich oft besonders gute Angebote, die FINANZCHECK.de für Sie listet. Beim Autokredit handelt es sich um eine Form des Ratenkredits.
            </p>
          </Box>

          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
              <h4 className={`${styles.blueColor}`}>
                Umschuldung
              </h4>
          </Box>
          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
            <p className={`${styles.ideasParaStyling}`}>
              Durch die Umschuldung können Sie ein Darlehen mit schlechten Zinskonditionen, längeren Laufzeiten oder den Wegfall oder Ergänzung eines Kreditnehmers ablösen. Es ist möglich, einen oder mehrere Kredite umzuschulden. Wir beraten Sie gerne bei allen Fragen, z.B. auch zum Thema Vorfälligkeitsentschädigung oder Absicherungsmöglichkeiten.
            </p>
          </Box>

          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
              <h4 className={`${styles.blueColor}`}>
                Baufinanzierung
              </h4>
          </Box>
          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
            <p className={`${styles.ideasParaStyling}`}>
            Kredite rund um die Baufinanzierung sind zweckgebundene Kredite mit dem Grundstück oder der Immobilie als Sicherheit. Rabatte in der Baufinanzierung lassen sich erzielen, wenn Eigenkapital vorhanden ist und keine 100-Prozent-Finanzierung gewählt wird – passende Angebote bieten wir Ihnen gern in Zusammenarbeit mit unserem Partner ImmobilienScout24, dem führenden Immobilienportal im deutschsprachigen Raum.
            </p>
          </Box>
        </Box>
        <Box className="col-md-6 col-sm-12">

          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
              <h4 className={`${styles.blueColor}`}>
                Kredit für Selbstständige
              </h4>
          </Box>
          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
            <p className={`${styles.ideasParaStyling}`}>
              Selbstständige gelten häufig als Risikogruppe und haben es daher bei der Suche nach Darlehen besonders schwer, da z.B. bei Krankheit die direkten Einnahmen wegfallen. FINANZCHECK.de zeigt Ihnen im Kreditvergleich gerne geeignete Kredite, die Sie auf dem Weg in die Selbstständigkeit und darüber hinaus benötigen.
            </p>
          </Box>

          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
              <h4 className={`${styles.blueColor}`}>
              Privatkredit
              </h4>
          </Box>
          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
            <p className={`${styles.ideasParaStyling}`}>
              Mit dem Begriff "Privatkredit" kann sowohl ein Kredit an Privatpersonen gemeint sein als auch ein Darlehen, das nicht von Banken, sondern von privaten Geldgebern gewährt wird. Beim Kredit an Privatpersonen erfüllen Sie sich mit dem Privatkredit kleine und größere Träume, vielleicht einen Urlaub oder neue Möbel.
            </p>
          </Box>

          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
              <h4 className={`${styles.blueColor}`}>
                Renovierungskredit
              </h4>
          </Box>
          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
            <p className={`${styles.ideasParaStyling}`}>
              Beim Renovierungskredit können Sie Malerarbeiten, Arbeiten an der Fassade oder komplette Sanierungen von Immobilien finanzieren. FINANZCHECK.de zeigt Ihnen passende Kredite, welche sich für Ihre Renovierung, Modernisierung oder Sanierung besonders eignen.
            </p>
          </Box>

          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
              <h4 className={`${styles.blueColor}`}>
                Kleinkredit
              </h4>
          </Box>
          <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
            <p className={`${styles.ideasParaStyling}`}>
              Schon kleine Wünsche können zur Aufnahme eines Kleinkredits führen. Dabei handelt es sich um Darlehen, deren Summe 10.000 Euro nicht überschreitet. FINANZCHECK.de hilft dabei, den günstigsten Kleinkredit zu finden – oft ganz ohne zusätzlich erforderliche Sicherheiten.
            </p>
          </Box>

        </Box>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
          <h4 className={`${styles.blueColor}`}>
            Weitere Angebote
          </h4>
      </Box>
      <Box className={`${styles.flexBoxDisplay} ${styles.sectionTwoGridStyling}`}>
        <p className={`${styles.ideasParaStyling}`}>
          Sie möchten mehr Informationen und brauchen noch weitere Fakten über Kredite und Finanzierungen? Dann schauen Sie doch auch mal bei unseren beiden Marken OFINA und Kredite.com vorbei. Dort finden Sie nicht nur alles Wichtige zur Kreditaufnahme, zu Kreditarten und zu passenden Finanzierungsangeboten, sondern auch Ratgeber zu Themen wie Zahnersatzfinanzierung, Kosten von Steuerberatern und vieles mehr.
        </p>
      </Box>
      <Box className={`row ${styles.sectionTwoGridStyling}`}>
        <Box className="col-md-3 col-sm-12">
          <Typography className={`${styles.footerHeadings}`}>
            Unsere Vergleiche
          </Typography>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Kreditvergleich</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Kredit</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Autokredite</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Ratenkredite</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Umschuldungen</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Baufinanzierungen</a>
          </Box>
        </Box>
        <Box className="col-md-3 col-sm-12">
          <Typography className={`${styles.footerHeadings}`}>
            Unternehmen
          </Typography>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Über uns</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Jobs</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Presse</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">FAQ</a>
          </Box>
        </Box>
        <Box className="col-md-3 col-sm-12">
          <Typography className={`${styles.footerHeadings}`}>
            Kontakt
          </Typography>

          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Partnerprogramm</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">finanzcheckPRO - B2B Partnerlösung</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">AGB</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Datenschutz</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Cookie-Präferenzen</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Impressum</a>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.paragraphAnchor}`} target="_self" rel="noopener noreferrer">Kontakt</a>
          </Box>
        </Box>
        <Box className="col-md-3 col-sm-12">
          <Typography className={`${styles.footerHeadings}`}>
            Social und Hotline
          </Typography>
          <Box className={`${styles.marginTop}`}>
            <Typography className={`${styles.bolder}`}>
              Gemeinsam finden wir Ihren passenden Kredit! Kostenlose Hotline.
            </Typography>
          </Box>
          <Box className={`${styles.marginTop}`}>
            <a className={`${styles.phoneContainer}`}>
              <div className={styles.roundCallButtonContainer}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
              </div>
              0800 433 88 77 66
            </a>
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
