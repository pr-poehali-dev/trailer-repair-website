import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
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

  return (
    <>
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
                <span className="text-2xl font-bold">Ремонт Прицепов</span>
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
            <p>&copy; 2024 Ремонт Прицепов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;