import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const [painPoints, setPainPoints] = useState<string[]>([]);

  const togglePainPoint = (point: string) => {
    setPainPoints(prev => 
      prev.includes(point) 
        ? prev.filter(p => p !== point)
        : [...prev, point]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = painPoints.length > 0 
      ? `${formData.message}\n\nОтмеченные проблемы: ${painPoints.join(', ')}`
      : formData.message;
    
    toast({
      title: "Заявка отправлена! ✅",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });
    setFormData({ name: '', contact: '', message: '' });
    setPainPoints([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 animate-fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
              Аудит системы продаж вашего отеля
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
              Найдём точки роста — покажем шаги к росту загрузки 🚀
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Выявим узкие места, дадим пошаговый план изменений. Без воды, только практика.
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить аудит
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Выберите свой уровень погружения
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Три формата аудита под разные задачи вашего бизнеса
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl">⚡ Экспресс-аудит</CardTitle>
                <CardDescription className="text-base">Быстрая диагностика каналов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Быстрая диагностика каналов привлечения гостей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Анализ эффективности рекламных инструментов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Чек-лист проблемных зон + короткие рекомендации</span>
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 group-hover:shadow-lg transition-shadow"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Обсудить формат
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary relative group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                ⭐ Популярный
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Target" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl">🎯 Полный аудит</CardTitle>
                <CardDescription className="text-base">Глубокий разбор системы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Глубокий разбор всей цепочки работы отдела бронирования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>SWOT-анализ рынка, конкурентов, сервисная документация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Подробная карта потерь + индивидуальный план действий</span>
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-shadow"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Rocket" className="text-accent" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl">🚀 Аудит + Дорожная карта</CardTitle>
                <CardDescription className="text-base">Максимум результата</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Весь полный аудит + персональная инструкция на полгода</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>KPI для каждого блока: продажи, PR, event-маркетинг</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Связка офлайн & digital-инструментов продвижения</span>
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 group-hover:shadow-lg transition-shadow"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            💡 Что болит? Отметьте свои проблемы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Это поможет нам подготовить персональное предложение
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { id: 'loading', label: '📉 Снижается загрузка', desc: 'Чувствуете просадку по загрузке или выручке' },
              { id: 'autopilot', label: '🔄 Работа "на автомате"', desc: 'Отдел работает по старинке, а результат не радует' },
              { id: 'team', label: '👥 Нужна перестройка команды', desc: 'Хотите перестроить команду под новые задачи' },
              { id: 'stagnation', label: '📊 Застой в бизнесе', desc: 'Нужно вывести бизнес из стагнации без долгих планов' }
            ].map(point => (
              <Card 
                key={point.id}
                className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-lg ${
                  painPoints.includes(point.id) ? 'border-primary bg-primary/5 shadow-md' : 'border-border'
                }`}
                onClick={() => togglePainPoint(point.id)}
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <Checkbox 
                    checked={painPoints.includes(point.id)} 
                    className="mt-1"
                    onCheckedChange={() => togglePainPoint(point.id)}
                  />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{point.label}</h3>
                    <p className="text-muted-foreground text-sm">{point.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {painPoints.length > 0 && (
            <div className="text-center mt-8 animate-fade-in">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 shadow-xl"
              >
                Оставить заявку с этими проблемами
                <Icon name="ArrowDown" className="ml-2" size={20} />
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            📈 Реальные результаты наших клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Конкретные цифры роста после аудита
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="text-5xl font-bold text-primary">+34%</div>
                <h3 className="font-semibold text-xl">Рост прямых броней</h3>
                <p className="text-muted-foreground">
                  Бутик-отель в Сочи. После экспресс-аудита оптимизировали 3 канала — 
                  рост прямых бронирований за 2 месяца.
                </p>
                <div className="text-sm text-muted-foreground italic">
                  — Семейный отель, 24 номера
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="text-5xl font-bold text-accent">+52%</div>
                <h3 className="font-semibold text-xl">Увеличение выручки</h3>
                <p className="text-muted-foreground">
                  Загородный комплекс. Полный аудит + внедрение дорожной карты. 
                  Пересмотрели всю систему продаж за полгода.
                </p>
                <div className="text-sm text-muted-foreground italic">
                  — База отдыха, 48 номеров
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="text-5xl font-bold text-primary">-28%</div>
                <h3 className="font-semibold text-xl">Снижение затрат на рекламу</h3>
                <p className="text-muted-foreground">
                  Городской отель. Убрали неэффективные каналы, перераспределили бюджет. 
                  Загрузка выросла при меньших затратах.
                </p>
                <div className="text-sm text-muted-foreground italic">
                  — Городской отель, 3 звезды
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            🛠️ Как проходит процесс?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Простая и понятная схема работы
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="font-heading font-semibold text-xl">📝 Заявка</h3>
                <p className="text-muted-foreground">Вы оставляете заявку через форму ниже</p>
              </div>
              <div className="hidden md:block absolute top-10 -right-4 text-primary/30">
                <Icon name="ArrowRight" size={32} />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="font-heading font-semibold text-xl">💬 Брифинг</h3>
                <p className="text-muted-foreground">Обсуждаем ваши ожидания и выбираем формат</p>
              </div>
              <div className="hidden md:block absolute top-10 -right-4 text-primary/30">
                <Icon name="ArrowRight" size={32} />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="font-heading font-semibold text-xl">🔍 Проведение</h3>
                <p className="text-muted-foreground">Проводим аудит онлайн или оффлайн</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg hover:scale-110 transition-transform">
                  4
                </div>
                <h3 className="font-heading font-semibold text-xl">📊 Отчёт</h3>
                <p className="text-muted-foreground">Получаете детальный отчёт с чек-листами</p>
              </div>
              <div className="hidden md:block absolute top-10 -right-4 text-accent/30">
                <Icon name="ArrowRight" size={32} />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg hover:scale-110 transition-transform">
                  5
                </div>
                <h3 className="font-heading font-semibold text-xl">🗺️ Дорожная карта</h3>
                <p className="text-muted-foreground">План изменений с приоритетами</p>
              </div>
              <div className="hidden md:block absolute top-10 -right-4 text-accent/30">
                <Icon name="ArrowRight" size={32} />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg hover:scale-110 transition-transform">
                  6
                </div>
                <h3 className="font-heading font-semibold text-xl">🤝 Поддержка</h3>
                <p className="text-muted-foreground">Помогаем при внедрении изменений</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">✨ О нашей экспертизе</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            10+ лет работы с объектами разных масштабов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные кейсы повышения загрузки даже у небольших семейных отелей. 
            Работаем с гостиницами от 10 до 200 номеров по всей России. 
            Знаем специфику курортных, городских и загородных объектов.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">проведённых аудитов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">86%</div>
              <div className="text-sm text-muted-foreground">клиентов вернулись</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">+38%</div>
              <div className="text-sm text-muted-foreground">средний рост выручки</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            ❓ Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Можно ли заказать только часть аудита?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Да, мы предлагаем гибкие форматы. Вы можете начать с экспресс-аудита, 
                а затем при необходимости расширить анализ до полного формата или дорожной карты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Делаете ли вы онлайн-анализ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Да, работаем дистанционно по всей стране. Для региональных объектов проводим 
                аудит онлайн с использованием видеоконференций и удалённого доступа к системам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Что входит в поддержку после аудита?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                После получения отчёта вы можете задавать вопросы по его содержанию. 
                При выборе формата с дорожной картой включена консультационная поддержка 
                на первых этапах внедрения изменений.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Сколько времени занимает аудит?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Экспресс-аудит — 3-5 рабочих дней, полный аудит — 7-10 рабочих дней, 
                аудит с дорожной картой — 10-14 рабочих дней. Сроки зависят от размера 
                и специфики вашего объекта.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Как проходит оплата услуг?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Работаем по договору с физ. и юр. лицами. Оплата в 2 этапа: 50% предоплата 
                перед началом работ, 50% после предоставления отчёта. Возможна оплата по безналу.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              📬 Оставьте заявку
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы свяжемся с вами в течение 24 часов и обсудим детали
            </p>
          </div>

          <Card className="shadow-xl border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Имя *
                  </label>
                  <Input
                    id="name"
                    placeholder="Как вас зовут?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold mb-2">
                    Телефон или Email *
                  </label>
                  <Input
                    id="contact"
                    placeholder="+7 (___) ___-__-__ или email@example.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Опишите вашу задачу
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем отеле и что хотели бы узнать..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="text-base resize-none"
                  />
                </div>

                {painPoints.length > 0 && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">Вы отметили следующие проблемы:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      {painPoints.map(point => {
                        const labels: Record<string, string> = {
                          loading: '📉 Снижается загрузка',
                          autopilot: '🔄 Работа "на автомате"',
                          team: '👥 Нужна перестройка команды',
                          stagnation: '📊 Застой в бизнесе'
                        };
                        return <li key={point}>• {labels[point]}</li>;
                      })}
                    </ul>
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold">
            Готовы к росту загрузки? 🚀
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Работаем с отелями любого масштаба — от семейных гостиниц до крупных комплексов. 
            Первая консультация бесплатно!
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="https://t.me/your_channel" className="hover:text-primary transition-colors hover:scale-110 transform duration-200" aria-label="Telegram">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="mailto:info@example.com" className="hover:text-primary transition-colors hover:scale-110 transform duration-200" aria-label="Email">
              <Icon name="Mail" size={24} />
            </a>
            <a href="tel:+7" className="hover:text-primary transition-colors hover:scale-110 transform duration-200" aria-label="Phone">
              <Icon name="Phone" size={24} />
            </a>
          </div>
          <div className="pt-8 text-sm text-white/60">
            © 2024 Аудит системы продаж. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
