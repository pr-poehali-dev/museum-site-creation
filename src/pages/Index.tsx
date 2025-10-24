import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Exhibitions from '@/components/Exhibitions';
import EducationalPrograms from '@/components/EducationalPrograms';
import VisitorInfo from '@/components/VisitorInfo';
import History from '@/components/History';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Exhibitions />
      <EducationalPrograms />
      <VisitorInfo />
      <History />
      <Footer />
    </div>
  );
};

export default Index;
