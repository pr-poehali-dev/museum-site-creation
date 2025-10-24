import Icon from '@/components/ui/icon';

const VisitorInfo = () => {
  return (
    <section id="visitor-info" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Посетителям
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Вся необходимая информация для вашего визита
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Clock" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">
              Часы работы
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Вт-Вс: 10:00 - 20:00</p>
              <p>Понедельник: выходной</p>
              <p className="text-sm">Касса закрывается за 30 минут</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Ticket" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">
              Билеты
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Взрослый: 500 ₽</p>
              <p>Льготный: 250 ₽</p>
              <p>Дети до 7 лет: бесплатно</p>
              <p className="text-sm">Каждое последнее воскресенье месяца - бесплатный вход</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="MapPin" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">
              Адрес
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>г. Москва, ул. Музейная, д. 1</p>
              <p>м. Парк Культуры</p>
              <p className="text-sm">5 минут пешком от метро</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Phone" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">
              Контакты
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>+7 (495) 123-45-67</p>
              <p>info@museum.ru</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Accessibility" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">
              Доступность
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Пандус для колясок</p>
              <p>Лифт на все этажи</p>
              <p>Аудиогиды</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Camera" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">
              Правила
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Фото без вспышки разрешено</p>
              <p>Верхняя одежда в гардероб</p>
              <p>Бесплатный Wi-Fi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorInfo;
