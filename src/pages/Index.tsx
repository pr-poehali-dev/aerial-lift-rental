import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const equipment = [
    {
      id: 1,
      name: "Автовышка 18м",
      height: "18 метров",
      price: "от 1 500 ₽/час",
      type: "Шоссейная/Полноприводная",
      description: "Компактная автовышка для работы на высоте до 18 метров",
      image: "https://cdn.poehali.dev/files/0b05dee7-5825-4bfe-a4bb-e4448f8938cf.jpg",
      features: ["4WD привод", "Стабилизаторы", "Корзина 2 чел."]
    },
    {
      id: 2,
      name: "Автовышка 22м",
      height: "22 метра",
      price: "от 1 900 ₽/час",
      type: "Шоссейная/Полноприводная",
      description: "Универсальная автовышка для большинства высотных работ",
      image: "https://cdn.poehali.dev/files/6f4647d9-983b-4a3a-be3b-f20d8f0b6d68.jpg",
      features: ["Поворотная стрела", "Выносные опоры", "Грузоподъемность 200кг"]
    },
    {
      id: 3,
      name: "Автовышка 28м",
      height: "28 метров",
      price: "от 2 200 ₽/час",
      type: "Шоссейная/Полноприводная",
      description: "Мощная автовышка для сложных высотных работ",
      image: "https://cdn.poehali.dev/files/bb6a944b-cbe8-4038-8007-c9e4bb73d23e.jpg",
      features: ["Телескопическая стрела", "Повышенная устойчивость", "Всепогодное использование"]
    }
  ];

  const services = [
    {
      icon: "Building2",
      title: "Строительные работы",
      description: "Фасадные работы, монтаж конструкций, покраска зданий"
    },
    {
      icon: "Zap",
      title: "Электромонтаж",
      description: "Установка освещения, прокладка кабелей, ремонт ЛЭП"
    },
    {
      icon: "TreePine",
      title: "Благоустройство",
      description: "Обрезка деревьев, уход за зелеными насаждениями"
    },
    {
      icon: "Wrench",
      title: "Техобслуживание",
      description: "Ремонт фасадов, чистка окон, обслуживание зданий"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Truck" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ООО "Оптима Групп"</h1>
                <p className="text-sm text-muted-foreground">Аренда автовышек в Нижегородской области</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
              Профессиональная аренда техники
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Аренда автовышек
              <span className="text-accent block">в Нижегородской области</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Полноприводные и шоссейные автовышки по всей Нижегородской области
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="#catalog">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Каталог техники
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/90">
              <div className="flex items-center">
                <Icon name="Clock" size={20} className="mr-2 text-accent" />
                Работаем с 07:00 до 24:00
              </div>
              <div className="flex items-center">
                <Icon name="Shield" size={20} className="mr-2 text-accent" />
                Страховка включена
              </div>
              <div className="flex items-center">
                <Icon name="Users" size={20} className="mr-2 text-accent" />
                Опытные операторы
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section id="catalog" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наш автопарк</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Автовышки в наличии</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современная техника европейских производителей с полным техническим обслуживанием
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow bg-card">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {item.height}
                    </Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Тип привода:</span>
                      <span className="text-sm font-medium">{item.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Заказать
                      </Button>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Сферы применения</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Виды работ</h3>
            <p className="text-lg text-muted-foreground">
              Наши автовышки подходят для широкого спектра высотных работ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="prices" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Стоимость аренды</h3>
            <p className="text-lg text-muted-foreground">
              Честные цены без скрытых платежей
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-center">Почасовая аренда</CardTitle>
                <CardDescription className="text-center">
                  В стоимость включено: техника + оператор + топливо
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {equipment.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{item.price}</div>
                        <div className="text-sm text-muted-foreground">{item.id === 3 ? 'минимум 8 часов' : 'минимум 4 часа'}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Icon name="Info" size={20} className="mr-2 text-accent" />
                    Дополнительные услуги
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span>Подача по Нижнему Новгороду:</span>
                      <span className="font-medium">бесплатно</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Работа в выходные/праздники:</span>
                      <span className="font-medium">+20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ночная смена:</span>
                      <span className="font-medium">по договорённости</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Выезд по области:</span>
                      <span className="font-medium">40км - 1 час работы</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Свяжитесь с нами</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground">
              Быстрый заказ и консультация по телефону
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Мы перезвоним в течение 5 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name') || 'Не указано';
                  const phone = formData.get('phone') || 'Не указан';
                  const height = formData.get('height') || 'Не указана';
                  
                  const subject = encodeURIComponent('Заявка на аренду автовышки от ' + name);
                  const body = encodeURIComponent(
                    `Новая заявка на аренду автовышки\n\n` +
                    `Имя: ${name}\n` +
                    `Телефон: ${phone}\n` +
                    `Высота работ: ${height}\n\n` +
                    `Отправлено с сайта ООО "Оптима Групп"`
                  );
                  
                  window.location.href = `mailto:optima1920@gmail.com?subject=${subject}&body=${body}`;
                }}>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <input 
                      name="name"
                      type="text" 
                      placeholder="Ваше имя"
                      required
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <input 
                      name="phone"
                      type="tel" 
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Высота работ</label>
                    <select name="height" className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                      <option value="">Выберите высоту</option>
                      <option value="18 метров">18 метров</option>
                      <option value="22 метра">22 метра</option>
                      <option value="28 метров">28 метров</option>
                      <option value="Другая высота">Другая высота</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-2xl font-bold text-primary">+7 (901) 801-69-23</p>
                      <p className="text-sm text-muted-foreground">с 07:00 до 24:00, без выходных</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-foreground">г. Нижний Новгород, ул. Долгополова, д. 79, оф 25</p>
                      <p className="text-sm text-muted-foreground">Офис компании</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Режим работы</h4>
                      <p className="text-foreground">с 07:00 до 24:00</p>
                      <p className="text-sm text-muted-foreground">Без выходных</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Truck" className="text-primary-foreground" size={20} />
                </div>
                <span className="text-xl font-bold">ООО "Оптима Групп"</span>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональная аренда автовышек для высотных работ любой сложности
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Аренда автовышек 18м</li>
                <li>Аренда автовышек 22м</li>
                <li>Аренда автовышек 28м</li>
                <li>Полноприводная техника</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>О нас</li>
                <li>Наш автопарк</li>
                <li>Лицензии</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>+7 (901) 801-69-23</p>
                <p>info@optima-group.ru</p>
                <p>г. Нижний Новгород, ул. Долгополова, д. 79, оф 25</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 ООО "Оптима Групп". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}