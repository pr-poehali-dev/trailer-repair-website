import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
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
    </>
  );
};

export default HeroSection;
