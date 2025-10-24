import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-serif font-bold text-foreground">
            Музей
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('exhibitions')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Экспозиции
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Образование
            </button>
            <button
              onClick={() => scrollToSection('visitor-info')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Посетителям
            </button>
            <button
              onClick={() => scrollToSection('history')}
              className="text-foreground hover:text-accent transition-colors"
            >
              История
            </button>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('exhibitions')}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Экспозиции
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Образование
              </button>
              <button
                onClick={() => scrollToSection('visitor-info')}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Посетителям
              </button>
              <button
                onClick={() => scrollToSection('history')}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                История
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
