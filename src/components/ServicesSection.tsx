import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  return (
    <>
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
    </>
  );
};

export default ServicesSection;
