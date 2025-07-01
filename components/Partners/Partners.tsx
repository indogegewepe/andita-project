import React from 'react';
import { Container } from '@mantine/core';

export function Partners(){
    return (
        <Container size="lg">
            <div className="flex flex-col items-center justify-center p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
                <img src="/assets/img/krapyak-removebg-preview.png" alt="Pesantren Krapyak" className="w-full h-42 object-contain grayscale hover:grayscale-0" />
                <img src="/assets/img/smait.png" alt="SMAIT" className="w-full h-42 object-contain grayscale hover:grayscale-0" />
                <img src="/assets/img/ugm1.png" alt="UGM" className="w-full h-42 object-contain grayscale hover:grayscale-0" />
            </div>
        </div>
        </Container>
    );
}