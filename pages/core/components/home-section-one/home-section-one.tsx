import { FormControl, TextField, Select, InputLabel, MenuItem, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from '../../../../styles/Home-section-one.module.css';
import bgImage from '../../../../public/assets/bg-image.webp';

export default function HomeSectionOne() {
  const laufZeits = [1,2,3,4,5,6,7,8,9,10];
  const verwendungszwecks = ['Umschuldung', 'Gebrauchtfahrzeug', 'Neufahrzeug', 'Einrichtung/Möbel', 'Renovierung', 'Urlaub', 'PC/TV/Hifi/Video', 'Ausgleich Girokonto', 'Umzug', 'Immobilienfinanzierung', 'Freie Verwendung'];
  return (
    <div className={styles.mainFirstSectionContainer}>
          <img className={styles.bgImageStyling} src={bgImage.src}/>
          <div className={`row ${styles.mainGridStyling}`}>
            <div className="col-md-6 col-sm-12">
              <div className={styles.mainInfoContainer}>
                <p className={styles.mainContentInfoStyle}>
                  Die Kreditexperten
                </p>
                <p className={`${styles.mainContentInfoStyle} ${styles.mainContentInfoStyleContent}`}>
                  Online vergleichen, persönlich beraten
                </p>

                <div className={styles.mainFormContainer}>
                    <FormControl className={`${styles.mainFormInputFields} ${styles.mainFormInputFieldsContainer}`} >
                      <TextField className={styles.mainFormInputFields} id="standard-basic" label="Wunschbetrag" />
                    </FormControl>
                    
                    <FormControl className={`${styles.mainFormInputFields} ${styles.mainFormInputFieldsContainer}`}>
                      <InputLabel id="demo-simple-select-label">Laufzeit</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        {
                          laufZeits.map(laufzeit => <MenuItem value={laufzeit}>{laufzeit}&nbsp; Jahre</MenuItem>)
                        }
                      </Select>
                    </FormControl>

                    <FormControl className={`${styles.mainFormInputFields} ${styles.mainFormInputFieldsContainer}`}>
                      <InputLabel id="demo-simple-select-label">Verwendungszweck</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        {
                          verwendungszwecks.map(verwendungszweck => <MenuItem value={verwendungszweck}>{verwendungszweck}</MenuItem>)
                        }
                      </Select>
                    </FormControl>
                    <div className={`${styles.mainFormInputFieldsContainer} ${styles.formWarningContainer}`}>
                        <div className={styles.formWarningHeading}>
                          Günstigster Kredit aus über 60 Angeboten ab:
                        </div>
                        <div className={`${styles.formWarningHeading} ${styles.formWarningContent}`}>
                          Günstigster Kredit aus über 60 Angeboten ab:
                        </div>
                    </div>
                    <Button className={`${styles.mainFormInputFields} ${styles.mainFormInputFieldsContainer} ${styles.mainFormSubmitBtnStyling}`}>
                      <div style={{display: 'flex'}}>
                        <span>
                          Kreditvergleich starten
                        </span>
                        <ArrowForwardIcon className={styles.arrowSubmitBtn}/>
                      </div>
                      <div className={styles.btnContent}>
                        (Kostenlos und unverbindlich)
                      </div>
                    </Button>
                    {/* <TextField className={styles.mainFormInputFields} id="standard-basic" label="Wunschbetrag" />
                    <TextField className={styles.mainFormInputFields} id="standard-basic" label="Wunschbetrag" /> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={styles.homeCircleContainer}>
                <div className={styles.homeCircle}>
                    <div>
                      Schon ab
                    </div>
                    <h1>
                      -0,4%
                    </h1>
                    <div>
                      effektiver
                    </div>
                    <div>
                      Jahreszins¹
                    </div>
                </div>
                <div className={styles.listContainer}>
                  <div className={styles.flexBox}>
                    <CheckCircleIcon className={styles.checkIcon}/> &nbsp; &nbsp; <span>100% kostenlos</span>
                  </div>
                  <div className={styles.flexBox}>
                    <CheckCircleIcon className={styles.checkIcon}/> &nbsp; &nbsp; <span>Unverbindliche Kreditanfrage</span>
                  </div>
                  <div className={styles.flexBox}>
                    <CheckCircleIcon className={styles.checkIcon}/> &nbsp; &nbsp; <span>99,3% positive Bewertungen</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/* <Image  src={bgImage} objectFit="cover"/> */}
        </div>
  )
}
