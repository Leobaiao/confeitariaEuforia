# 🍰 Confeitaria Euforia

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)

Website institucional e catálogo de produtos para a **Confeitaria Euforia** - uma confeitaria artesanal localizada em Guarulhos, SP.

## ✨ Funcionalidades

- 📱 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🛒 **Carrinho de Compras** - Adicione produtos e faça pedidos
- 💚 **Checkout via WhatsApp** - Envie seu pedido diretamente pelo WhatsApp
- 🧡 **Integração com iFood** - Link direto para pedir pelo iFood
- ❤️ **Lista de Desejos** - Salve seus produtos favoritos
- 🔍 **SEO Otimizado** - Meta tags configuradas para melhor ranqueamento
- 🎨 **Animações Suaves** - Transições e efeitos com Framer Motion

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **TypeScript** - JavaScript com tipagem estática
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/confeitariaEuforia.git

# Entre na pasta do projeto
cd confeitariaEuforia

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |

## 📁 Estrutura do Projeto

```
confeitariaEuforia/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/          # Imagens e recursos
│   ├── components/      # Componentes React
│   │   ├── ui/          # Componentes de UI (shadcn)
│   │   ├── Header.tsx   # Cabeçalho com navegação
│   │   ├── Hero.tsx     # Banner principal
│   │   ├── Products.tsx # Catálogo de produtos
│   │   ├── About.tsx    # Seção sobre nós
│   │   ├── Contact.tsx  # Formulário de contato
│   │   ├── Footer.tsx   # Rodapé
│   │   ├── CartSidebar.tsx      # Carrinho lateral
│   │   ├── WishlistSidebar.tsx  # Lista de desejos
│   │   └── ...
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── index.html           # HTML principal (SEO configurado)
├── package.json         # Dependências do projeto
├── vite.config.ts       # Configuração do Vite
└── README.md            # Este arquivo
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. A Vercel detectará automaticamente as configurações do Vite
4. Clique em "Deploy"

### Build Manual

```bash
# Gera os arquivos de produção
npm run build

# Os arquivos estarão na pasta 'dist/'
```

## 📍 Contato

**Confeitaria Euforia**
- 📍 R. Dr. Gastão Vidigal, 88 - Jardim Guarulhos, Guarulhos - SP
- 📞 (11) 99223-2935
- 📧 contato@euforia.com.br
- 📸 [@confeitariaeuforia](https://instagram.com/confeitariaeuforia)

## 📄 Licença

Este projeto é privado e de uso exclusivo da Confeitaria Euforia.

---

Feito com ❤️ e muito açúcar 🍰