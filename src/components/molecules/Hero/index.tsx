

import { Button } from '../../atoms/Button';
import { UnionArrow } from '../../SVGs/UnionArrow';
import styles from './styles.module.scss';

import { CarrouselHeroElement } from '@/components/atoms/CarrouselHeroElement';

interface Props {
	onSignUpClick: () => void;
}

export function CarrouselHero(props: Props) {


  return (
    <section id="news-letters" className={styles.background}>
      <div className={styles.section_container}>
        <div>
          <div className={styles.content}>
            <header>
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </h5>
            </header>
            <Button
							design="primary"
							className={styles.custom_button}
							onClick={props.onSignUpClick}
						>
              SIGN UP NOW
              <UnionArrow fill="#fff" width={12} height={12} />
            </Button>
            <div className={styles.chips}>
            <span>Cryptos</span>
            <span>NFTs</span>
            <span>Games</span>
          </div>
          </div>


        </div>

        <div>
          <CarrouselHeroElement/>
        </div>
      </div>
    </section>
  );
}
