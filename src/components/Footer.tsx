import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>+7 (495) 123-45-67</p>
              <p>info@museum.ru</p>
            </div>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-4">Режим работы</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Вт-Вс: 10:00 - 19:00</p>
              <p>Чт: 12:00 - 21:00</p>
            </div>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-4">Разделы</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <button onClick={() => scrollToSection('exhibitions')} className="block hover:text-foreground transition-colors">
                Экспозиции
              </button>
              <button onClick={() => scrollToSection('visitor-info')} className="block hover:text-foreground transition-colors">
                Посетителям
              </button>
              <button onClick={() => scrollToSection('history')} className="block hover:text-foreground transition-colors">
                История
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Музей. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
