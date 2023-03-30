import { ReactNode, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { Button } from '@/components/atoms/Button';
import { Logo } from '@/components/atoms/Logo';
import { ChevronDown } from '@/components/SVGs/ChevronDown';
import { LogoutSvg } from '@/components/SVGs/LogoutSvg';
import Link from 'next/link';
import { ChevronUp } from '@/components/SVGs/ChevronUp';
import ReactTooltip from 'react-tooltip';

interface Props {
  children: ReactNode;
}

export function LayoutDashboard(props: Props) {


  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleLogout() {
    // implement logout logic here
  }

  const [tooltipText, setTooltipText] = useState('Default tooltip text');

  return (
    <div className={styles.page_bg}>
      <div className={styles.nav_bg}>
        <nav className={styles.wrapper}>
          <div className={styles.left_wrapper}>
              <Logo />
          </div>

          <div className={styles.right_wrapper}>
            <Image
              src="https://api.lorem.space/image/face?w=32&h=32&hash=8B7BCDC2"
              alt="Your image"
              width={32}
              height={32}
              className={styles.user_img}
            />
            <div>
              <span>Aulus</span>
              <Button design="ghost" onClick={toggleDropdown}>

                {!isOpen ? (
                <ChevronDown fill="#ACABB7"  width={8} height={8} />

                )
                 :
                 <ChevronUp fill="#ACABB7"   width={8} height={8} />

                }
                   {isOpen && (
                  <div className={styles.dropdownMenu}>
                      <LogoutSvg fill="#ACABB7" width={12} height={12} />
                     <Link href="/">
                     <span>Logout</span>
                     </Link>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </nav>
      </div>

      <div className={styles.main_row}>
        <div className={styles.left_column}>
          <Button design="ghost">
            <Image
              src="/svgs/wallet.svg"
              width={32}
              height={32}
              alt="Wallet icon"
            />
          </Button>
          <Button design="ghost">
            <Image
              src="/svgs/ether.svg"
              width={32}
              height={32}
              alt="Ether icon"
            />
          </Button>
          <Button design="ghost">
            <Image
              src="/svgs/bitcoin.svg"
              width={32}
              height={32}
              alt="Bitcoin icon"
            />
          </Button>
          <Button design="ghost">
            <Image
              src="/svgs/chart.svg"
              width={32}
              height={32}
              alt="Chart icon"
            />
          </Button>
        </div>
        <div className={styles.main_wrapper}>{props.children}</div>
      </div>

      <footer className={styles.footer}>
        <p>Copyright © 2022 - All rights reserved</p>
      </footer>
    </div>
  );
}

