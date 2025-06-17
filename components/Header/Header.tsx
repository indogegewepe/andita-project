"use client";

import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ActionToggle } from '@/components/ToggleTheme/ActionToggle';
import LogoAndita from '@/public/assets/img/logo-andita.png';
import Image from 'next/image';
import classes from './Header.module.css';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/services', label: 'Services' },
  { link: '/projects', label: 'Projects' },
  { link: '/news', label: 'News' },
  { link: '/partners', label: 'Partners' },
  { link: '/about', label: 'About' },
  { link: '/faq', label: 'FAQ' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        toggle();
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
          <ActionToggle />
          {items}
        </Group>

        <Group hiddenFrom="sm" gap={5}>
          <ActionToggle />
          <Burger opened={opened} onClick={toggle} className={classes.burger} />
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
