'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from '../components/Loader/loader';

const HomePage = dynamic(() => import('./HomePage'), {
  ssr: false,
});

export default function HomePageWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return loading ? <Loader /> : <HomePage />;
}
