import { Header } from '../components/Header/Header';
import { Container, Button, Grid } from '@mantine/core';
import { Globe } from '../components/Globe/Globe';
import { IconAddressBook } from '@tabler/icons-react';

export default function HomePage() {
  return (
    <>
      <nav className="header">
        <Header />
      </nav>
      <Container size="lg" className="heroContainer">
        <div className="heroContent">
          <h1>Fast, Secure Internet & Reliable Cloud Solutions</h1>
          <p>Empowering homes and businesses with high-speed connectivity, advanced Wi-Fi, and robust server infrastructure—engineered for performance and security.</p>
          <div className="heroButtons">
            <Button component="a" href="/services" variant="filled" color="#007BFF">About Us</Button>
            <Button component="a" href="/contact" variant="outline" color="#007BFF" rightSection={<IconAddressBook size={14} />} style={{ backdropFilter: 'blur(5px)' }}>Contact Us</Button>
          </div>
        </div>
      </Container>
      <div className="heroGlobe">
        <Globe />
      </div>
      <Container size="lg" className="heroContainerSec">
        <div className="heroContentSec">
          <h1>Our Services</h1>
          <div>
            <Grid>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  );
}
