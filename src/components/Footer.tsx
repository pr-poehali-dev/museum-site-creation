import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Музей</h3>
            <p className="text-muted-foreground">
              Сохраняя прошлое, создаем будущее
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@museum.ru</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Icon name="Facebook" size={20} className="text-accent" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Icon name="Instagram" size={20} className="text-accent" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Icon name="Youtube" size={20} className="text-accent" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2025 Музей. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
