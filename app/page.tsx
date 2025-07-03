'use client';

import { IconAddressBook } from '@tabler/icons-react';
import { Button, Container, Title } from '@mantine/core';
import { ContactUs } from '@/components/Contact/ContactUs';
import { Faq } from '@/components/FAQ/faq';
import { Footer } from '@/components/Footer/Footer';
import { Partners } from '@/components/Partners/Partners';
import { WhatsappButton } from '@/components/Whatsapp/whatsapp';
import { Globe } from '../components/Globe/Globe';
import { GridServices } from '../components/GridServices/grid-services';
import { Header } from '../components/Header/Header';
import { Project } from '../components/OurProject/project';

export default function HomePage() {
  return (
    <>
      <nav className="header">
        <Header />
      </nav>
      <Container size="lg" className="heroContainer" id="home">
        <div className="heroContent">
          <h1>Fast, Secure Internet & Reliable Cloud Solutions</h1>
          <p>
            Empowering homes and businesses with high-speed connectivity, advanced Wi-Fi, and robust
            server infrastructure—engineered for performance and security.
          </p>
          <div className="heroButtons">
            <Button component="a" href="/services" variant="filled" color="#007BFF">
              About Us
            </Button>
            <Button
              component="a"
              href="#contact"
              variant="outline"
              color="#007BFF"
              rightSection={<IconAddressBook size={14} />}
              style={{ backdropFilter: 'blur(5px)' }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
      <div className="heroGlobe">
        <Globe />
      </div>

      <Container fluid bg="#171717" className="rounded-md">
        <Container size="lg" className="heroContainerSec">
          <div id="services" className="heroContentSec py-24 scroll-mt-6">
            <Title className="text-center">Our Services</Title>
            <GridServices />
          </div>
        </Container>
      </Container>

      <Container size="lg" className="heroContainerThird pb-16 scroll-mt-12" id="projects">
        <div className="heroContentThird">
          <Title className="text-center">Latest Projects</Title>
          <div>
            <Project />
          </div>
        </div>
      </Container>

      <Container
        fluid
        className="HeroPartners pb-6 rounded-md scroll-mt-12"
        style={{ backgroundColor: '#171717' }}
        id="partners"
      >
        <div className="heroContentPartners">
          <Title className="text-center text-white p-6">Our Partners</Title>
          <Partners />
        </div>
      </Container>

      <Container size="lg" className="heroContainerFourth">
        <div className="faqContent scroll-mt-24" id="faq">
          <Title className="text-center">Frequently Asked Questions</Title>
          <Faq />
        </div>
      </Container>

      <Container fluid className="heroContact pb-6 rounded-md scroll-mt-12" id="contact">
        <ContactUs />
      </Container>

      <Footer />
      <WhatsappButton />
    </>
  );
}
