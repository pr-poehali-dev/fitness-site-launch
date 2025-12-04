import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Nutrition = () => {
  const nutritionPlans = [
    {
      id: 1,
      slug: 'mass-gain',
      title: 'Набор массы',
      description: 'Сбалансированный рацион с профицитом калорий для роста мышц',
      image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg',
      calories: '2800-3200',
      protein: '150-180г',
      price2m: 1800,
      price6m: 3800,
      features: ['Готовые меню на неделю', 'Рецепты блюд', 'Список продуктов', 'Калькулятор порций']
    },
    {
      id: 2,
      slug: 'fat-loss',
      title: 'Сушка',
      description: 'Дефицит калорий с сохранением мышечной массы',
      image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg',
      calories: '1600-2000',
      protein: '120-150г',
      price2m: 1800,
      price6m: 3800,
      features: ['Готовые меню на неделю', 'Рецепты блюд', 'Список продуктов', 'Калькулятор порций']
    },
    {
      id: 3,
      slug: 'recomposition',
      title: 'Рекомпозиция',
      description: 'Одновременное жиросжигание и набор мышечной массы',
      image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg',
      calories: '2000-2400',
      protein: '130-160г',
      price2m: 1800,
      price6m: 3800,
      features: ['Готовые меню на неделю', 'Рецепты блюд', 'Список продуктов', 'Калькулятор порций']
    },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-accent">
        <div className="container mx-auto px-4 py-4 max-w-[1320px] flex items-center justify-between">
          <Link to="/">
            <h1 className="text-2xl font-bold text-secondary">
              Мария Иванова
            </h1>
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/about" className="text-base font-medium text-foreground hover:text-secondary transition-colors">
              О тренере
            </Link>
            <Link to="/programs" className="text-base font-medium text-foreground hover:text-secondary transition-colors">
              Программы
            </Link>
            <Link to="/nutrition" className="text-base font-medium text-secondary">
              Питание
            </Link>
            <Link to="/coaching" className="text-base font-medium text-foreground hover:text-secondary transition-colors">
              Коучинг
            </Link>
            <Link to="/lk">
              <Button variant="outline" size="sm">
                <Icon name="User" className="w-4 h-4 mr-2" />
                Вход
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
        <div className="container mx-auto max-w-[1320px]">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 text-base" style={{ backgroundColor: 'hsl(var(--primary))' }}>
              Новинка
            </Badge>
            <h1 className="mb-6">Планы питания</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Сбалансированные рационы на основе научных данных. Без голодовок и строгих диет — 
              только здоровое питание, которое работает.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nutritionPlans.map((plan) => (
              <Card 
                key={plan.id}
                className="hover:shadow-lg transition-all overflow-hidden"
                style={{ borderRadius: '18px', boxShadow: '0 4px 12px rgba(29,54,88,0.05)' }}
              >
                <div 
                  className="h-48 w-full bg-cover bg-center relative"
                  style={{ 
                    backgroundImage: `url(${plan.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-[1.875rem]">{plan.title}</CardTitle>
                  <p className="text-base leading-relaxed text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t" style={{ borderColor: 'hsl(var(--accent))' }}>
                    <div>
                      <p className="text-sm text-muted-foreground">Калории</p>
                      <p className="font-bold">{plan.calories}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Белок</p>
                      <p className="font-bold">{plan.protein}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: 'hsl(var(--accent))' }}>
                    <div>
                      <p className="text-xs text-muted-foreground">2 месяца</p>
                      <p className="text-xl font-bold">{plan.price2m}₽</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">6 месяцев</p>
                      <p className="text-xl font-bold">{plan.price6m}₽</p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Link to={`/nutrition/${plan.slug}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        Подробнее
                      </Button>
                    </Link>
                    <Link to={`/nutrition/${plan.slug}#buy`} className="flex-1">
                      <Button className="w-full">
                        Купить
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1320px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Почему планы питания работают</h2>
            <p className="text-xl leading-relaxed mb-12">
              Я создала эти рационы на основе своего опыта работы с сотнями клиентов 
              и последних научных исследований в области нутрициологии.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
                  <Icon name="Calculator" className="w-8 h-8" style={{ color: 'hsl(var(--secondary))' }} />
                </div>
                <h4 className="font-bold mb-2">Точный расчёт</h4>
                <p className="text-sm text-muted-foreground">
                  Калории и макронутриенты рассчитаны под конкретные цели
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
                  <Icon name="ChefHat" className="w-8 h-8" style={{ color: 'hsl(var(--secondary))' }} />
                </div>
                <h4 className="font-bold mb-2">Вкусно и просто</h4>
                <p className="text-sm text-muted-foreground">
                  Рецепты из доступных продуктов, готовятся за 20-30 минут
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
                  <Icon name="TrendingUp" className="w-8 h-8" style={{ color: 'hsl(var(--secondary))' }} />
                </div>
                <h4 className="font-bold mb-2">Результат</h4>
                <p className="text-sm text-muted-foreground">
                  95% клиентов достигают целей, следуя этим планам
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
        <div className="container mx-auto max-w-[1320px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg"
                alt="Пример блюд"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2>Что внутри каждого плана</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Готовые меню на неделю</h4>
                    <p className="text-base">Расписание на 7 дней с точным расчётом КБЖУ</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Подробные рецепты</h4>
                    <p className="text-base">Пошаговые инструкции приготовления каждого блюда</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Списки продуктов</h4>
                    <p className="text-base">Готовый список для похода в магазин</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Калькулятор порций</h4>
                    <p className="text-base">Адаптация под твой вес и активность</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">PDF для скачивания</h4>
                    <p className="text-base">Все материалы в удобном формате</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/programs">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Выбрать план питания
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-white border-t" style={{ borderColor: 'hsl(var(--aqua-secondary))' }}>
        <div className="container mx-auto max-w-[1320px]">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Мария Иванова</h3>
              <p className="text-sm">Персональный тренер и чемпион Европы</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Меню</h4>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-secondary">О тренере</Link>
                <Link to="/programs" className="block hover:text-secondary">Программы</Link>
                <Link to="/nutrition" className="block hover:text-secondary">Питание</Link>
                <Link to="/coaching" className="block hover:text-secondary">Коучинг</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p>Email: maria@example.com</p>
                <p>Telegram: @maria_trainer</p>
                <p>Instagram: @maria_fit</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Юридическая информация</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-secondary">Оферта</a>
                <a href="#" className="block hover:text-secondary">Политика конфиденциальности</a>
                <p className="text-xs mt-4">ИП Иванова М.А.</p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t text-center text-sm" style={{ borderColor: 'hsl(var(--aqua-secondary))' }}>
            © 2024 Мария Иванова. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Nutrition;
