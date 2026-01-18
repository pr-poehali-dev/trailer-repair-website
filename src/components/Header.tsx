import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
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
  );
};

export default Header;
