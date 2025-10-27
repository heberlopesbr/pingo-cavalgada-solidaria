import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-cavalgada.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/80 via-forest-green/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                1º Encontro
                <span className="block text-golden-yellow">Solidário</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-nature-beige">
                Em prol do Projeto Pingo
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl">
                Um evento de confraternização e solidariedade em benefício da inclusão social em Gonçalves/MG
              </p>
            </div>
            
            {/* Event Highlights */}
            <div className="flex flex-wrap gap-6 justify-start">
              <div className="flex items-center gap-3 text-nature-beige">
                <Calendar className="w-6 h-6" />
                <span className="font-semibold">08 Nov 2025</span>
              </div>
              <div className="flex items-center gap-3 text-nature-beige">
                <MapPin className="w-6 h-6" />
                <span className="font-semibold">Sitio Do Pacelli - Estrada do Mundo Novo km 7 - Mundo Novo</span>
              </div>
              <div className="flex items-center gap-3 text-nature-beige">
                <Heart className="w-6 h-6" />
                <span className="font-semibold">Causa Social</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Fazer Inscrição
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-forest-green"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          {/* Info Card */}
          <div className="lg:ml-8">
            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-elevated">
              <div className="space-y-6">
                <div className="text-center border-b border-nature-beige pb-4">
                  <h3 className="text-2xl font-bold text-forest-green">Programação</h3>
                  <p className="text-muted-foreground">08 de Novembro de 2025</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-earth-brown">Concentração:</span>
                    <span className="text-right">Rodoviária de Gonçalves</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-earth-brown">Saída:</span>
                    <span>11h para aqueles que quiserem ir a cavalo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-earth-brown">Chegada:</span>
                    <span>13h - Sitio Do Pacelli</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-nature-beige">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">R$ 150,00</p>
                    <p className="text-sm text-muted-foreground">+ 1kg de alimento não perecível ou produto de higiene</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;