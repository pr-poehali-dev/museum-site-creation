import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Музей</h3>
            <p className="text-background/80 mb-4">
              Сохраняем и популяризируем культурное наследие для будущих поколений
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Контакты</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                <span>г. Москва, ул. Музейная, д. 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                <span>info@museum.ru</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Часы работы</h4>
            <div className="space-y-2 text-background/80">
              <p>Вторник - Воскресенье</p>
              <p className="text-xl font-bold text-background">10:00 - 20:00</p>
              <p>Понедельник - выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2025 Музей. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;