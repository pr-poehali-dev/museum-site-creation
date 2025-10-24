const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Пространство культуры и истории
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Более 10 000 уникальных экспонатов, охватывающих тысячелетия человеческой цивилизации
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('exhibitions')}
                className="px-8 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Экспозиции
              </button>
              <button 
                onClick={() => scrollToSection('visitor-info')}
                className="px-8 py-3 border border-border font-medium hover:bg-secondary transition-colors"
              >
                Посетителям
              </button>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://cdn.poehali.dev/projects/0f09ea8d-3871-4127-9a55-5378888964c9/files/d49926a1-6f7b-4077-903f-5a6931ef869e.jpg"
              alt="Музейный зал"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;