import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const ProgramDetail = () => {
  const { slug } = useParams();
  const [selectedPackage, setSelectedPackage] = useState<'2m' | '6m'>('2m');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    agreeTerms: false,
    emailConfirm: false,
    paymentMethod: 'ru-card'
  });

  const program = {
    title: 'Начальный уровень дома',
    subtitle: 'Эффективная программа для новичков без тренажёров',
    image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/9a216d6b-957a-4077-b99a-791ed8681bfb.jpg',
    tags: ['Дома', 'Новичок', 'Похудение', '8 недель'],
    price2m: 2500,
    price6m: 5000,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms || !formData.emailConfirm) {
      alert('Необходимо согласие с условиями');
      return;
    }
    console.log('Submit:', { ...formData, package: selectedPackage });
  };

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

      <section className="pt-32 pb-12 px-4" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
        <div className="container mx-auto max-w-[1320px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={program.image}
                alt={program.title}
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                {program.tags.map((tag) => (
                  <Badge 
                    key={tag}
                    style={{ 
                      backgroundColor: 'rgba(167, 218, 220, 0.2)',
                      color: 'hsl(var(--main-text))',
                      borderRadius: '12px',
                      padding: '8px 16px',
                      fontSize: '14px'
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1>{program.title}</h1>
              <p className="text-xl leading-relaxed">
                {program.subtitle}
              </p>
              <div className="flex gap-4 items-center">
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-sm text-muted-foreground">2 месяца</p>
                  <p className="text-3xl font-bold text-secondary">{program.price2m}₽</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-sm text-muted-foreground">6 месяцев</p>
                  <p className="text-3xl font-bold text-secondary">{program.price6m}₽</p>
                </div>
              </div>
              <Button size="lg" className="w-full text-lg py-6" onClick={() => {
                document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Купить программу
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1320px]">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Описание программы</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Эта программа разработана специально для тех, кто только начинает свой путь в фитнесе 
                или возвращается к тренировкам после длительного перерыва. <strong className="text-secondary">Не требует тренажёров</strong> — 
                достаточно минимального оборудования: коврик, гантели 2-5 кг (или бутылки с водой).
              </p>
              <p>
                Программа построена на принципах <strong className="text-secondary">прогрессивной перегрузки</strong>: 
                начинаем с простых упражнений и постепенно увеличиваем сложность. Каждая неделя — это новый шаг к твоей цели.
              </p>
              <p>
                Особое внимание уделяется <strong className="text-secondary">правильной технике выполнения</strong>. 
                Все упражнения сопровождаются видео с моими комментариями и разбором частых ошибок.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Для кого эта программа</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Icon name="Check" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Новичков, которые никогда не тренировались систематически</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Тех, кто возвращается к тренировкам после перерыва</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Людей с лишним весом, желающих начать безопасно</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Тех, кто не имеет доступа в зал или предпочитает домашние тренировки</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
        <div className="container mx-auto max-w-[1320px]">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Что входит в программу</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6 flex gap-4">
                  <Icon name="Dumbbell" className="w-8 h-8 flex-shrink-0" style={{ color: 'hsl(var(--aqua-secondary))' }} />
                  <div>
                    <h4 className="font-bold mb-2">20 тренировок</h4>
                    <p className="text-sm">Подробный план на 8 недель, 3 тренировки в неделю</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6 flex gap-4">
                  <Icon name="Video" className="w-8 h-8 flex-shrink-0" style={{ color: 'hsl(var(--aqua-secondary))' }} />
                  <div>
                    <h4 className="font-bold mb-2">Видео упражнений</h4>
                    <p className="text-sm">Техника выполнения каждого упражнения в HD</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6 flex gap-4">
                  <Icon name="TrendingUp" className="w-8 h-8 flex-shrink-0" style={{ color: 'hsl(var(--aqua-secondary))' }} />
                  <div>
                    <h4 className="font-bold mb-2">Прогресс нагрузок</h4>
                    <p className="text-sm">Система прогрессии для постоянного роста</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6 flex gap-4">
                  <Icon name="Utensils" className="w-8 h-8 flex-shrink-0" style={{ color: 'hsl(var(--aqua-secondary))' }} />
                  <div>
                    <h4 className="font-bold mb-2">Гайд по питанию</h4>
                    <p className="text-sm">Базовые принципы и готовые примеры меню</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6 flex gap-4">
                  <Icon name="Smartphone" className="w-8 h-8 flex-shrink-0" style={{ color: 'hsl(var(--aqua-secondary))' }} />
                  <div>
                    <h4 className="font-bold mb-2">Мобильный доступ</h4>
                    <p className="text-sm">Тренируйся с телефона в любом месте</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6 flex gap-4">
                  <Icon name="MessageCircle" className="w-8 h-8 flex-shrink-0" style={{ color: 'hsl(var(--aqua-secondary))' }} />
                  <div>
                    <h4 className="font-bold mb-2">Поддержка</h4>
                    <p className="text-sm">Ответы на вопросы в общем чате</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="buy" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1320px]">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-8 text-center">Выбери свой пакет</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card 
                className={`cursor-pointer transition-all ${selectedPackage === '2m' ? 'border-2' : 'border'}`}
                style={{ 
                  borderColor: selectedPackage === '2m' ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                  borderRadius: '18px'
                }}
                onClick={() => setSelectedPackage('2m')}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">{program.price2m}₽</div>
                  <div className="text-lg font-semibold mb-4">2 месяца доступа</div>
                  <p className="text-sm text-muted-foreground">Полный доступ ко всем материалам на 60 дней</p>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer transition-all relative ${selectedPackage === '6m' ? 'border-2' : 'border'}`}
                style={{ 
                  borderColor: selectedPackage === '6m' ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                  borderRadius: '18px'
                }}
                onClick={() => setSelectedPackage('6m')}
              >
                <Badge 
                  className="absolute -top-3 right-4 bg-primary text-white"
                >
                  Выгодно
                </Badge>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">{program.price6m}₽</div>
                  <div className="text-lg font-semibold mb-4">6 месяцев доступа</div>
                  <p className="text-sm text-muted-foreground">180 дней для закрепления результата</p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-8" style={{ borderRadius: '18px' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    style={{ borderRadius: '12px', padding: '16px' }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Имя (необязательно)</Label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ borderRadius: '12px', padding: '16px' }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон (необязательно)</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{ borderRadius: '12px', padding: '16px' }}
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="terms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                    />
                    <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                      Согласен с <a href="#" className="text-secondary underline">офертой</a> и <a href="#" className="text-secondary underline">политикой конфиденциальности</a>
                    </Label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="email-confirm"
                      checked={formData.emailConfirm}
                      onCheckedChange={(checked) => setFormData({...formData, emailConfirm: checked as boolean})}
                    />
                    <Label htmlFor="email-confirm" className="text-sm cursor-pointer leading-relaxed">
                      Подтверждаю, что email указан верно
                    </Label>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Label>Способ оплаты</Label>
                  <RadioGroup 
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
                  >
                    <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="ru-card" id="ru-card" />
                      <Label htmlFor="ru-card" className="cursor-pointer flex-1">
                        Карта РФ (Visa, Mastercard, МИР)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="foreign-card" id="foreign-card" />
                      <Label htmlFor="foreign-card" className="cursor-pointer flex-1">
                        Зарубежная карта
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6"
                  disabled={!formData.agreeTerms || !formData.emailConfirm}
                >
                  Перейти к оплате
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--mint-base))' }}>
        <div className="container mx-auto max-w-[1320px]">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1" 
                className="bg-white px-6 rounded-xl"
                style={{ borderBottom: '1px solid hsl(var(--aqua-secondary))' }}
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-4">
                  Подойдёт ли программа полному новичку?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-4">
                  Да, программа специально разработана для начинающих. Все упражнения показаны с нуля, 
                  есть упрощённые варианты для тех, кому тяжело.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2" 
                className="bg-white px-6 rounded-xl"
                style={{ borderBottom: '1px solid hsl(var(--aqua-secondary))' }}
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-4">
                  Какое оборудование нужно?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-4">
                  Минимум: коврик для фитнеса и гантели 2-5 кг. Можно заменить на бутылки с водой. 
                  Опционально: фитнес-резинка для усложнения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3" 
                className="bg-white px-6 rounded-xl"
                style={{ borderBottom: '1px solid hsl(var(--aqua-secondary))' }}
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-4">
                  Сколько длится одна тренировка?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-4">
                  40-50 минут. Это оптимальное время для эффективной тренировки без перегрузки организма.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4" 
                className="bg-white px-6 rounded-xl"
                style={{ borderBottom: '1px solid hsl(var(--aqua-secondary))' }}
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-4">
                  Могу ли я вернуть деньги?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-4">
                  Да, возврат возможен в течение 14 дней с момента покупки, если ты не просмотрел 
                  более 30% материалов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5" 
                className="bg-white px-6 rounded-xl"
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-4">
                  Будет ли личная поддержка?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-4">
                  Программа включает доступ к общему чату, где я отвечаю на вопросы. Для персональной 
                  работы есть отдельный формат коучинга.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

export default ProgramDetail;
