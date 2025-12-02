import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    sessions: 8,
    duration: 60,
    groupSize: 'individual'
  });

  const calculatePrice = () => {
    const basePrice = 2000;
    const sessionMultiplier = calculatorData.sessions;
    const durationMultiplier = calculatorData.duration / 60;
    const groupDiscount = calculatorData.groupSize === 'group' ? 0.7 : 1;
    
    return Math.round(basePrice * sessionMultiplier * durationMultiplier * groupDiscount);
  };

  const programs = [
    {
      title: 'Индивидуальные тренировки',
      price: 'от 2000₽',
      features: ['Персональный подход', 'Гибкий график', 'Онлайн поддержка 24/7', 'План питания'],
      icon: 'User',
      popular: false
    },
    {
      title: 'Групповые занятия',
      price: 'от 1400₽',
      features: ['До 5 человек', 'Мотивация группы', 'Дружеская атмосфера', 'Скидка 30%'],
      icon: 'Users',
      popular: true
    },
    {
      title: 'Онлайн программы',
      price: 'от 5000₽',
      features: ['Тренируйся дома', 'Видео уроки', 'Чат с тренером', 'Месяц доступа'],
      icon: 'Video',
      popular: false
    }
  ];

  const transformations = [
    { name: 'Анна', result: '-12 кг за 3 месяца', before: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg' },
    { name: 'Мария', result: '-8 кг за 2 месяца', before: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg' },
    { name: 'Елена', result: '-15 кг за 4 месяца', before: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg' }
  ];

  const testimonials = [
    { name: 'Ольга', text: 'Никогда не думала, что смогу так изменить свою жизнь! Спасибо за поддержку и мотивацию!', rating: 5 },
    { name: 'Ирина', text: 'Лучший тренер! Индивидуальный подход и внимание к каждой детали. Результаты превзошли ожидания.', rating: 5 },
    { name: 'Светлана', text: 'Тренировки проходят в приятной атмосфере. Чувствую себя сильнее и увереннее с каждым днем!', rating: 5 }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FitLife
          </h1>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О тренере</button>
            <button onClick={() => scrollToSection('programs')} className="text-sm font-medium hover:text-primary transition-colors">Программы</button>
            <button onClick={() => scrollToSection('results')} className="text-sm font-medium hover:text-primary transition-colors">Результаты</button>
            <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</button>
            <Button variant="outline" size="sm" onClick={() => setIsLoginOpen(true)}>
              <Icon name="User" className="w-4 h-4 mr-2" />
              Вход
            </Button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="animate-pulse-glow">
            Записаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white text-sm px-4 py-2">
              🔥 Первая тренировка БЕСПЛАТНО
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Преврати своё тело в{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                мечту
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Индивидуальные программы тренировок для достижения твоих целей. Результат гарантирован!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 shadow-lg">
                Начать сейчас
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('programs')} className="text-lg px-8">
                Программы
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary">5 лет</div>
                <div className="text-sm text-muted-foreground">Опыта работы</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Достигли цели</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/9a216d6b-957a-4077-b99a-791ed8681bfb.jpg" 
              alt="Fitness trainer" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-gradient-to-r from-secondary to-accent text-white">О тренере</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Привет! Я Алиса</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Сертифицированный фитнес-тренер с 5-летним опытом работы. Моя миссия — помочь тебе не просто похудеть, 
              а полюбить спорт и здоровый образ жизни. Я работаю с каждым клиентом индивидуально, создавая программы, 
              которые действительно работают.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <Icon name="Award" className="w-12 h-12 mx-auto text-primary mb-2" />
                  <CardTitle className="text-center">Сертификаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">Международные сертификаты по фитнесу и нутрициологии</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
                <CardHeader>
                  <Icon name="Heart" className="w-12 h-12 mx-auto text-secondary mb-2" />
                  <CardTitle className="text-center">Подход</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">Индивидуальная работа с учётом твоих особенностей</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
                <CardHeader>
                  <Icon name="Target" className="w-12 h-12 mx-auto text-accent mb-2" />
                  <CardTitle className="text-center">Результат</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">Гарантированное достижение поставленных целей</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white mb-4">Программы тренировок</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выбери свой путь к успеху</h2>
            <p className="text-lg text-muted-foreground">Каждая программа разработана для максимального результата</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className={`border-2 hover:shadow-2xl transition-all transform hover:scale-105 relative ${program.popular ? 'border-primary shadow-xl' : ''}`}>
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">Популярно</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center">{program.title}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-3xl font-bold text-primary">{program.price}</span>
                    <span className="text-sm"> / занятие</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={() => scrollToSection('contact')}>
                    Выбрать программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-secondary to-accent text-white mb-4">До и После</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Реальные трансформации</h2>
            <p className="text-lg text-muted-foreground">Истории успеха моих клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {transformations.map((transformation, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all group">
                <div className="overflow-hidden">
                  <img 
                    src={transformation.before} 
                    alt={transformation.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <CardHeader>
                  <CardTitle>{transformation.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">{transformation.result}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">Отзывы клиентов</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white mb-4">Калькулятор стоимости</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Рассчитай свою программу</h2>
            <p className="text-lg text-muted-foreground">Узнай стоимость индивидуальной программы тренировок</p>
          </div>
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Персональный расчёт</CardTitle>
              <CardDescription>Настрой параметры под себя</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label className="text-base">Количество тренировок</Label>
                  <span className="font-bold text-primary">{calculatorData.sessions} занятий</span>
                </div>
                <Slider 
                  value={[calculatorData.sessions]} 
                  onValueChange={(value) => setCalculatorData({...calculatorData, sessions: value[0]})}
                  min={4}
                  max={16}
                  step={4}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label className="text-base">Длительность тренировки</Label>
                  <span className="font-bold text-secondary">{calculatorData.duration} минут</span>
                </div>
                <Slider 
                  value={[calculatorData.duration]} 
                  onValueChange={(value) => setCalculatorData({...calculatorData, duration: value[0]})}
                  min={45}
                  max={90}
                  step={15}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <Label className="text-base">Формат занятий</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant={calculatorData.groupSize === 'individual' ? 'default' : 'outline'}
                    onClick={() => setCalculatorData({...calculatorData, groupSize: 'individual'})}
                    className="h-20"
                  >
                    <div className="text-center">
                      <Icon name="User" className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-sm">Индивидуально</div>
                    </div>
                  </Button>
                  <Button 
                    variant={calculatorData.groupSize === 'group' ? 'default' : 'outline'}
                    onClick={() => setCalculatorData({...calculatorData, groupSize: 'group'})}
                    className="h-20"
                  >
                    <div className="text-center">
                      <Icon name="Users" className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-sm">Группа (скидка 30%)</div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-semibold">Итоговая стоимость:</span>
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {calculatePrice().toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6" onClick={() => scrollToSection('contact')}>
                  Записаться по этой программе
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white mb-4">Запись на консультацию</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Начни свой путь сегодня</h2>
            <p className="text-lg text-muted-foreground">Оставь заявку, и я свяжусь с тобой в течение часа</p>
          </div>
          <Card className="shadow-2xl">
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Как тебя зовут?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal">Твоя цель</Label>
                <Input id="goal" placeholder="Например: похудеть на 10 кг" />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 animate-pulse-glow">
                Записаться на консультацию
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, ты соглашаешься с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center space-y-4">
            <div className="flex justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" className="w-8 h-8" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" className="w-8 h-8" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" className="w-8 h-8" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 FitLife. Все права защищены.</p>
          </div>
        </div>
      </section>

      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Вход в личный кабинет</DialogTitle>
            <DialogDescription>
              Введите свои данные для доступа к программам
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Войти
            </Button>
            <div className="text-center">
              <button className="text-sm text-muted-foreground hover:text-primary">
                Забыли пароль?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Нет аккаунта?
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Зарегистрироваться
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
