import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Utensils, 
  Music, 
  Shirt, 
  Heart, 
  Users, 
  GraduationCap,
  MapPin 
} from "lucide-react";

const AboutEvent = () => {
  const activities = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Alimentação Completa",
      description: "Almoço, bebidas, refrigerantes, água, sorvetes e doces para todos os participantes"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Atração Musical",
      description: "Apresentação de banda ao vivo para animar a confraternização"
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Camiseta Oficial",
      description: "Cada participante receberá uma camiseta personalizada do evento"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Equoterapia",
      description: "Profissionais especializadas acompanharão atividades terapêuticas com cavalos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-warm-cream to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Sobre o Evento
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-forest-green mb-6">
            Uma Jornada de Solidariedade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O 1º Encontro Solidário é mais que um evento - é uma oportunidade de unir 
            a comunidade em prol de uma causa nobre: o fortalecimento do Projeto Pingo 
            de inclusão social em Gonçalves.
          </p>
        </div>

        {/* Route Information */}
        <div className="mb-16">
          <Card className="bg-white shadow-warm border-nature-beige">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-forest-green flex items-center justify-center gap-2">
                <MapPin className="w-6 h-6" />
                Percurso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="text-center p-4 bg-nature-beige rounded-lg">
                  <h4 className="font-semibold text-earth-brown">Saída</h4>
                  <p className="text-sm">Rodoviária de Gonçalves</p>
                  <p className="text-xs text-muted-foreground">11:00h</p>
                </div>
                <div className="hidden md:block text-4xl text-accent">→</div>
                <div className="text-center p-4 bg-nature-beige rounded-lg">
                  <h4 className="font-semibold text-earth-brown">Parada</h4>
                  <p className="text-sm">Pousada Vida Verde</p>
                </div>
                <div className="hidden md:block text-4xl text-accent">→</div>
                <div className="text-center p-4 bg-accent text-white rounded-lg">
                  <h4 className="font-semibold">Chegada</h4>
                  <p className="text-sm">Recanto da Paz</p>
                  <p className="text-xs opacity-90">13:00h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card key={index} className="text-center hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {activity.icon}
                </div>
                <h3 className="font-semibold text-forest-green mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Impact */}
        <Card className="bg-gradient-to-r from-forest-green to-earth-brown text-white">
          <CardContent className="p-8 md:p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-golden-yellow" />
            <h3 className="text-3xl font-bold mb-4">Finalidade Social</h3>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Toda a renda líquida arrecadada será destinada ao Pingo, fortalecendo a inclusão e o desenvolvimento das atividades realizadas.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutEvent;