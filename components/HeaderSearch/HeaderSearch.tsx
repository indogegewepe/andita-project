'use client';

import { useState } from 'react';
import { IconSearch, IconMoon, IconSun, IconSettings } from '@tabler/icons-react';
import { 
  Burger, 
  Group, 
  Button, 
  useMantineColorScheme, 
  Box,
  Drawer,
  ScrollArea,
  Input, 
  CloseButton
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSearch.module.css';

export function HeaderMegaMenu() {
  return (
    <Box visibleFrom='sm'>
      <header className={classes.header}>
        <Group justify="center" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              About Us
            </a>
            <a href="#" className={classes.link}>
              Berita
            </a>
            <a href="#" className={classes.link}>
              Gallery
            </a>
            <a href="#" className={classes.link}>
              Services
            </a>
            <a href="#" className={classes.link}>
              Contact Us
            </a>
          </Group>
        </Group>
      </header>
    </Box>
  );
}

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  
  const modes = ['light', 'dark', 'auto'] as const;
  const currentIndex = modes.indexOf(colorScheme as typeof modes[number]);
  const nextMode = modes[(currentIndex + 1) % modes.length];

  const icon =
  colorScheme === 'light' ? (
    <>
      <IconSun size={16} style={{ marginRight: 8 }} /> Light
    </>
  ) : colorScheme === 'dark' ? (
    <>
      <IconMoon size={16} style={{ marginRight: 8 }} /> Dark
    </>
  ) : (
    <>
      <IconSettings size={16} style={{ marginRight: 8 }} /> Auto
    </>
  );

  return (
    <Button
      variant="default"
      onClick={() => setColorScheme(nextMode)}
    >
      {icon} 
    </Button>
  );
}

export function HeaderSearch() {
  const [value, setValue] = useState('');
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <img src='./assets/img/logo-andita.png' alt="Andita logo" height={50} />
        <Group>
          <ColorSchemeToggle />
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          <Input
            placeholder="Search"
            value={value}
            leftSection={<IconSearch size={16} stroke={1.5} />}
            onChange={(event) => setValue(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => setValue('')}
                style={{ display: value ? undefined : 'none' }}
              />
            }
            visibleFrom='sm'
          />
          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Menu"
            hiddenFrom="sm"
            zIndex={1000000}
          >
            <ScrollArea h="calc(100vh - 80px" mx="-md">
              <Input
                placeholder="Search"
                value={value}
                leftSection={<IconSearch size={16} stroke={1.5} />}
                onChange={(event) => setValue(event.currentTarget.value)}
                rightSectionPointerEvents="all"
                rightSection={
                  <CloseButton
                    aria-label="Clear input"
                    onClick={() => setValue('')}
                    style={{ display: value ? undefined : 'none' }}
                  />
                }
                m={10}
              />
              <a href="#" className={classes.link}>
                About Us
              </a>
              <a href="#" className={classes.link}>
                Berita
              </a>
              <a href="#" className={classes.link}>
                Gallery
              </a>
              <a href="#" className={classes.link}>
                Services
              </a>
              <a href="#" className={classes.link}>
                Contact Us
              </a>
            </ScrollArea>
          </Drawer>
        </Group>
      </div>
    </header>
  );
}
