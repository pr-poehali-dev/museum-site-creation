const History = () => {
  return (
    <section id="history" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center">
            История музея
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-accent pl-8 py-4">
              <p className="text-sm text-accent font-medium mb-2">1852</p>
              <h3 className="text-2xl font-serif font-bold mb-3">Основание</h3>
              <p className="text-muted-foreground">
                Музей был основан по указу императора как первое публичное собрание исторических артефактов
              </p>
            </div>

            <div className="border-l-2 border-accent pl-8 py-4">
              <p className="text-sm text-accent font-medium mb-2">1920</p>
              <h3 className="text-2xl font-serif font-bold mb-3">Национализация</h3>
              <p className="text-muted-foreground">
                Коллекция пополнилась экспонатами из частных собраний и стала достоянием народа
              </p>
            </div>

            <div className="border-l-2 border-accent pl-8 py-4">
              <p className="text-sm text-accent font-medium mb-2">1995</p>
              <h3 className="text-2xl font-serif font-bold mb-3">Реконструкция</h3>
              <p className="text-muted-foreground">
                Масштабная модернизация здания с внедрением современных систем хранения и экспозиции
              </p>
            </div>

            <div className="border-l-2 border-accent pl-8 py-4">
              <p className="text-sm text-accent font-medium mb-2">2024</p>
              <h3 className="text-2xl font-serif font-bold mb-3">Настоящее время</h3>
              <p className="text-muted-foreground">
                Один из ведущих музеев страны с коллекцией более 10 000 экспонатов и образовательными программами
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
