import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(5500000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTerm, setLoanTerm] = useState(15);

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment.toFixed(0);
  };

  const properties = [
    {
      id: 1,
      title: 'Комната в коммунальной квартире',
      address: 'ул. Ясеневая, д. 34',
      area: '11.6 м²',
      additionalArea: 'Гардеробная 6.8 м²',
      floor: '2 этаж',
      metro: 'м. Зябликово (700 м) / м. Красногвардейская',
      price: '5 500 000 ₽',
      image: 'https://cdn.poehali.dev/files/IMG_5308.jpeg',
      images: ['https://cdn.poehali.dev/files/IMG_5308.jpeg', 'https://cdn.poehali.dev/files/IMG_5232.jpeg'],
      features: ['Гардеробная', 'Балкон', '10 минут до метро', 'Юг Москвы']
    },
    {
      id: 2,
      title: 'Жилые апартаменты в стиле Loft',
      address: 'г. Видное, ул. Ольховая, д. 9',
      area: '25 м²',
      additionalArea: 'Доля в МОП 7 м²',
      floor: '1 этаж',
      metro: '6 км от м. Зябликово',
      price: '6 000 000 ₽',
      image: 'https://cdn.poehali.dev/projects/3b460f12-f4b2-445b-a33e-593154c5a33a/files/1af60109-43b8-464e-b564-48ebbdd19bc4.jpg',
      features: ['Стиль Loft', 'Хороший ремонт', 'Для бизнеса', 'Готово к проживанию']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Недвижимость Москва
            </h1>
            <div className="flex gap-6 items-center">
              <a href="#objects" className="text-sm font-medium hover:text-primary transition-colors">Объекты</a>
              <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
              <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Два объекта недвижимости
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Идеально подходят для большой семьи с пропиской или для бизнеса. Расположены в 6 км друг от друга на юге Москвы.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Icon name="MapPin" className="mr-2" size={20} />
                Показать на карте
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="objects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Объекты недвижимости
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {properties.map((property, index) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 border-purple-100" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold">
                    {property.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{property.title}</CardTitle>
                  <CardDescription className="text-base flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    {property.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Home" size={18} className="text-secondary" />
                      <span className="font-semibold">Площадь:</span> {property.area}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Plus" size={18} className="text-secondary" />
                      <span className="font-semibold">Дополнительно:</span> {property.additionalArea}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Building" size={18} className="text-secondary" />
                      <span className="font-semibold">Этаж:</span> {property.floor}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Train" size={18} className="text-secondary" />
                      <span className="font-semibold">Метро:</span> {property.metro}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-primary text-xs rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <Icon name="Phone" className="mr-2" size={18} />
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Галерея объектов
          </h2>
          <Tabs defaultValue="property1" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="property1" className="text-base">Комната на Ясеневой</TabsTrigger>
              <TabsTrigger value="property2" className="text-base">Апартаменты в Видном</TabsTrigger>
            </TabsList>
            <TabsContent value="property1" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <img src="https://cdn.poehali.dev/files/IMG_5308.jpeg" alt="Комната 11.6 кв.м" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                <img src="https://cdn.poehali.dev/projects/3b460f12-f4b2-445b-a33e-593154c5a33a/bucket/db02bc9f-b178-4d6e-9428-18fe9548ab3d.jpeg" alt="Кладовая 6.8 кв.м" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://www.avito.ru/moskva/komnaty/komnata_18_m_v_4-k._212_et._3070220144" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium">
                  <Icon name="ExternalLink" size={16} />
                  Авито
                </a>
              </div>
            </TabsContent>
            <TabsContent value="property2" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <img src="https://cdn.poehali.dev/projects/3b460f12-f4b2-445b-a33e-593154c5a33a/bucket/5ad4f5f4-4c4f-441f-a36a-7028021440b5.png" alt="Дизайн-проект апартаментов" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                <img src="https://cdn.poehali.dev/projects/3b460f12-f4b2-445b-a33e-593154c5a33a/files/8052b955-0faa-4529-bcdd-ec96ce52cc4c.jpg" alt="Экстерьер" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                <img src="https://cdn.poehali.dev/projects/3b460f12-f4b2-445b-a33e-593154c5a33a/bucket/39413c6b-ae63-443b-acc4-040495c6b664.jpeg" alt="Прихожая" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                <img src="https://cdn.poehali.dev/projects/3b460f12-f4b2-445b-a33e-593154c5a33a/bucket/b2b5b705-9361-41b4-842e-e5b269c8bf26.jpg" alt="Двор и паркинг" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://m.avito.ru/vidnoe/kvartiry/apartamenty-studiya_25_m_116_et._7559489067" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium">
                  <Icon name="ExternalLink" size={16} />
                  Авито
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="calculator" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ипотечный калькулятор
            </h2>
            <p className="text-center text-gray-600 mb-8">Рассчитайте ежемесячный платеж по ипотеке</p>
            <Card className="border-2 border-purple-100 shadow-xl">
              <CardContent className="pt-6">
                <div className="space-y-8">
                  <div>
                    <Label htmlFor="amount" className="text-base font-semibold mb-3 block">
                      Стоимость объекта: <span className="text-primary">{loanAmount.toLocaleString('ru-RU')} ₽</span>
                    </Label>
                    <Slider
                      id="amount"
                      min={1000000}
                      max={10000000}
                      step={100000}
                      value={[loanAmount]}
                      onValueChange={(value) => setLoanAmount(value[0])}
                      className="mb-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="rate" className="text-base font-semibold mb-3 block">
                      Процентная ставка: <span className="text-primary">{interestRate}%</span>
                    </Label>
                    <Slider
                      id="rate"
                      min={5}
                      max={20}
                      step={0.5}
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      className="mb-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="term" className="text-base font-semibold mb-3 block">
                      Срок кредита: <span className="text-primary">{loanTerm} лет</span>
                    </Label>
                    <Slider
                      id="term"
                      min={1}
                      max={30}
                      step={1}
                      value={[loanTerm]}
                      onValueChange={(value) => setLoanTerm(value[0])}
                      className="mb-2"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg text-center">
                    <p className="text-sm text-gray-600 mb-2">Ежемесячный платеж</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {calculateMonthlyPayment().toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Преимущества покупки
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 border-purple-100 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Для семьи</h3>
                  <p className="text-gray-600">Отличный вариант для большой семьи с возможностью прописки</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Briefcase" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Для бизнеса</h3>
                  <p className="text-gray-600">Идеально подходит для коммерческого использования</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Удобное расположение</h3>
                  <p className="text-gray-600">Близко к метро, 6 км между объектами</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Связаться с нами
            </h2>
            <Card className="border-2 border-purple-100 shadow-xl">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Input id="message" placeholder="Интересует комната на Ясеневой..." className="mt-1" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">
              Расположение на карте
            </h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f5e3d6c9b8a4d7e5c6b3a2f1e0d9c8b7a6f5e4d3c2b1a0&amp;source=constructor"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  className="w-full"
                ></iframe>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="bg-white/90 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Комната на Ясеневой
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">ул. Ясеневая, д. 34</p>
                  <p className="text-sm text-gray-600">м. Зябликово — 700 метров</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Апартаменты в Видном
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">г. Видное, ул. Ольховая, д. 9</p>
                  <p className="text-sm text-gray-600">6 км от Ясеневой</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Недвижимость Москва. Все права защищены.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;