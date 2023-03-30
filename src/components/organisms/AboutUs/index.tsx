import { CardAboutUs } from "@/components/atoms/CardAboutUs";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Button } from '../../atoms/Button';
import styles from './styles.module.scss';



export function AboutUs() {
  const { width, height } = useWindowSize();

	const isDesktop = (width || 0) > 768;
	const isTablet = (width || 0) > 425;
  const isMobile = (width || 0) < 426;

  return (
    <section id="about-us" className={styles.background}>
      <div className={styles.section_content}>
        <div className={styles.cards_wrapper}>
          {isTablet ? (
                <>
                <div className="left-card">
              <CardAboutUs
                img="/svgs/bitcoin.svg"
                subtitle="For your company"
                title="Crypto Solutions"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," />
              <CardAboutUs
                img="/svgs/ether.svg"
                subtitle="For your company"
                title="Crypto Solutions"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," />
            </div><div>
                <CardAboutUs
                  img="/svgs/chart.svg"
                  subtitle="For your company"
                  title="Crypto Solutions"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," />
                <CardAboutUs
                  img="/svgs/laptop.svg"
                  subtitle="For your company"
                  title="Crypto Solutions"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," />
              </div></>
          )  : undefined}
        {isMobile ? (
          <>
            <div>
            <CardAboutUs
                img="/svgs/bitcoin.svg"
                subtitle="For your company"
                title="Crypto Solutions"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," />
              <CardAboutUs
                img="/svgs/ether.svg"
                subtitle="For your company"
                title="Crypto Solutions"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," />
                  <CardAboutUs
                  img="/svgs/chart.svg"
                  subtitle="For your company"
                  title="Crypto Solutions"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," />
                <CardAboutUs
                  img="/svgs/laptop.svg"
                  subtitle="For your company"
                  title="Crypto Solutions"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," />
            </div>
          </>

        ) : undefined}
        </div>
        <article className={styles.main_content}>
          <header>
            <h5>Lorem ipsum</h5>
            <h2>Lorem ipsum</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>

          {isDesktop ? (
              <Button  design="custom">
                    Sign up now
              </Button>
					) : undefined}
        </article>
      </div>
    </section>
  );
}

