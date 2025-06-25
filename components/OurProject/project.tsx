import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Badge, Text } from '@mantine/core';

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
          />
        ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Fiber Optic Installation – Jakarta Office Tower",
    description: "A state-of-the-art fiber optic network installation in a high-rise office tower in Jakarta, enhancing connectivity and speed for tenants.",
    header: <img src="https://cdn.pixabay.com/photo/2017/08/23/16/05/iocenters-2673326_1280.jpg" alt="Fiber optic project" className="w-full h-40 object-cover rounded-xl" />,
    className: "md:col-span-1",
    icon: <Badge variant="light" color="#007BFF" radius="sm">2025</Badge>,
  },
  {
    title: "Campus WiFi & CCTV - Bandung University",
    description: "Comprehensive WiFi and CCTV installation across the Bandung University campus, ensuring robust connectivity and security for students and faculty.",
    header: <img src="https://cdn.pixabay.com/photo/2017/08/23/16/03/io-centers-2673317_1280.jpg" alt="University project" className="w-full h-40 object-cover rounded-xl" />,
    className: "md:col-span-1",
    icon: <Badge variant="light" color="#007BFF" radius="sm">2024</Badge>,
  },
  {
    title: "Hotel WiFi & CCTV - Bali",
    description: "A comprehensive WiFi and CCTV installation project at a luxury hotel in Bali, providing seamless connectivity and security for guests.",
    header: <img src="https://cdn.pixabay.com/photo/2017/08/14/23/17/office-tower-2642350_1280.jpg" alt="Hotel project" className="w-full h-40 object-cover rounded-xl" />,
    className: "md:col-span-1",
    icon: <Badge variant="light" color="#007BFF" radius="sm">2023</Badge>,
  },
];
