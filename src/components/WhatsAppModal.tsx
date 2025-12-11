import * as React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { MessageCircle, Send, User, Phone, MapPin, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../constants';
import { formatPrice, type Product } from '../data/products';
import { toast } from 'sonner';

interface WhatsAppModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

export function WhatsAppModal({ isOpen, onClose, product }: WhatsAppModalProps) {
    const [formData, setFormData] = React.useState({
        nome: '',
        telefone: '',
        endereco: '',
        observacoes: '',
    });
    const [isSending, setIsSending] = React.useState(false);

    // Reset form when modal opens with a new product
    React.useEffect(() => {
        if (isOpen) {
            setFormData({
                nome: '',
                telefone: '',
                endereco: '',
                observacoes: '',
            });
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, product?.id]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!product) return;

        // Validação básica
        if (!formData.nome.trim()) {
            toast.error('Por favor, informe seu nome');
            return;
        }

        setIsSending(true);

        // Simular pequeno delay para UX
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Montar mensagem para WhatsApp
        const message = [
            `🍰 *Olá, Euforia!*`,
            ``,
            `Gostaria de fazer um pedido:`,
            ``,
            `📦 *Produto:* ${product.name}`,
            `💰 *Valor:* ${formatPrice(product.price)}`,
            ``,
            `👤 *Nome:* ${formData.nome}`,
            formData.telefone ? `📱 *Telefone:* ${formData.telefone}` : '',
            formData.endereco ? `📍 *Endereço:* ${formData.endereco}` : '',
            formData.observacoes
                ? `💬 *Observações:*\n${formData.observacoes}`
                : '',
            ``,
            `Aguardo retorno! ❤️`,
        ]
            .filter(Boolean)
            .join('\n');

        // Codificar mensagem para URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        toast.success('Redirecionando para WhatsApp! 📱', {
            description: `Complete sua compra de ${product.name}`,
        });

        setIsSending(false);
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop/Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={handleBackdropClick}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            zIndex: 99999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem',
                        }}
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                padding: '24px',
                                maxWidth: '450px',
                                width: '100%',
                                maxHeight: '90vh',
                                overflowY: 'auto',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                position: 'relative',
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                className="hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>

                            {/* Header */}
                            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 500, delay: 0.1 }}
                                    style={{
                                        margin: '0 auto 12px',
                                        width: '56px',
                                        height: '56px',
                                        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.4)',
                                    }}
                                >
                                    <MessageCircle className="w-7 h-7 text-white" />
                                </motion.div>

                                <h2 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    background: 'linear-gradient(90deg, #ec4899, #f97316)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '4px',
                                }}>
                                    Finalizar Pedido
                                </h2>
                                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                                    Preencha seus dados para enviar pelo WhatsApp
                                </p>
                            </div>

                            {/* Product Info Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px',
                                    backgroundColor: '#fdf2f8',
                                    borderRadius: '12px',
                                    border: '1px solid #fbcfe8',
                                    marginBottom: '20px',
                                }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <h4 style={{
                                        fontWeight: '600',
                                        color: '#1f2937',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {product.name}
                                    </h4>
                                    <p style={{
                                        fontSize: '1.125rem',
                                        fontWeight: 'bold',
                                        color: '#ec4899',
                                    }}>
                                        {formatPrice(product.price)}
                                    </p>
                                </div>
                                <Sparkles className="w-5 h-5 text-orange-400" />
                            </motion.div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {/* Nome */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                                >
                                    <Label htmlFor="nome" className="flex items-center gap-2 text-gray-700">
                                        <User className="w-4 h-4 text-pink-500" />
                                        Nome *
                                    </Label>
                                    <Input
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        placeholder="Seu nome completo"
                                        required
                                        className="border-pink-200 focus:border-pink-400 focus:ring-pink-300"
                                    />
                                </motion.div>

                                {/* Telefone */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.25 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                                >
                                    <Label htmlFor="telefone" className="flex items-center gap-2 text-gray-700">
                                        <Phone className="w-4 h-4 text-pink-500" />
                                        Telefone (opcional)
                                    </Label>
                                    <Input
                                        id="telefone"
                                        name="telefone"
                                        type="tel"
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                        placeholder="(11) 99999-9999"
                                        className="border-pink-200 focus:border-pink-400 focus:ring-pink-300"
                                    />
                                </motion.div>

                                {/* Endereço */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                                >
                                    <Label htmlFor="endereco" className="flex items-center gap-2 text-gray-700">
                                        <MapPin className="w-4 h-4 text-pink-500" />
                                        Endereço (opcional)
                                    </Label>
                                    <Input
                                        id="endereco"
                                        name="endereco"
                                        value={formData.endereco}
                                        onChange={handleInputChange}
                                        placeholder="Rua, número, bairro"
                                        className="border-pink-200 focus:border-pink-400 focus:ring-pink-300"
                                    />
                                </motion.div>

                                {/* Observações */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.35 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                                >
                                    <Label htmlFor="observacoes" className="flex items-center gap-2 text-gray-700">
                                        <MessageCircle className="w-4 h-4 text-pink-500" />
                                        Observações (opcional)
                                    </Label>
                                    <Textarea
                                        id="observacoes"
                                        name="observacoes"
                                        value={formData.observacoes}
                                        onChange={handleInputChange}
                                        placeholder="Informações adicionais sobre o pedido..."
                                        rows={2}
                                        className="border-pink-200 focus:border-pink-400 focus:ring-pink-300 resize-none"
                                    />
                                </motion.div>

                                {/* Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    style={{
                                        display: 'flex',
                                        gap: '12px',
                                        marginTop: '8px',
                                    }}
                                >
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={onClose}
                                        style={{ flex: 1 }}
                                        className="border-gray-300"
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={isSending}
                                        style={{
                                            flex: 1,
                                            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                        }}
                                        className="hover:opacity-90"
                                    >
                                        {isSending ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    border: '2px solid white',
                                                    borderTopColor: 'transparent',
                                                    borderRadius: '50%',
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Enviar pelo WhatsApp
                                            </>
                                        )}
                                    </Button>
                                </motion.div>
                            </form>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
