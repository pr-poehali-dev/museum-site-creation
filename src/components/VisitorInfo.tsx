import Icon from '@/components/ui/icon';

const VisitorInfo = () => {
  return (
    <section id="visitor-info" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">
          Посетителям
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8">
            <Icon name="Clock" size={32} className="text-accent mb-4" />
            <h3 className="text-xl font-serif font-bold mb-3">Режим работы</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Вт-Вс: 10:00 - 19:00</p>
              <p>Чт: 12:00 - 21:00</p>
              <p className="text-sm">Понедельник - выходной</p>
            </div>
          </div>

          <div className="bg-card p-8">
            <Icon name="Ticket" size={32} className="text-accent mb-4" />
            <h3 className="text-xl font-serif font-bold mb-3">Билеты</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Взрослый: 400₽</p>
              <p>Льготный: 200₽</p>
              <p className="text-sm">Школьники бесплатно</p>
            </div>
          </div>

          <div className="bg-card p-8">
            <Icon name="MapPin" size={32} className="text-accent mb-4" />
            <h3 className="text-xl font-serif font-bold mb-3">Как добраться</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>м. Площадь Революции</p>
              <p>Красная площадь, 1</p>
              <p className="text-sm">5 минут пешком от метро</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorInfo;
