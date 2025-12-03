import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = () => {
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-pink-600">Мария — Фитнес тренер</h1>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              <Icon name="LogOut" className="w-4 h-4 mr-2" />
              Выйти
            </Button>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">Добро пожаловать в личный кабинет! 💪</h2>
              <p className="text-lg text-gray-600">Здесь ты найдёшь все материалы своей программы</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-all border-2 border-pink-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Dumbbell" className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle>Программа тренировок</CardTitle>
                  <CardDescription>12 недель интенсива</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">Открыть</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all border-2 border-purple-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Video" className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Видео уроки</CardTitle>
                  <CardDescription>48 обучающих видео</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Смотреть</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all border-2 border-orange-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Utensils" className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>План питания</CardTitle>
                  <CardDescription>Индивидуальное меню</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Открыть</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all border-2 border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Icon name="LineChart" className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Мой прогресс</CardTitle>
                  <CardDescription>Отслеживание результатов</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Посмотреть</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all border-2 border-blue-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Icon name="MessageCircle" className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Чат с тренером</CardTitle>
                  <CardDescription>Поддержка 24/7</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Написать</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all border-2 border-indigo-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <Icon name="BookOpen" className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle>Гайды и чек-листы</CardTitle>
                  <CardDescription>Полезные материалы</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Скачать</Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Следующая тренировка</h3>
                    <p className="text-pink-100">Завтра в 10:00 — Ноги и ягодицы</p>
                  </div>
                  <Button variant="secondary" size="lg">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Мария — Фитнес тренер
          </h1>
          <Button 
            onClick={() => setIsLoginOpen(true)}
            className="bg-pink-600 hover:bg-pink-700"
          >
            <Icon name="User" className="w-4 h-4 mr-2" />
            Вход
          </Button>
        </div>
      </nav>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <Badge className="bg-pink-600 text-white text-sm px-4 py-2">
                🔥 Старт новой группы 15 января
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                Женский сплит на<br/>
                <span className="text-pink-600">12 недель</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Программа тренировок для девушек, которые хотят построить красивое подтянутое тело
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('program')}
                  className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-6"
                >
                  Узнать больше
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('price')}
                  className="text-lg px-8 py-6 border-2"
                >
                  Стоимость
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-3xl blur-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/9a216d6b-957a-4077-b99a-791ed8681bfb.jpg" 
                  alt="Тренер Мария" 
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-pink-600 mb-2">12</div>
              <div className="text-sm md:text-base text-gray-700">недель программы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-purple-600 mb-2">48</div>
              <div className="text-sm md:text-base text-gray-700">тренировок</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-orange-600 mb-2">250+</div>
              <div className="text-sm md:text-base text-gray-700">довольных девушек</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm md:text-base text-gray-700">дошли до конца</div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Что входит в программу</h2>
            <p className="text-lg text-gray-600">Всё необходимое для достижения твоей цели</p>
          </div>
          <div className="space-y-6">
            <Card className="border-2 hover:border-pink-300 transition-all hover:shadow-lg">
              <CardContent className="flex gap-4 md:gap-6 p-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <Icon name="Dumbbell" className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Детальный план тренировок</h3>
                  <p className="text-gray-700">4 тренировки в неделю с прогрессией нагрузки. Все упражнения с подробным описанием техники выполнения</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-300 transition-all hover:shadow-lg">
              <CardContent className="flex gap-4 md:gap-6 p-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <Icon name="Video" className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Видео всех упражнений</h3>
                  <p className="text-gray-700">48 обучающих видео в HD качестве. Правильная техника — залог результата и безопасности</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-300 transition-all hover:shadow-lg">
              <CardContent className="flex gap-4 md:gap-6 p-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Icon name="Utensils" className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Рекомендации по питанию</h3>
                  <p className="text-gray-700">Гайд по питанию с примерами меню и рецептами. Без жёстких диет, только сбалансированный рацион</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-300 transition-all hover:shadow-lg">
              <CardContent className="flex gap-4 md:gap-6 p-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                    <Icon name="MessageCircle" className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Поддержка в чате</h3>
                  <p className="text-gray-700">Закрытый чат с тренером и участницами. Отвечаю на все вопросы и мотивирую не сдаваться</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-all hover:shadow-lg">
              <CardContent className="flex gap-4 md:gap-6 p-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Icon name="BookOpen" className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Дополнительные материалы</h3>
                  <p className="text-gray-700">Гайды по восстановлению, растяжке, добавкам. Чек-листы для отслеживания прогресса</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Результаты участниц</h2>
            <p className="text-lg text-gray-600">Настоящие трансформации за 12 недель</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-all">
                <img 
                  src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg" 
                  alt="Результат" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <Icon key={index} name="Star" className="w-4 h-4 fill-pink-600 text-pink-600" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">&ldquo;Невероятная программа! Результат превзошёл все ожидания. Чувствую себя намного сильнее и увереннее&rdquo;</p>
                  <p className="text-sm text-gray-500 mt-2">— Анастасия, -8 кг</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Стоимость участия</h2>
            <p className="text-lg text-gray-600">Инвестиция в твоё здоровье и красоту</p>
          </div>
          <Card className="border-4 border-pink-300 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-pink-600 text-white px-6 py-2 text-sm font-bold transform rotate-12 translate-x-8 -translate-y-2">
              СТАРТ 15.01
            </div>
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-gray-500 line-through text-2xl mb-2">14 990 ₽</div>
                <div className="text-5xl md:text-7xl font-bold text-pink-600 mb-4">9 990 ₽</div>
                <Badge className="bg-green-100 text-green-800 text-base px-4 py-2">
                  Скидка 5000₽ до конца недели
                </Badge>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">12 недель полноценной программы тренировок</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Доступ к видео урокам и всем материалам навсегда</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Личный чат с тренером на все 12 недель</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Закрытое сообщество участниц для поддержки</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Гайды по питанию и восстановлению в подарок</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-pink-600 hover:bg-pink-700 text-xl py-8 animate-pulse"
                onClick={() => scrollToSection('form')}
              >
                Записаться сейчас
              </Button>

              <p className="text-center text-sm text-gray-500 mt-6">
                Осталось 7 мест в группе
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="form" className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Оставь заявку</h2>
            <p className="text-lg text-gray-600">Я свяжусь с тобой в течение часа</p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Как тебя зовут?" className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram (необязательно)</Label>
                <Input id="instagram" placeholder="@твой_инстаграм" className="h-12" />
              </div>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-lg py-6">
                Отправить заявку
              </Button>
              <p className="text-xs text-center text-gray-500">
                Нажимая кнопку, ты соглашаешься с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Мария — Фитнес тренер</h3>
              <p className="text-gray-400 text-sm">Меняем жизни через спорт</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Icon name="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Icon name="MessageCircle" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Icon name="Mail" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>

      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Вход для участниц</DialogTitle>
            <DialogDescription>
              Введи данные для доступа к программе
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input 
                id="login-email" 
                type="email" 
                placeholder="your@email.com"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Пароль</Label>
              <Input 
                id="login-password" 
                type="password" 
                placeholder="••••••••"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              />
            </div>
            <Button 
              className="w-full bg-pink-600 hover:bg-pink-700"
              onClick={handleLogin}
            >
              Войти в кабинет
            </Button>
            <div className="text-center">
              <button className="text-sm text-gray-500 hover:text-pink-600">
                Забыла пароль?
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
