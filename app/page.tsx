import { Header } from '../components/Header/Header';
import { Container, Button, Title } from '@mantine/core';
import { Globe } from '../components/Globe/Globe';
import { IconAddressBook } from '@tabler/icons-react';
import { GridServices } from '../components/GridServices/grid-services';
import { Project } from '../components/OurProject/project';

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
      <Container fluid bg="#171717" className='rounded-md'>
        <Container size="lg" className="heroContainerSec, p-4">
          <div className="heroContentSec">
            <Title>Our Services</Title>
            <div className="pb-6">
              <GridServices />
            </div>
          </div>
        </Container>
      </Container>

      <Container size="lg" className="heroContainerThird p-6">
        <div className="heroContentThird">
          <Title>Our Projects</Title>
          <div>
            <Project />
          </div>
        </div>
      </Container>
    </>
  );
}
