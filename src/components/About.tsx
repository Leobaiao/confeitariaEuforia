import { Card } from './ui/card';
import { Heart, Award, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Cada doce é preparado com carinho e atenção aos detalhes, garantindo qualidade e sabor únicos.'
  },
  {
    icon: Award,
    title: 'Ingredientes Premium',
    description: 'Utilizamos apenas os melhores ingredientes, selecionados cuidadosamente para criar experiências sensoriais incríveis.'
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Nossa equipe é formada por confeiteiros experientes e apaixonados pela arte da confeitaria.'
  },
  {
    icon: Clock,
    title: 'Sempre Frescos',
    description: 'Todos os nossos produtos são preparados diariamente para garantir máximo frescor e sabor.'
  }
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Sobre a Euforia
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa confeitaria nasceu do sonho de criar momentos especiais através de doces únicos. 
            Combinamos tradição, inovação e muito amor em cada receita.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Nossa História
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                A Euforia Confeitaria começou em 2019 com a paixão de transformar momentos 
                especiais em experiências inesquecíveis. Nosso nome reflete exatamente o 
                sentimento que queremos despertar: pura euforia a cada mordida.
              </p>
              <p>
                Iniciamos em uma pequena cozinha caseira e hoje somos reconhecidos pela 
                qualidade excepcional e criatividade em cada criação. Nosso compromisso 
                é com a excelência e a satisfação de cada cliente.
              </p>
              <p>
                Cada receita é desenvolvida com cuidado, testada inúmeras vezes até 
                alcançar a perfeição. Acreditamos que os detalhes fazem toda a diferença 
                e é isso que nos torna especiais.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-pink-400 to-pink-300 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-pink-100">Clientes Satisfeitos</div>
                </div>
                <div className="bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-orange-100">Sabores Únicos</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold">5</div>
                  <div className="text-yellow-100">Anos de Experiência</div>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-pink-100">Ingredientes Naturais</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
