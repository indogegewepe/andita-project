'use client';

import { IconSearch, IconMoon, IconSun, IconSettings } from '@tabler/icons-react';
import { 
  Autocomplete, 
  Burger, 
  Group, 
  Button, 
  useMantineColorScheme, 
  Box,
  Drawer,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSearch.module.css';
import { MantineLogo } from '@mantinex/mantine-logo';

const mockdata = [
  {
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              Features
            </a>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Features
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>
        </ScrollArea>
      </Drawer>
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
  const [drawerOpened, { toggle: toggleDrawer}] = useDisclosure(false);
  
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" hiddenFrom="sm" />
          <MantineLogo size={28} />
        </Group>

        <Group>
          <ColorSchemeToggle />
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}