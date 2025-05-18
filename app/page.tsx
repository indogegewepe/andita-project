import { HeaderSearch, HeaderMegaMenu } from '@/components/HeaderSearch/HeaderSearch';
import { HeroImageRight } from '@/components/HeroImageRight/HeroImageRight';

export default function HomePage() {
  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <HeaderSearch />
        <HeaderMegaMenu />
      </nav>
      <HeroImageRight />
    </>
  );
}
