const exhibitions = [
  {
    title: 'Античное искусство',
    period: 'V-I вв. до н.э.',
    description: 'Коллекция древнегреческих и римских артефактов',
    image: 'https://cdn.poehali.dev/projects/0f09ea8d-3871-4127-9a55-5378888964c9/files/a6c849b7-651c-462b-ad51-8a8cc608143f.jpg',
  },
  {
    title: 'Современное искусство',
    period: 'XX-XXI век',
    description: 'Работы выдающихся художников современности',
    image: 'https://cdn.poehali.dev/projects/0f09ea8d-3871-4127-9a55-5378888964c9/files/d49926a1-6f7b-4077-903f-5a6931ef869e.jpg',
  },
  {
    title: 'Историческая коллекция',
    period: 'XVI-XIX век',
    description: 'Предметы быта и культуры различных эпох',
    image: 'https://cdn.poehali.dev/projects/0f09ea8d-3871-4127-9a55-5378888964c9/files/d49926a1-6f7b-4077-903f-5a6931ef869e.jpg',
  },
];

const Exhibitions = () => {
  return (
    <section id="exhibitions" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Экспозиции
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Наши коллекции представляют богатство культурного наследия разных эпох
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="group bg-card overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-accent mb-2">
                  {exhibition.period}
                </p>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {exhibition.title}
                </h3>
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