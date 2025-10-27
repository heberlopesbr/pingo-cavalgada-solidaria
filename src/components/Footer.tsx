import { Heart, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-forest-green text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo/Title */}
          <div className="space-y-2">
            <img 
              src={logo} 
              alt="Logo do Evento" 
              className="w-48 h-48 mx-auto mb-3 object-contain"
            />
            <h3 className="text-2xl font-bold text-golden-yellow">
              1º Encontro Solidário
            </h3>
            <p className="text-nature-beige">Em prol do Projeto Pingo</p>
          </div>

          {/* Event Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Sitio Do Pacelli - Mundo Novo</span>
            </div>
            <div className="hidden md:block text-nature-beige">•</div>
            <div>08 de Novembro de 2025</div>
            <div className="hidden md:block text-nature-beige">•</div>
            <div>R$ 150,00 + 1kg de alimento</div>
          </div>

          {/* Separator */}
          <div className="border-t border-nature-beige/30 pt-6">
            <div className="flex items-center justify-center gap-2 text-sm text-nature-beige">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-golden-yellow fill-current" />
              <span>para uma causa nobre</span>
            </div>
            
            <div className="mt-4 text-xs text-nature-beige/80">
              <p>
                Toda renda destinada ao Projeto Pingo
              </p>
              <p className="mt-2">
                Organização: José Pacelli Junior | Gonçalves - MG
              </p>
              <p className="mt-2">
                Apoio: Prefeitura Municipal de Gonçalves - MG
              </p>
            </div>
          </div>

          {/* Final Message */}
          <div className="pt-4 border-t border-nature-beige/30">
            <p className="text-sm text-golden-yellow font-semibold">
              "Unidos pela inclusão, fortalecidos pela solidariedade"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;