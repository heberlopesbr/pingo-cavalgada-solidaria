import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Phone, 
  Mail, 
  CreditCard,
  QrCode,
  CheckCircle,
  MessageCircle
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Using the uploaded QR code image

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    shirtSize: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      shirtSize: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    // Here you would typically send the data to a backend
  };

  return (
    <section className="py-20 bg-gradient-to-b from-nature-beige to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Inscrições
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-forest-green mb-6">
            Faça sua Inscrição
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preencha o formulário abaixo e realize o pagamento via PIX para garantir sua participação
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Registration Form */}
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-green flex items-center gap-2">
                  <User className="w-6 h-6" />
                  Dados do Participante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu.email@exemplo.com"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Sua cidade"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shirtSize">Tamanho da Camiseta *</Label>
                    <Select value={formData.shirtSize} onValueChange={handleSelectChange} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o tamanho" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PP">PP</SelectItem>
                        <SelectItem value="P">P</SelectItem>
                        <SelectItem value="M">M</SelectItem>
                        <SelectItem value="G">G</SelectItem>
                        <SelectItem value="GG">GG</SelectItem>
                        <SelectItem value="XG">XG</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-accent mb-2">R$ 200,00</div>
                      <p className="text-sm text-muted-foreground">Valor da participação</p>
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="cta" 
                      className="w-full text-lg py-6"
                    >
                      Confirmar Inscrição
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* PIX Payment */}
            <Card className="shadow-warm">
              <CardHeader className="text-center bg-gradient-to-r from-accent to-golden-yellow text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <QrCode className="w-6 h-6" />
                  Pagamento via PIX
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="bg-white p-4 rounded-lg border-2 border-accent/20">
                    <img 
                      src="/lovable-uploads/70421fef-b519-409f-9180-e6b7862ffe11.png" 
                      alt="QR Code PIX para pagamento"
                      className="w-full max-w-xs mx-auto"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-forest-green mb-2">Como pagar:</h4>
                      <ol className="text-sm text-left space-y-2 list-decimal list-inside">
                        <li>Abra o app do seu banco</li>
                        <li>Escolha a opção PIX</li>
                        <li>Escaneie o código QR acima</li>
                        <li>Confirme o pagamento de R$ 200,00</li>
                        <li>Envie o comprovante via WhatsApp</li>
                      </ol>
                    </div>
                    
                    <div className="bg-nature-beige p-4 rounded-lg">
                      <h5 className="font-semibold text-earth-brown mb-2">Dados do PIX:</h5>
                      <div className="text-sm space-y-1">
                        <p><strong>Favorecido:</strong> Jose Pacelli Dias de Freitas Junior</p>
                        <p><strong>Valor:</strong> R$ 200,00</p>
                        <p className="text-xs text-muted-foreground break-all">
                          <strong>Chave PIX:</strong> fcd90b3a-b45a-4b3b-8a80-02110e137024
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <CheckCircle className="w-4 h-4" />
                    <span>Pagamento seguro via PIX</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Donations and Sponsors Section */}
          <Card className="mt-8 shadow-warm border-accent/30">
            <CardHeader className="text-center bg-gradient-to-r from-golden-yellow to-accent text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Doações e Patrocínios
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-6">
                Empresas e pessoas interessadas em apoiar este evento solidário através de doações ou patrocínio, 
                entre em contato conosco pelo WhatsApp.
              </p>
              <Button 
                variant="cta" 
                className="w-full text-lg py-6"
                onClick={() => window.open('https://wa.me/5512991319888', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar via WhatsApp
              </Button>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Após o pagamento, sua inscrição será confirmada em até 24 horas. 
              Em caso de dúvidas, entre em contato com José Pacelli Junior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;