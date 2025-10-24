import Icon from '@/components/ui/icon';

const programs = [
  {
    title: 'Школьные экскурсии',
    description: 'Адаптированные программы для учеников 1-11 классов с интерактивными элементами',
    icon: 'GraduationCap',
  },
  {
    title: 'Учебные материалы',
    description: 'Методические разработки и рабочие тетради для углубленного изучения',
    icon: 'BookOpen',
  },
  {
    title: 'Мастер-классы',
    description: 'Практические занятия по истории, искусству и археологии',
    icon: 'Users',
  },
  {
    title: 'Онлайн-лекции',
    description: 'Виртуальные уроки и видеоматериалы для дистанционного обучения',
    icon: 'Laptop',
  },
];

const EducationalPrograms = () => {
  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Образовательные программы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Специальные программы для школьников и образовательных учреждений
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={program.icon as any} size={24} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {program.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-accent">
                    <Icon name="GraduationCap" size={16} />
                    <span>{program.age}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="https://cdn.poehali.dev/projects/0f09ea8d-3871-4127-9a55-5378888964c9/files/b19cab52-2147-4b9a-a399-e240c5c93840.jpg"
              alt="Образовательная программа"
              className="w-full md:w-1/2 rounded-lg object-cover h-64"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Запись на групповые посещения
              </h3>
              <p className="text-muted-foreground mb-6">
                Для организации экскурсии или образовательной программы для вашего класса,
                свяжитесь с нашим отделом образовательных программ.
              </p>
              <div className="flex flex-col gap-3 text-foreground">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <span>education@museum.ru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalPrograms;