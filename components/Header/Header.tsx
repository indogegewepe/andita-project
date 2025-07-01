"use client";

import { useState, useEffect } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ActionToggle } from '@/components/ToggleTheme/ActionToggle';
import LogoAndita from '@/public/assets/img/logo-andita.png';
import Image from 'next/image';
import classes from './Header.module.css';

const links = [
  { link: '#home', label: 'Home' },
  { link: '#services', label: 'Services' },
  { link: '#projects', label: 'Projects' },
  { link: '#partners', label: 'Partners' },
  { link: '#faq', label: 'FAQ' },
  { link: '#contact', label: 'Contact Us'}
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      {
        rootMargin: '0px 0px -50% 0px', // Trigger when halfway in viewport
        threshold: 0.5,
      }
    );

    // Observe all sections with ids matching the links
    links.forEach((link) => {
      const section = document.querySelector(link.link);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        toggle(); // if you're closing a mobile menu

        const target = document.querySelector(link.link);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Image src={LogoAndita} alt="Andita Logo" height={46} />
        <Group gap={5} visibleFrom="sm">
          {items}
          <ActionToggle />
        </Group>

        <Group hiddenFrom="sm" gap={5}>
          <Burger opened={opened} onClick={toggle} className={classes.burger} />
          <ActionToggle />
        </Group>
      </Container>

      {opened && (
        <div className={classes.dropdown}>
          {items}
        </div>
      )}
    </header>
  );
}
