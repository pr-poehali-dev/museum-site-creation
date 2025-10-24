import Icon from '@/components/ui/icon';

const exhibitions = [
  {
    title: 'Античное искусство',
    description: 'Коллекция древнегреческих и римских артефактов',
    image: 'https://cdn.poehali.dev/projects/0f09ea8d-3871-4127-9a55-5378888964c9/files/75c2eb69-f7ce-4304-83c4-2c0bd398a4f7.jpg',
    icon: 'Palette',
  },
  {
    title: 'Современное искусство',
    description: 'Работы художников XX-XXI веков',
    image: 'https://cdn.poehali.dev/projects/0f09ea8d-3871-4127-9a55-5378888964c9/files/6338245b-494a-4f85-b65b-294613883d43.jpg',
    icon: 'Sparkles',
  },
  {
    title: 'Историческая экспозиция',
    description: 'Предметы быта и культуры разных эпох',
    image: 'https://cdn.poehali.dev/projects/0f09ea8d-3871-4127-9a55-5378888964c9/files/75c2eb69-f7ce-4304-83c4-2c0bd398a4f7.jpg',
    icon: 'Clock',
  },
];

const Exhibitions = () => {
  return (
    <section id="exhibitions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Экспозиции
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Познакомьтесь с нашими постоянными и временными выставками
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={exhibition.icon as any} size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">
                    {exhibition.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {exhibition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
