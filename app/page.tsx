import { Header } from '../components/Header/Header';
import { Container } from '@mantine/core';
import { Globe } from '../components/Globe/Globe';
import css from './css/styles.module.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <section className={css.heroSection}>
        <Container size="lg" className={css.heroContainer}>
          <h1>Fast, Secure Internet & Reliable Cloud Solutions</h1>
          <p>Empowering homes and businesses with high-speed connectivity, advanced Wi-Fi, and robust server infrastructure—engineered for performance and security.</p>
          <div className={css.heroButtons}>
            <a href="/services" className="btn btn-primary">Explore Services</a>
            <a href="/contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </Container>

        <div className={css.heroImage}>
          <Globe />
        </div>
      </section>
    </>
  );
}
