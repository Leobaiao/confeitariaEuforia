export interface Product {
    id: number;
    name: string;
    description: string;
    price: number; // Preço em centavos para evitar problemas de float
    image: string;
    rating: number;
    popular: boolean;
    category: string;
}

// Função helper para formatar preço
export function formatPrice(priceInCents: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(priceInCents / 100);
}

// Função para converter preço em reais para centavos
export function toCents(priceInReais: number): number {
    return Math.round(priceInReais * 100);
}

export const products: Product[] = [
    // ============ BRIGADEIROS ============
    {
        id: 1,
        name: 'Brigadeiro Tradicional',
        description: 'O clássico brigadeiro brasileiro, feito com chocolate nobre e granulado crocante.',
        price: 400, // R$ 4,00
        image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YnJhemls%20aWFuJTIwYnJpZ2FkZWlyb3xlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 5.0,
        popular: true,
        category: 'Brigadeiros'
    },
    {
        id: 2,
        name: 'Brigadeiro Gourmet',
        description: 'Brigadeiros gourmet em sabores especiais: pistache, maracujá, limão siciliano e mais.',
        price: 600, // R$ 6,00
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Z291cm1ldCUyMHRydWZmbGVzfGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        popular: true,
        category: 'Brigadeiros'
    },
    // ============ DOCINHOS ============
    {
        id: 3,
        name: 'Cento de Docinhos',
        description: 'Kit com 100 docinhos variados: brigadeiros, beijinhos, cajuzinhos e bicho de pé.',
        price: 18000, // R$ 180,00
        image: 'https://images.unsplash.com/photo-1572978577832-287ca6539e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cnklMjBkaXNwbGF5fGVufDF8fHx8MTc1OTQzODc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 5.0,
        popular: true,
        category: 'Docinhos'
    },
    {
        id: 4,
        name: 'Docinhos Finos (25 un)',
        description: 'Seleção de 25 docinhos brasileiros gourmet para sua festa ou evento especial.',
        price: 5500, // R$ 55,00
        image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YnJhemlsaWFuJTIwc3dlZXRzfGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        popular: false,
        category: 'Docinhos'
    },
    // ============ BROWNIES ============
    {
        id: 5,
        name: 'Brownie Tradicional',
        description: 'Brownie denso e úmido com chocolate meio amargo, perfeito para os amantes de chocolate.',
        price: 1200, // R$ 12,00
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8YnJvd25pZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        popular: true,
        category: 'Brownies'
    },
    {
        id: 6,
        name: 'Brownie com Nozes',
        description: 'Brownie gourmet com nozes crocantes e chocolate belga intenso.',
        price: 1500, // R$ 15,00
        image: 'https://images.unsplash.com/photo-1739667648859-5434b0d677ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhicm93bmllcyUyMGNob2NvbGF0ZSUyMHNxdWFyZXN8ZW58MXx8fHwxNzU5NDQ3MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        popular: false,
        category: 'Brownies'
    },
    {
        id: 7,
        name: 'Brownie de Nutella',
        description: 'Brownie recheado com Nutella cremosa e finalizado com avelãs.',
        price: 1800, // R$ 18,00
        image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8YnJvd25pZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 5.0,
        popular: true,
        category: 'Brownies'
    },
    // ============ COOKIES ============
    {
        id: 8,
        name: 'Cookie de Chocolate',
        description: 'Cookie artesanal com gotas de chocolate belga e borda crocante.',
        price: 1000, // R$ 10,00
        image: 'https://images.unsplash.com/photo-1606406305144-0e2d8f91e61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWVzJTIwY2hvY29sYXRlJTIwY2hpcHxlbnwxfHx8fDE3NTk0NDczNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        popular: true,
        category: 'Cookies'
    },
    {
        id: 9,
        name: 'Cookie de Nutella',
        description: 'Cookie recheado com Nutella e finalizado com chocolate ao leite.',
        price: 1400, // R$ 14,00
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y29va2llfGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        popular: false,
        category: 'Cookies'
    },
    {
        id: 10,
        name: 'Cookie Red Velvet',
        description: 'Cookie red velvet com gotas de chocolate branco e cobertura de cream cheese.',
        price: 1200, // R$ 12,00
        image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cmVkJTIwdmVsdmV0fGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        popular: false,
        category: 'Cookies'
    },
    // ============ BOLOS ============
    {
        id: 11,
        name: 'Bolo de Chocolate',
        description: 'Irresistível bolo de chocolate com cobertura cremosa e raspas de chocolate amargo.',
        price: 8500, // R$ 85,00
        image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzU5MzczOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 5.0,
        popular: true,
        category: 'Bolos'
    },
    {
        id: 12,
        name: 'Bolo de Cenoura',
        description: 'Clássico bolo de cenoura brasileiro com cobertura de chocolate cremosa.',
        price: 7500, // R$ 75,00
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y2Fycm90JTIwY2FrZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        popular: true,
        category: 'Bolos'
    },
    {
        id: 13,
        name: 'Bolo de Aniversário',
        description: 'Bolos personalizados para ocasiões especiais, decorados com muito carinho.',
        price: 12000, // R$ 120,00
        image: 'https://images.unsplash.com/photo-1622576890453-8e50b6f7d5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwYmlydGhkYXklMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTk0NDU5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 5.0,
        popular: false,
        category: 'Bolos'
    },
    {
        id: 14,
        name: 'Bolo Red Velvet',
        description: 'Elegante bolo red velvet com camadas de cream cheese e decoração especial.',
        price: 9500, // R$ 95,00
        image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        popular: false,
        category: 'Bolos'
    },
    // ============ SLICE CAKES ============
    {
        id: 15,
        name: 'Slice Cake Chocolate',
        description: 'Fatia generosa de bolo de chocolate com ganache e frutas vermelhas.',
        price: 1800, // R$ 18,00
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        popular: false,
        category: 'Slice Cakes'
    },
    {
        id: 16,
        name: 'Slice Cake Red Velvet',
        description: 'Fatia do nosso famoso red velvet com cream cheese frosting.',
        price: 2000, // R$ 20,00
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdmVsdmV0JTIwc2xpY2V8ZW58MXx8fHwxNzY1MDcxNTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        popular: true,
        category: 'Slice Cakes'
    },
    {
        id: 17,
        name: 'Slice Cake Cenoura',
        description: 'Fatia do tradicional bolo de cenoura com cobertura de chocolate.',
        price: 1500, // R$ 15,00
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y2Fycm90JTIwY2FrZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.7,
        popular: false,
        category: 'Slice Cakes'
    },
    // ============ OUTROS ============
    {
        id: 18,
        name: 'Macarons Especiais',
        description: 'Deliciosos macarons franceses em sabores únicos como lavanda, rosa e frutas.',
        price: 4500, // R$ 45,00
        image: 'https://images.unsplash.com/photo-1582189649350-408b60a104b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFjYXJvbnMlMjBkZXNzZXJ0fGVufDF8fHx8MTc1OTQ0NTk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        popular: false,
        category: 'Outros'
    },
    {
        id: 19,
        name: 'Cupcakes Artesanais',
        description: 'Cupcakes fofos e saborosos com coberturas cremosas e decorações encantadoras.',
        price: 1200, // R$ 12,00
        image: 'https://images.unsplash.com/photo-1639098620661-3d47712d8a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGN1cGNha2VzJTIwYmFrZXJ5fGVufDF8fHx8MTc1OTM1NTM1OXww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.8,
        popular: false,
        category: 'Outros'
    },
    {
        id: 20,
        name: 'Trufas Premium',
        description: 'Trufas artesanais de chocolate belga com recheios variados e cobertura especial.',
        price: 800, // R$ 8,00
        image: 'https://images.unsplash.com/photo-1729875749042-695a49842f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0cnVmZmxlcyUyMGNhbmR5fGVufDF8fHx8MTc1OTQ0NzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        rating: 4.9,
        popular: false,
        category: 'Outros'
    }
];

// Função para obter produtos por categoria
export function getProductsByCategory(category: string): Product[] {
    return products.filter(p => p.category === category);
}

// Função para obter produtos populares
export function getPopularProducts(): Product[] {
    return products.filter(p => p.popular);
}

// Função para obter todas as categorias
export function getCategories(): string[] {
    return [...new Set(products.map(p => p.category))];
}
