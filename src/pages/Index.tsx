import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 animate-fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
              Аудит системы продаж вашего отеля
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
              Найдём точки роста — дадим пошаговый план
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Не теоретизируем — работаем руками! Проведём диагностику вашей системы продаж, 
              выявим узкие места и дадим конкретные рекомендации с дорожной картой внедрения.
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
            Выберите глубину погружения
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Три формата аудита под разные задачи вашего бизнеса
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl">Экспресс-аудит</CardTitle>
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
                  className="w-full mt-6"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Обсудить формат
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl">Полный аудит</CardTitle>
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
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Rocket" className="text-accent" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl">Аудит + Дорожная карта</CardTitle>
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
                  className="w-full mt-6"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Для кого этот аудит?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Когда стоит заказать анализ системы продаж
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingDown" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Снижается загрузка</h3>
                  <p className="text-muted-foreground">Чувствуете просадку по загрузке или выручке и хотите понять причины</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="RefreshCw" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Работа "на автомате"</h3>
                  <p className="text-muted-foreground">Отдел работает по старинке, а результат не радует</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Перестройка команды</h3>
                  <p className="text-muted-foreground">Хотите перестроить команду под новые задачи сезона</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Выход из стагнации</h3>
                  <p className="text-muted-foreground">Нужно вывести бизнес из застоя без долгих теоретических планов</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Как проходит процесс?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Простая и понятная схема работы
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  1
                </div>
                <h3 className="font-heading font-semibold text-xl">Заявка</h3>
                <p className="text-muted-foreground">Вы оставляете заявку через форму</p>
              </div>
              <Icon name="ArrowRight" className="hidden md:block absolute top-8 -right-8 text-primary/30" size={32} />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  2
                </div>
                <h3 className="font-heading font-semibold text-xl">Брифинг</h3>
                <p className="text-muted-foreground">Обсуждаем ваши ожидания и выбираем формат</p>
              </div>
              <Icon name="ArrowRight" className="hidden md:block absolute top-8 -right-8 text-primary/30" size={32} />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  3
                </div>
                <h3 className="font-heading font-semibold text-xl">Проведение</h3>
                <p className="text-muted-foreground">Проводим аудит онлайн или оффлайн</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  4
                </div>
                <h3 className="font-heading font-semibold text-xl">Отчёт</h3>
                <p className="text-muted-foreground">Получаете детальный отчёт с чек-листами</p>
              </div>
              <Icon name="ArrowRight" className="hidden md:block absolute top-8 -right-8 text-accent/30" size={32} />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  5
                </div>
                <h3 className="font-heading font-semibold text-xl">Дорожная карта</h3>
                <p className="text-muted-foreground">План изменений с приоритетами</p>
              </div>
              <Icon name="ArrowRight" className="hidden md:block absolute top-8 -right-8 text-accent/30" size={32} />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  6
                </div>
                <h3 className="font-heading font-semibold text-xl">Поддержка</h3>
                <p className="text-muted-foreground">Помогаем при внедрении изменений</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Можно ли заказать только часть аудита?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Да, мы предлагаем гибкие форматы. Вы можете начать с экспресс-аудита, 
                а затем при необходимости расширить анализ до полного формата или дорожной карты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Делаете ли вы онлайн-анализ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Да, работаем дистанционно по всей стране. Для региональных объектов проводим 
                аудит онлайн с использованием видеоконференций и удалённого доступа к системам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Что входит в поддержку после аудита?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                После получения отчёта вы можете задавать вопросы по его содержанию. 
                При выборе формата с дорожной картой включена консультационная поддержка 
                на первых этапах внедрения изменений.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Сколько времени занимает аудит?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Экспресс-аудит — 3-5 рабочих дней, полный аудит — 7-10 рабочих дней, 
                аудит с дорожной картой — 10-14 рабочих дней. Сроки зависят от размера 
                и специфики вашего объекта.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Оставьте заявку
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы свяжемся с вами в течение 24 часов и обсудим детали
            </p>
          </div>

          <Card className="shadow-xl">
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

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-heading font-bold">
            Готовы к росту загрузки?
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            10+ лет работы с объектами разных масштабов. Реальные кейсы повышения загрузки 
            даже у небольших семейных отелей.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="https://t.me/your_channel" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="mailto:info@example.com" className="hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="tel:+7" className="hover:text-primary transition-colors">
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
