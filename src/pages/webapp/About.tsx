import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const About = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const diplomas = [
    { id: 1, title: 'Чемпион Европы 2022' },
    { id: 2, title: 'Мастер спорта РФ' },
    { id: 3, title: 'Сертификат ISSA' },
    { id: 4, title: 'Диплом по нутрициологии' },
    { id: 5, title: 'Курс спортивной медицины' },
    { id: 6, title: 'Сертификат CrossFit L1' },
    { id: 7, title: 'Курс биомеханики' },
    { id: 8, title: 'Диплом NASM-CPT' },
    { id: 9, title: 'Сертификат реабилитации' },
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
            <Link to="/about" className="text-base font-medium text-secondary">
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

      <section className="pt-32 pb-0 px-4">
        <div className="container mx-auto max-w-[1320px]">
          <div 
            className="w-full h-[500px] rounded-3xl overflow-hidden relative"
            style={{ 
              backgroundImage: 'url(https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/9a216d6b-957a-4077-b99a-791ed8681bfb.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-12">
                <h1 className="text-white text-[3.5rem]">Обо мне</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1320px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2>Моя история</h2>
              <p className="text-xl leading-relaxed">
                В фитнес я пришла 10 лет назад с простой целью — <span className="text-secondary font-semibold">похудеть после родов</span>. 
                Но то, что началось как личная трансформация, переросло в призвание всей жизни.
              </p>
              <p className="text-xl leading-relaxed">
                Через 2 года регулярных тренировок я поняла, что хочу не просто менять себя, 
                а помогать другим людям обрести уверенность через силу. Получила международные сертификаты, 
                изучила биомеханику, нутрициологию и <span className="text-secondary font-semibold">стала мастером спорта по пауэрлифтингу</span>.
              </p>
              <p className="text-xl leading-relaxed">
                В 2022 году выиграла Чемпионат Европы, но главная моя гордость — это не медали, 
                а <span className="text-secondary font-semibold">более 300 людей</span>, которые достигли своих целей благодаря моим программам. 
                Каждая трансформация клиента — это мотивация продолжать дальше.
              </p>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/9a216d6b-957a-4077-b99a-791ed8681bfb.jpg" 
                alt="История Марии" 
                className="rounded-2xl shadow-lg w-full object-cover"
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
                src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg" 
                alt="Философия тренировок" 
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2>Моя философия</h2>
              <p className="text-xl leading-relaxed">
                Я верю в <span className="text-secondary font-semibold">тренировки, основанные на науке</span>, 
                а не на мифах и трендах. Каждая программа строится на понимании биомеханики, физиологии 
                и индивидуальных особенностей человека.
              </p>
              <p className="text-xl leading-relaxed">
                Результат приходит не от волшебных упражнений или чудо-диет, а от системного подхода: 
                правильная техника выполнения, грамотная прогрессия нагрузок, сбалансированное питание 
                и адекватное восстановление.
              </p>
              <p className="text-xl leading-relaxed">
                Моя задача — не просто дать тебе программу, а <span className="text-secondary font-semibold">научить тебя 
                тренироваться правильно</span>, понимать своё тело и достигать целей безопасно. 
                Без перетренированности, травм и выгорания.
              </p>
              <div className="flex gap-4 pt-4">
                <Link to="/programs">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Начать тренировки
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1320px]">
          <div className="text-center mb-12">
            <h2 className="mb-4">Сертификаты и дипломы</h2>
            <p className="text-xl text-muted-foreground">
              Постоянно развиваюсь и изучаю новые методики, чтобы давать тебе лучшее
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {diplomas.map((diploma) => (
              <div 
                key={diploma.id}
                onClick={() => setSelectedImage(diploma.id)}
                className="relative overflow-hidden rounded-2xl cursor-pointer transition-transform hover:scale-[1.03]"
                style={{ boxShadow: '0 4px 12px rgba(29,54,88,0.08)' }}
              >
                <img 
                  src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg" 
                  alt={diploma.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">{diploma.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <img 
            src="https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg" 
            alt="Диплом"
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>

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

export default About;
