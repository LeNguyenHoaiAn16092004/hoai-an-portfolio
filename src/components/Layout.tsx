import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Navigation />
         <main>{children}</main>
         <Footer />
      </>
   );
}
