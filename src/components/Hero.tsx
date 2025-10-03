import image_ad410faa7dbeb67a0089859d4bb75622b1af53a0 from 'figma:asset/ad410faa7dbeb67a0089859d4bb75622b1af53a0.png';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { UtensilsCrossed } from 'lucide-react';
import logoEuforia from 'figma:asset/ad410faa7dbeb67a0089859d4bb75622b1af53a0.png';

export function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Logo da marca no Hero */}
            <div className="flex items-center space-x-6 mb-8">
              <img 
                src={image_ad410faa7dbeb67a0089859d4bb75622b1af53a0} 
                alt="Euforia Confeitaria Artesanal" 
                className="w-50 h-50 object-contain"
              />
              <div className="text-5xl font-euforia bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-[Delius_Unicase]">
                Euforia
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Doces que
                </span>
                <br />
                <span className="text-gray-800">
                  despertam euforia
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Criamos momentos especiais com sabores únicos e apresentações encantadoras. 
                Cada doce é uma pequena obra de arte feita com amor e ingredientes selecionados.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => {
                  document.getElementById('produtos')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-8 py-6"
              >
                Ver Produtos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => {
                  document.getElementById('contato')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-6"
              >
                Fazer Encomenda
              </Button>
              <Button 
                size="lg" 
                onClick={() => window.open('https://www.ifood.com.br/delivery/sao-paulo-sp/euforia-confeitaria', '_blank')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <UtensilsCrossed className="w-5 h-5 mr-2" />
                Pedir no iFood
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">500+</div>
                <div className="text-gray-600">Clientes Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">50+</div>
                <div className="text-gray-600">Sabores Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">5</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639098620661-3d47712d8a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGN1cGNha2VzJTIwYmFrZXJ5fGVufDF8fHx8MTc1OTM1NTM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cupcakes coloridos da confeitaria Euforia"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-300 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-pink-300 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}