import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const exhibitions = [
    {
      title: 'Древняя Русь',
      period: 'IX-XIII века',
      description: 'Коллекция артефактов эпохи становления русской государственности',
      items: 42,
      category: 'История'
    },
    {
      title: 'Искусство Возрождения',
      period: 'XIV-XVII века',
      description: 'Живопись и скульптура европейских мастеров',
      items: 78,
      category: 'Искусство'
    },
    {
      title: 'Этнография народов мира',
      period: 'XVIII-XX века',
      description: 'Предметы быта и культуры различных народов',
      items: 156,
      category: 'Этнография'
    },
    {
      title: 'Современное искусство',
      period: 'XXI век',
      description: 'Работы современных художников и скульпторов',
      items: 34,
      category: 'Искусство'
    }
  ];

  const educationalPrograms = [
    {
      title: 'Музейный урок для начальных классов',
      duration: '45 минут',
      audience: '1-4 классы',
      description: 'Интерактивное знакомство с историей через экспонаты',
      schedule: 'Вт, Чт 10:00-14:00'
    },
    {
      title: 'История в деталях',
      duration: '90 минут',
      audience: '5-9 классы',
      description: 'Углубленное изучение исторических периодов с мастер-классами',
      schedule: 'Ср, Пт 11:00-15:00'
    },
    {
      title: 'Искусствоведение для подростков',
      duration: '120 минут',
      audience: '10-11 классы',
      description: 'Анализ произведений искусства, основы искусствоведения',
      schedule: 'Пн, Ср 14:00-16:00'
    },
    {
      title: 'Летняя музейная школа',
      duration: 'Интенсив 5 дней',
      audience: 'Все возрасты',
      description: 'Комплексная программа с экскурсиями, мастер-классами и лекциями',
      schedule: 'Июнь-Август'
    }
  ];

  const historyTimeline = [
    {
      year: '1872',
      event: 'Основание музея',
      description: 'Музей был основан группой меценатов и коллекционеров'
    },
    {
      year: '1905',
      event: 'Открытие нового здания',
      description: 'Переезд в специально построенное здание в центре города'
    },
    {
      year: '1945',
      event: 'Восстановление после войны',
      description: 'Реставрация коллекции и возобновление работы'
    },
    {
      year: '1987',
      event: 'Статус музея федерального значения',
      description: 'Признание на государственном уровне'
    },
    {
      year: '2020',
      event: 'Цифровизация коллекции',
      description: 'Запуск виртуальных экскурсий и онлайн-каталога'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Landmark" size={28} className="text-primary" />
            <h1 className="text-2xl font-serif font-bold">Музей</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" onClick={() => setActiveSection('home')}>Главная</Button>
            <Button variant="ghost" onClick={() => setActiveSection('exhibitions')}>Экспозиции</Button>
            <Button variant="ghost" onClick={() => setActiveSection('education')}>Посетителям</Button>
            <Button variant="ghost" onClick={() => setActiveSection('history')}>История</Button>
          </nav>
          <Button variant="outline" size="sm">
            <Icon name="Calendar" size={16} className="mr-2" />
            Запись на экскурсию
          </Button>
        </div>
      </header>

      <main className="container py-12">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <h2 className="text-6xl font-serif font-bold tracking-tight">
                Хранители культурного наследия
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Более 150 лет мы собираем, изучаем и представляем артефакты, 
                рассказывающие историю нашей цивилизации
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => setActiveSection('exhibitions')}>
                  Посмотреть экспозиции
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('education')}>
                  Образовательные программы
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Более 500 000 посетителей</CardTitle>
                  <CardDescription>ежегодно открывают для себя историю и искусство</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Package" size={24} className="text-primary" />
                  </div>
                  <CardTitle>15 000+ экспонатов</CardTitle>
                  <CardDescription>в постоянной и временных экспозициях</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="GraduationCap" size={24} className="text-primary" />
                  </div>
                  <CardTitle>200+ образовательных программ</CardTitle>
                  <CardDescription>для школьников и студентов всех возрастов</CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'exhibitions' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-serif font-bold">Экспозиции</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Познакомьтесь с нашими коллекциями, охватывающими тысячелетия истории и культуры
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="history">История</TabsTrigger>
                <TabsTrigger value="art">Искусство</TabsTrigger>
                <TabsTrigger value="ethnography">Этнография</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {exhibitions.map((exhibition, idx) => (
                    <Card key={idx} className="hover:shadow-xl transition-all hover:scale-[1.02]">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary">{exhibition.category}</Badge>
                          <span className="text-sm text-muted-foreground">{exhibition.items} экспонатов</span>
                        </div>
                        <CardTitle className="text-2xl font-serif">{exhibition.title}</CardTitle>
                        <CardDescription className="text-base">{exhibition.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exhibition.description}</p>
                        <Button variant="link" className="p-0">
                          Подробнее
                          <Icon name="ChevronRight" size={16} className="ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {exhibitions.filter(e => e.category === 'История').map((exhibition, idx) => (
                    <Card key={idx} className="hover:shadow-xl transition-all hover:scale-[1.02]">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary">{exhibition.category}</Badge>
                          <span className="text-sm text-muted-foreground">{exhibition.items} экспонатов</span>
                        </div>
                        <CardTitle className="text-2xl font-serif">{exhibition.title}</CardTitle>
                        <CardDescription className="text-base">{exhibition.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exhibition.description}</p>
                        <Button variant="link" className="p-0">
                          Подробнее
                          <Icon name="ChevronRight" size={16} className="ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="art" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {exhibitions.filter(e => e.category === 'Искусство').map((exhibition, idx) => (
                    <Card key={idx} className="hover:shadow-xl transition-all hover:scale-[1.02]">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary">{exhibition.category}</Badge>
                          <span className="text-sm text-muted-foreground">{exhibition.items} экспонатов</span>
                        </div>
                        <CardTitle className="text-2xl font-serif">{exhibition.title}</CardTitle>
                        <CardDescription className="text-base">{exhibition.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exhibition.description}</p>
                        <Button variant="link" className="p-0">
                          Подробнее
                          <Icon name="ChevronRight" size={16} className="ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ethnography" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {exhibitions.filter(e => e.category === 'Этнография').map((exhibition, idx) => (
                    <Card key={idx} className="hover:shadow-xl transition-all hover:scale-[1.02]">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary">{exhibition.category}</Badge>
                          <span className="text-sm text-muted-foreground">{exhibition.items} экспонатов</span>
                        </div>
                        <CardTitle className="text-2xl font-serif">{exhibition.title}</CardTitle>
                        <CardDescription className="text-base">{exhibition.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exhibition.description}</p>
                        <Button variant="link" className="p-0">
                          Подробнее
                          <Icon name="ChevronRight" size={16} className="ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'education' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-serif font-bold">Образовательные программы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Специальные программы для школьников всех возрастов
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {educationalPrograms.map((program, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="bg-primary/5">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {program.duration}
                      </Badge>
                      <Badge variant="secondary">{program.audience}</Badge>
                    </div>
                    <CardTitle className="text-2xl font-serif">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{program.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="font-medium">{program.schedule}</span>
                    </div>
                    <Button className="w-full">
                      Записаться на программу
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <Icon name="Info" size={24} />
                  Информация для посетителей
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Icon name="Clock" size={18} className="text-primary" />
                      Режим работы
                    </h3>
                    <p className="text-muted-foreground">Вт-Вс: 10:00-18:00</p>
                    <p className="text-muted-foreground">Пн: выходной</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Icon name="Ticket" size={18} className="text-primary" />
                      Стоимость
                    </h3>
                    <p className="text-muted-foreground">Для школьников: бесплатно</p>
                    <p className="text-muted-foreground">Взрослые: 300 ₽</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Icon name="MapPin" size={18} className="text-primary" />
                      Адрес
                    </h3>
                    <p className="text-muted-foreground">ул. Музейная, д. 1</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Icon name="Phone" size={18} className="text-primary" />
                      Контакты
                    </h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'history' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-serif font-bold">История музея</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Более полутора веков служения культуре и просвещению
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {historyTimeline.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                    {idx !== historyTimeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-2xl font-serif font-bold mb-2">{item.event}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Сегодня</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Музей продолжает развиваться, внедряя современные технологии и расширяя свою коллекцию. 
                  Мы стремимся сделать культурное наследие доступным каждому через образовательные программы, 
                  виртуальные экскурсии и научные исследования.
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-serif font-bold text-primary">15 000+</div>
                    <div className="text-sm text-muted-foreground mt-1">экспонатов</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-serif font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground mt-1">лет истории</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-serif font-bold text-primary">500 000+</div>
                    <div className="text-sm text-muted-foreground mt-1">посетителей в год</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                <Icon name="Landmark" size={20} />
                Музей
              </h3>
              <p className="text-sm text-muted-foreground">
                Храним и изучаем культурное наследие для будущих поколений
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Разделы</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Главная</a>
                <a href="#" className="hover:text-foreground transition-colors">Экспозиции</a>
                <a href="#" className="hover:text-foreground transition-colors">Посетителям</a>
                <a href="#" className="hover:text-foreground transition-colors">История</a>
              </nav>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Контакты</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p>ул. Музейная, д. 1</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@museum.ru</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Режим работы</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Вт-Вс: 10:00-18:00</p>
                <p>Понедельник: выходной</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Музей. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
