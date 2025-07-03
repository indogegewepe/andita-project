'use client';

import { IconBrandWhatsappFilled } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';

function WhatsappText() {
  return <ContainerTextFlip words={['Contact Us', 'Subscribe for more', 'Welcome!', 'WhatsApp']} />;
}

export function WhatsappButton() {
  return (
    <Button
      component="a"
      target="_blank"
      href="http://wa.me/+6289526975000"
      variant="light"
      color="green"
      radius="xl"
      size="xl"
      className="Whatsapp"
      rightSection={<IconBrandWhatsappFilled />}
    >
      <WhatsappText />
    </Button>
  );
}
