import { Heart, Instagram, Facebook, Mail, Phone, UtensilsCrossed, MapPin } from 'lucide-react';
import { CONTATO, REDES_SOCIAIS, getWhatsAppLink } from '../constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                Euforia
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Criamos momentos especiais com doces únicos e sabores que despertam euforia.
              Cada produto é feito com amor e ingredientes selecionados.
            </p>
            <div className="flex space-x-4">
              <a
                href={REDES_SOCIAIS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={REDES_SOCIAIS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTATO.EMAIL}`}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={REDES_SOCIAIS.IFOOD}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110"
                title="Peça pelo iFood"
              >
                <UtensilsCrossed className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300">{CONTATO.TELEFONE_FORMATADO}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300">{CONTATO.EMAIL}</span>
              </li>
              <li className="flex items-center space-x-3" title="Endereço">
                <MapPin className="w-4 h-4 text-pink-400" />
                <a
                  href="https://www.google.com/maps/place/Confeitaria+Euforia/@-23.4693788,-46.5342802,21z/data=!4m17!1m8!3m7!1s0x94ce7a0c7dafc9c7:0x4c0ff1bef954434b!2sR.+Gast%C3%A3o+Vidigal,+501+-+Vila+Amorim,+Suzano+-+SP,+08610-065!3b1!8m2!3d-23.5415805!4d-46.3023713!16s%2Fg%2F11h63g2mt4!3m7!1s0x94cef5417a354213:0x6c6fdf423a0cd1f9!8m2!3d-23.4692975!4d-46.5342134!9m1!1b1!16s%2Fg%2F11ycjmn58z?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  R. Dr. Gastão Vidigal, 88<br />
                  Jardim Guarulhos, Guarulhos - SP<br />
                  07090-150
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Euforia Confeitaria. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
