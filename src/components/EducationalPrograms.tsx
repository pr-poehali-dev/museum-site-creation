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
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Образовательные программы
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Специальные программы для школьников, разработанные совместно с педагогами для углубленного изучения истории и культуры
            </p>
            <div className="flex items-center gap-3 text-sm">
              <Icon name="Users" size={20} className="text-accent" />
              <span>Более 5000 школьников посещают музей ежегодно</span>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://cdn.poehali.dev/projects/0f09ea8d-3871-4127-9a55-5378888964c9/files/aab5b214-28da-471c-829d-0e86f294b34a.jpg"
              alt="Школьники в музее"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="p-6 border border-border hover:border-accent transition-colors"
            >
              <Icon name={program.icon as any} size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-serif font-bold mb-3">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalPrograms;