import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  DollarSign,
  Users,
  Heart
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-nature-beige">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Participação
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-forest-green mb-6">
            Faça Parte desta Causa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Junte-se a nós nesta jornada de solidariedade e confraternização. 
            Sua participação faz a diferença!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Investment Information */}
          <Card className="shadow-warm border-accent/20">
            <CardHeader className="text-center bg-gradient-to-r from-accent to-golden-yellow text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <DollarSign className="w-6 h-6" />
                Investimento
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-accent mb-2">R$ 200,00</div>
                <p className="text-muted-foreground">por participante</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-forest-green mb-4">O que está incluso:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Almoço e bebidas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Sobremesas (sorvetes e doces)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Camiseta oficial do evento</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Atividades de equoterapia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Apresentação musical</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="cta" 
                className="w-full text-lg py-6"
                onClick={() => {
                  const registrationSection = document.getElementById('registration');
                  registrationSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Quero Participar
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-xl text-forest-green flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-nature-beige rounded-lg">
                  <h4 className="font-semibold text-earth-brown text-lg mb-2">José Pacelli Junior</h4>
                  <p className="text-sm text-muted-foreground">Organizador do Evento</p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    variant="cta" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/5512991319888', '_blank')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    WhatsApp: (12) 99131-9888
                  </Button>
                  
                  <div className="flex items-center gap-3 p-3 hover:bg-nature-beige rounded-lg transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-sm">Email disponível mediante solicitação</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 hover:bg-nature-beige rounded-lg transition-colors">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm">Gonçalves - Minas Gerais</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-forest-green to-earth-brown text-white shadow-elevated">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-golden-yellow" />
                <h4 className="font-semibold text-lg mb-2">Apoie uma Causa Nobre</h4>
                <p className="text-sm opacity-90">
                  Sua participação contribui diretamente para o Projeto Pingo de inclusão social
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h4 className="font-semibold text-forest-green">Lembrete Importante</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Data:</strong> 08 de Novembro de 2025<br />
                  <strong>Concentração:</strong> 9h na Rodoviária de Gonçalves<br />
                  <strong>Saída:</strong> 10h em ponto
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;