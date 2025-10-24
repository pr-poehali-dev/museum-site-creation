const milestones = [
  {
    year: '1920',
    title: 'Основание музея',
    description: 'Музей был основан как культурный центр города',
  },
  {
    year: '1965',
    title: 'Расширение коллекции',
    description: 'Открытие новых залов античного искусства',
  },
  {
    year: '1990',
    title: 'Реконструкция здания',
    description: 'Полная реставрация исторического здания музея',
  },
  {
    year: '2010',
    title: 'Цифровизация',
    description: 'Запуск образовательных онлайн-программ',
  },
  {
    year: '2025',
    title: 'Современность',
    description: 'Один из крупнейших музеев с богатой коллекцией',
  },
];

const History = () => {
  return (
    <section id="history" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            История музея
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Более века хранения и популяризации культурного наследия
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                } w-full md:w-1/2`}
              >
                <div
                  className={`bg-card border border-border rounded-lg p-6 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="absolute top-6 md:top-8 left-0 md:left-auto md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"
                    style={{
                      [index % 2 === 0 ? 'right' : 'left']: '-2.25rem'
                    }}
                  ></div>
                  
                  <div className="text-3xl font-serif font-bold text-accent mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
