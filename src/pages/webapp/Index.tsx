import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-accent">
        <div className="container mx-auto px-4 py-4 max-w-[1320px] flex items-center justify-between">
          <h1 className="text-2xl font-bold text-secondary">
            Мария Иванова
          </h1>
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/about" className="text-base font-medium text-foreground hover:text-secondary transition-colors">
              О тренере
            </Link>
            <Link to="/programs" className="text-base font-medium text-foreground hover:text-secondary transition-colors">
              Программы
            </Link>
            <Link to="/nutrition" className="text-base font-medium text-foreground hover:text-secondary transition-colors">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-[3.5rem] leading-tight">
                Преврати своё тело в <span className="text-secondary">мечту</span>
              </h1>
              <p className="text-xl leading-relaxed">
                Персональные программы тренировок и питания от чемпиона Европы по пауэрлифтингу. 
                Научу достигать результатов безопасно и эффективно.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/programs">
                  <Button size="lg" className="text-lg px-7 py-6">
                    Выбрать программу
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button size="lg" variant="outline" className="text-lg px-7 py-6">
                    Пройти квиз
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/9a216d6b-957a-4077-b99a-791ed8681bfb.jpg" 
                alt="Тренер Мария" 
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
        <div className="container mx-auto max-w-[1320px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/9a216d6b-957a-4077-b99a-791ed8681bfb.jpg" 
                alt="О Марии" 
                className="rounded-2xl shadow-lg w-full object-cover"
                style={{ boxShadow: '0 8px 24px rgba(29, 54, 88, 0.12)' }}
              />
            </div>
            <div className="space-y-6">
              <h2>Коротко о Марии</h2>
              <p className="text-lg leading-relaxed">
                Привет! Я Мария Иванова — персональный тренер с 7-летним опытом и чемпион Европы по пауэрлифтингу. 
                Моя специализация — трансформация тела и силовые тренировки.
              </p>
              <p className="text-lg leading-relaxed">
                За годы работы я помогла более 300 людям достичь своих целей: от похудения на 20+ кг 
                до подготовки к соревнованиям. Работаю по науке, без мифов и опасных методик.
              </p>
              <p className="text-lg leading-relaxed">
                Верю, что каждый может изменить своё тело — нужны лишь правильная программа, поддержка 
                и последовательность. Давай начнём твой путь к лучшей версии себя!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1320px]">
          <div className="text-center mb-12">
            <h2 className="mb-4">Мои услуги</h2>
            <p className="text-xl text-muted-foreground">Выбери формат, который подходит именно тебе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all" style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(29,54,88,0.05)' }}>
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Dumbbell" className="w-12 h-12" style={{ color: 'hsl(var(--aqua-secondary))' }} />
                </div>
                <CardTitle className="text-center text-[1.75rem]">Готовые программы</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg">
                  Проверенные тренировочные планы на 8-12 недель для зала и дома. 
                  С видео всех упражнений и планом питания.
                </p>
                <Link to="/programs">
                  <Button className="w-full">Посмотреть программы</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all" style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(29,54,88,0.05)' }}>
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Utensils" className="w-12 h-12" style={{ color: 'hsl(var(--aqua-secondary))' }} />
                </div>
                <CardTitle className="text-center text-[1.75rem]">Планы питания</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg">
                  Сбалансированные рационы для набора массы, похудения и рекомпозиции. 
                  С рецептами и списками продуктов.
                </p>
                <Link to="/nutrition">
                  <Button className="w-full">Выбрать рацион</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all" style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(29,54,88,0.05)' }}>
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="MessageCircle" className="w-12 h-12" style={{ color: 'hsl(var(--aqua-secondary))' }} />
                </div>
                <CardTitle className="text-center text-[1.75rem]">Персональное сопровождение</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg">
                  Индивидуальная работа со мной: программа под тебя, еженедельные корректировки, 
                  видеоанализ техники.
                </p>
                <Link to="/coaching">
                  <Button className="w-full">Узнать подробнее</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
        <div className="container mx-auto max-w-[1320px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg" 
                alt="Квиз подбора" 
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-primary text-white px-4 py-2 text-base">
                Бесплатно
              </Badge>
              <h2>Не знаешь, с чего начать?</h2>
              <p className="text-xl leading-relaxed">
                Пройди короткий квиз — я подберу оптимальную программу под твой уровень подготовки, 
                цели и возможности. Это займёт всего 2 минуты.
              </p>
              <p className="text-lg leading-relaxed">
                После прохождения получишь рекомендованную программу и <strong className="text-secondary">скидку 10%</strong> на первую покупку.
              </p>
              <Link to="/quiz">
                <Button size="lg" className="text-lg px-8 py-6">
                  Пройти квиз
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1320px]">
          <div className="text-center mb-12">
            <h2 className="mb-4">Регалии и достижения</h2>
            <p className="text-xl text-muted-foreground mb-6">Чемпион Европы по пауэрлифтингу 2022</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="relative overflow-hidden rounded-2xl cursor-pointer transition-transform hover:scale-105"
                style={{ boxShadow: '0 4px 12px rgba(29,54,88,0.08)' }}
              >
                <img 
                  src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg" 
                  alt={`Диплом ${i}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
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

export default Index;
