import React from 'react';
import { Badge, Text } from '@mantine/core';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

export function Project() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={<Text truncate="end">{item.title}</Text>}
          description={<Text truncate="end">{item.description}</Text>}
          header={item.header}
          className={item.className}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: 'Fiber Optic Installation – Jakarta Office Tower',
    description:
      'A state-of-the-art fiber optic network installation in a high-rise office tower in Jakarta, enhancing connectivity and speed for tenants.',
    header: (
      <img
        src="/assets/img/splasing jaringan.jpg"
        alt="Fiber optic project"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    className: 'md:col-span-1',
    icon: (
      <Badge variant="light" color="#ff9800" radius="sm">
        02/07/2025
      </Badge>
    ),
    href: '#',
  },
  {
    title: 'Campus WiFi & CCTV - Bandung University',
    description:
      'Comprehensive WiFi and CCTV installation across the Bandung University campus, ensuring robust connectivity and security for students and faculty.',
    header: (
      <img
        src="/assets/img/splacing jaringan fo.jpg"
        alt="University project"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    className: 'md:col-span-1',
    icon: (
      <Badge variant="light" color="#ff9800" radius="sm">
        04/07/2024
      </Badge>
    ),
    href: '#',
  },
  {
    title: 'Hotel WiFi & CCTV - Bali',
    description:
      'A comprehensive WiFi and CCTV installation project at a luxury hotel in Bali, providing seamless connectivity and security for guests.',
    header: (
      <img
        src="/assets/img/pembuatan jalur tanam fo.jpg"
        alt="Hotel project"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    className: 'md:col-span-1',
    icon: (
      <Badge variant="light" color="#ff9800" radius="sm">
        01/01/2023
      </Badge>
    ),
    href: '#',
  },
];
