import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Programs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    level: searchParams.get('level') || 'all',
    format: searchParams.get('format') || 'all',
    type: searchParams.get('type') || 'all',
    goal: searchParams.get('goal') || 'all',
  });

  const programs = [
    {
      id: 1,
      slug: 'beginner-home',
      title: 'Начальный уровень дома',
      image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg',
      level: 'beginner',
      format: 'home',
      type: 'full-body',
      goal: 'fat-loss',
      price2m: 2500,
      price6m: 5000,
      tags: ['Дома', 'Новичок', 'Похудение']
    },
    {
      id: 2,
      slug: 'intermediate-gym',
      title: 'Средний уровень в зале',
      image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg',
      level: 'intermediate',
      format: 'gym',
      type: 'split',
      goal: 'muscle-gain',
      price2m: 3000,
      price6m: 6500,
      tags: ['Зал', 'Опытный', 'Набор массы']
    },
    {
      id: 3,
      slug: 'advanced-powerlifting',
      title: 'Продвинутый пауэрлифтинг',
      image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg',
      level: 'advanced',
      format: 'gym',
      type: 'powerlifting',
      goal: 'strength',
      price2m: 3500,
      price6m: 7500,
      tags: ['Зал', 'Продвинутый', 'Сила']
    },
    {
      id: 4,
      slug: 'home-minimal',
      title: 'Минимальное оборудование',
      image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg',
      level: 'beginner',
      format: 'home',
      type: 'full-body',
      goal: 'toning',
      price2m: 2200,
      price6m: 4500,
      tags: ['Дома', 'Новичок', 'Тонус']
    },
    {
      id: 5,
      slug: 'recomp-program',
      title: 'Рекомпозиция тела',
      image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg',
      level: 'intermediate',
      format: 'gym',
      type: 'split',
      goal: 'recomp',
      price2m: 2800,
      price6m: 6000,
      tags: ['Зал', 'Опытный', 'Рекомпозиция']
    },
    {
      id: 6,
      slug: 'women-glutes',
      title: 'Женский сплит на ягодицы',
      image: 'https://cdn.poehali.dev/projects/5afabecd-bd0b-4988-aa6d-2719f873b15a/files/bd4e64c2-b752-419a-b178-67651f81d3bc.jpg',
      level: 'intermediate',
      format: 'gym',
      type: 'split',
      goal: 'muscle-gain',
      price2m: 2900,
      price6m: 6200,
      tags: ['Зал', 'Опытный', 'Ягодицы']
    },
  ];

  const filteredPrograms = programs.filter(program => {
    if (filters.level !== 'all' && program.level !== filters.level) return false;
    if (filters.format !== 'all' && program.format !== filters.format) return false;
    if (filters.type !== 'all' && program.type !== filters.type) return false;
    if (filters.goal !== 'all' && program.goal !== filters.goal) return false;
    return true;
  });

  const updateFilter = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v !== 'all') params.set(k, v);
    });
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({ level: 'all', format: 'all', type: 'all', goal: 'all' });
    setSearchParams({});
  };

  const activeFiltersCount = Object.values(filters).filter(v => v !== 'all').length;

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
            <Link to="/programs" className="text-base font-medium text-secondary">
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

      <section className="pt-32 pb-12 px-4 bg-white">
        <div className="container mx-auto max-w-[1320px]">
          <div className="text-center mb-12">
            <h1 className="mb-4">Тренировочные программы</h1>
            <p className="text-xl text-muted-foreground">
              Выбери программу под свой уровень и цели
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border mb-8" style={{ borderColor: 'hsl(var(--accent))' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Фильтры</h3>
              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <Icon name="X" className="w-4 h-4 mr-2" />
                  Сбросить ({activeFiltersCount})
                </Button>
              )}
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Уровень</label>
                <Select value={filters.level} onValueChange={(v) => updateFilter('level', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все уровни" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все уровни</SelectItem>
                    <SelectItem value="beginner">Новичок</SelectItem>
                    <SelectItem value="intermediate">Опытный</SelectItem>
                    <SelectItem value="advanced">Продвинутый</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Формат</label>
                <Select value={filters.format} onValueChange={(v) => updateFilter('format', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все форматы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все форматы</SelectItem>
                    <SelectItem value="home">Дома</SelectItem>
                    <SelectItem value="gym">В зале</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Тип</label>
                <Select value={filters.type} onValueChange={(v) => updateFilter('type', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все типы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="full-body">Full Body</SelectItem>
                    <SelectItem value="split">Сплит</SelectItem>
                    <SelectItem value="powerlifting">Пауэрлифтинг</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Цель</label>
                <Select value={filters.goal} onValueChange={(v) => updateFilter('goal', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все цели" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все цели</SelectItem>
                    <SelectItem value="fat-loss">Похудение</SelectItem>
                    <SelectItem value="muscle-gain">Набор массы</SelectItem>
                    <SelectItem value="strength">Сила</SelectItem>
                    <SelectItem value="toning">Тонус</SelectItem>
                    <SelectItem value="recomp">Рекомпозиция</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="flex gap-2 mt-4 flex-wrap">
                {Object.entries(filters).map(([key, value]) => {
                  if (value === 'all') return null;
                  return (
                    <Badge 
                      key={key}
                      className="cursor-pointer"
                      style={{ 
                        backgroundColor: 'rgba(230, 55, 70, 0.13)',
                        color: 'hsl(var(--primary))'
                      }}
                      onClick={() => updateFilter(key, 'all')}
                    >
                      {value}
                      <Icon name="X" className="w-3 h-3 ml-1" />
                    </Badge>
                  );
                })}
              </div>
            )}
          </div>

          {filteredPrograms.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="Search" className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-bold mb-2">Программы не найдены</h3>
              <p className="text-muted-foreground mb-4">Попробуй изменить фильтры</p>
              <Button onClick={clearFilters}>Сбросить фильтры</Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredPrograms.map((program) => (
                <Card 
                  key={program.id}
                  className="hover:shadow-lg transition-all overflow-hidden"
                  style={{ borderRadius: '18px', boxShadow: '0 4px 12px rgba(29,54,88,0.05)' }}
                >
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-[1.625rem]">{program.title}</CardTitle>
                    <div className="flex gap-2 flex-wrap mt-2">
                      {program.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary"
                          style={{ 
                            backgroundColor: 'rgba(167, 218, 220, 0.13)',
                            color: 'hsl(var(--main-text))',
                            borderRadius: '12px',
                            padding: '6px 12px'
                          }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">2 месяца</p>
                        <p className="text-2xl font-bold">{program.price2m}₽</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">6 месяцев</p>
                        <p className="text-2xl font-bold">{program.price6m}₽</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/programs/${program.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Подробнее
                        </Button>
                      </Link>
                      <Link to={`/programs/${program.slug}#buy`} className="flex-1">
                        <Button className="w-full">
                          Купить
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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

export default Programs;
