import { Header } from '../components/Header/Header';
import { Container, Button  } from '@mantine/core';
import { Globe } from '../components/Globe/Globe';
import { IconAddressBook } from '@tabler/icons-react';

export default function HomePage() {
  return (
    <>
      <Header />
      <Container size="lg" className="heroContainer">
        <div className="heroContent">
          <h1>Fast, Secure Internet & Reliable Cloud Solutions</h1>
          <p>Empowering homes and businesses with high-speed connectivity, advanced Wi-Fi, and robust server infrastructure—engineered for performance and security.</p>
          <div className="heroButtons">
            <Button component="a" href="/services">About Us</Button>
            <Button component="a" href="/contact" variant="outline" rightSection={<IconAddressBook size={14} />} style={{ backdropFilter: 'blur(10px)' }}>Contact Us</Button>
          </div>
        </div>
      </Container>
      <div className="heroGlobe">
        <Globe />
      </div>
    </>
  );
}
