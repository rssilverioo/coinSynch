import styles from './styles.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


export function CarouselHeroElement() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const components = document.querySelectorAll('#container');
    const container: HTMLElement = document.querySelector('#container')!;

    gsap.to(components, {
      x: -230,
      duration: 2,
      ease: 'none',
      opacity: 0,
      scrollTrigger: {
        start: 'top',
        end: 'center 20%',
        scrub: true,
      }
    });
  }, []) >
    useEffect(() => {
      const components = document.querySelectorAll('#container-right');
      const container: HTMLElement =
        document.querySelector('#container-right')!;

      gsap.to(components, {
        x: -800,
        duration: 2,
        ease: 'none',
        opacity: 2,
        scrollTrigger: {
          start: 'top',
          end: 'center 20%',
          scrub: true,
        }
      });
    }, []);
  return (
  <>
    <div id="container" className={styles.container}>
            <Image
              src="/images/woman_tablet.png"
              alt="Woman looking at tablet"
              width={464 + 32}
              height={499}
              className="scroll"
            />
          </div>
          <div id="container-right" className={styles.containerRight}>
            <Image
              src="/images/man_cellphone.png"
              alt="Woman looking at tablet"
              width={464 + 32}
              height={499}
              className="scroll"
            />
          </div>
  </>
  )
}
