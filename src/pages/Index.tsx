import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    address: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', service: '', date: '', address: '', comment: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-accent">ТехСервис</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </nav>
            <Button onClick={() => scrollToSection('call-master')} size="lg" className="hidden md:flex">
              Вызвать мастера
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-accent leading-tight">
                Ремонт прицепов и спецтехники
                <span className="text-primary block mt-2">с выездом к вам</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональное техническое обслуживание полуприцепов, китайских тягачей и спецтехники. Работаем быстро, качественно и с гарантией.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('call-master')} size="lg" className="text-lg px-8 py-6">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Вызвать мастера
                </Button>
                <Button onClick={() => scrollToSection('services')} variant="outline" size="lg" className="text-lg px-8 py-6">
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ca9628e3-5e38-4831-90ff-638574bc3d53/files/f3aa8dbc-7902-40ff-ad61-86d9de751b21.jpg" 
                alt="Ремонт прицепов"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-5xl font-bold mb-2">12+</div>
              <div className="text-gray-300">лет опыта</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-gray-300">клиентов</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">доступность</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-gray-300">гарантия</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-accent">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию коммерческой техники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow animate-scale-in border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Truck" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">Ремонт прицепов</CardTitle>
                <CardDescription className="text-base">Комплексный ремонт всех типов прицепов и полуприцепов</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Ремонт ходовой части</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Замена тормозных систем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Электрика и освещение</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in border-t-4 border-t-secondary" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl">Плановое ТО</CardTitle>
                <CardDescription className="text-base">Регулярное техническое обслуживание спецтехники</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Замена масла и фильтров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Диагностика систем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Проверка безопасности</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in border-t-4 border-t-primary" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">Выезд к клиенту</CardTitle>
                <CardDescription className="text-base">Мобильная мастерская приедет в любую точку города</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Срочный ремонт на месте</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Профессиональное оборудование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Работаем 24/7</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in border-t-4 border-t-secondary" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Package" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl">Китайские тягачи</CardTitle>
                <CardDescription className="text-base">Специализируемся на технике китайского производства</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Оригинальные запчасти</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Знание конструктивных особенностей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Компьютерная диагностика</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in border-t-4 border-t-primary" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">Сварочные работы</CardTitle>
                <CardDescription className="text-base">Ремонт рам, кузовов и металлоконструкций</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Аргонная сварка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Восстановление геометрии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Усиление конструкций</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in border-t-4 border-t-secondary" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="AlertCircle" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl">Экстренный ремонт</CardTitle>
                <CardDescription className="text-base">Устранение поломок в кратчайшие сроки</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Приезд в течение часа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Диагностика на месте</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Склад запчастей</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-accent">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрый отклик</h3>
              <p className="text-gray-600">Выезд мастера в течение 1-2 часов после заявки</p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-secondary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Опытные мастера</h3>
              <p className="text-gray-600">Сертифицированные специалисты с опытом более 10 лет</p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Официальная гарантия на все виды работ</p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" className="text-secondary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Честные цены</h3>
              <p className="text-gray-600">Прозрачное ценообразование без скрытых платежей</p>
            </div>
          </div>
        </div>
      </section>

      <section id="call-master" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-accent">Вызвать мастера</h2>
              <p className="text-xl text-gray-600">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input 
                        id="name" 
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Тип услуги *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trailer-repair">Ремонт прицепа</SelectItem>
                        <SelectItem value="maintenance">Плановое ТО</SelectItem>
                        <SelectItem value="onsite">Выезд мастера</SelectItem>
                        <SelectItem value="chinese-trucks">ТО китайских тягачей</SelectItem>
                        <SelectItem value="welding">Сварочные работы</SelectItem>
                        <SelectItem value="emergency">Экстренный ремонт</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Желаемая дата</Label>
                      <Input 
                        id="date" 
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Адрес выезда</Label>
                      <Input 
                        id="address" 
                        placeholder="г. Москва, ул. Примерная, д. 1"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea 
                      id="comment" 
                      placeholder="Опишите проблему или детали заказа"
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-accent">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <a href="tel:+79991234567" className="text-lg text-primary hover:underline">
                  +7 (999) 123-45-67
                </a>
                <p className="text-gray-600 mt-2">Круглосуточно</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href="mailto:info@techservice.ru" className="text-lg text-secondary hover:underline">
                  info@techservice.ru
                </a>
                <p className="text-gray-600 mt-2">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p className="text-lg">г. Москва</p>
                <p className="text-gray-600 mt-2">Выезжаем по всему городу</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" size={32} />
                <span className="text-2xl font-bold">ТехСервис</span>
              </div>
              <p className="text-gray-300">
                Профессиональный ремонт и обслуживание коммерческого транспорта
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Наши услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Ремонт прицепов</li>
                <li>Плановое ТО</li>
                <li>Выезд к клиенту</li>
                <li>Обслуживание китайских тягачей</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Режим работы</h4>
              <p className="text-gray-300 mb-2">Круглосуточно, без выходных</p>
              <p className="text-gray-300">24/7 для ваших заявок</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ТехСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
