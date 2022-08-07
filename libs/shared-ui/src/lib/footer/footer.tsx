import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <p id="love">Carefully crafted with NX</p>
    </div>
  );
}

export default Footer;
