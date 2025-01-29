import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// src/i18n/i18n.js
const resources = {
    en: {
        translation: {
            // Outras traduções
            quem_somos: "About us",
            nossa_historia: "Our history",
            equipe: "Team",
            hero_title: "Welcome to the Barber Shop",
            hero_subtitle: "Explore our amazing services",
            service_title: "Our Services",
            services_description: "We offer the best grooming services for you.",
            offers_title: "Exclusive Offers",
            offers_description: "Check out our latest deals!",
            footer_text: "All rights reserved.",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms & Conditions",
            
            // Tradução para os serviços
            corte_de_cabelo: "Haircut",
            barba_e_sobrancelha: "Beard and Eyebrow",
            pacote_especial: "Special Package",
            descricao_corte_de_cabelo: "Complete haircut service for men and women.",
            descricao_barba_sobrancelha: "Complete beard and eyebrow service for men.",
            descricao_pacote_especial: "Special package with haircut, beard, and eyebrow.",
            saiba_mais: "Learn More",

            //offers
            corte_basico: "Basic cut",
            corte_basico_descricao: "A classic and quick cut to keep in style.",
            barba_e_cabelo: "Beard and Hair",
            barba_e_cabelo_descricao: "Complete package for impeccable beard and hair.",
            corte_premium: "Premium cut",
            corte_premium_descricao: "Includes washing, premium cutting and finishing.",
            pacote_luxo: "Luxury package",
            pacote_luxo_descricao: "Haircut, shave, hydration and hair massage.",
            offer_button: "Book now",
            
            //Feedback
            feedback_title: "What Our Clients Say",
            feedback_description: "Your opinion is essential to us! Tell us about your experience and what we can improve. Every feedback helps us make our services even better, so you always leave satisfied and with the style you deserve.",
            client_text_1: "First-class service! The environment is very welcoming, and the haircut turned out perfect.",
            client_text_2: "Impeccable service! Very skilled professionals and extremely attentive.",
            client_text_3: "Excellent! Quality service and a very pleasant atmosphere. I will definitely return!",
            client_text_4: "Very satisfied with the haircut and service. Excellent atmosphere and quality professionals.",
            client_text_5: "Great haircut, awesome atmosphere, and first-class service. I recommend it to everyone!",
            
            
            //Booking
            booking_title: "Book Your Appointment",
            booking_placeholder: "Your full name",
            booking_button: "Schedule",
            booking_text_info: "We will contact you to confirm your reservation. Thank you!",
            
            
            //Contact
            contact_title: "Get in Touch",
            contact_telephone: "Telephone:",
            contact_email: "Email:",
            contact_address: "Address:",
            contact_message_title: "Send us a message",
            contact_message_name: "Your name",
            contact_message_email: "Your email",
            contact_message_message: "Your message",
            contact_message_button: "Send message",
        },
    },
    pt: {
        translation: {
            // Outras traduções
            quem_somos: "Quem somos",
            nossa_historia: "Nossa história",
            equipe: "Equipe",
            hero_title: "Bem-vindo a Barbearia",
            hero_subtitle: "Explore nossos serviços incríveis",
            service_title: "Nossos Serviços",
            services_description: "Oferecemos os melhores serviços de cuidados para você.",
            offers_title: "Ofertas Exclusivas",
            offers_description: "Confira nossas últimas ofertas!",
            footer_text: "Todos os direitos reservados.",
            footer_privacy: "Política de Privacidade",
            footer_terms: "Termos e Condições",
            
            // Tradução para os serviços
            corte_de_cabelo: "Corte de cabelo",
            barba_e_sobrancelha: "Barba e Sobrancelha",
            pacote_especial: "Pacote Especial",
            descricao_corte_de_cabelo: "Serviço completo de corte de cabelo para homens e mulheres.",
            descricao_barba_sobrancelha: "Serviço completo de barba e sobrancelha para homens.",
            descricao_pacote_especial: "Pacote especial com corte de cabelo, barba e sobrancelha.",
            saiba_mais: "Saiba Mais",
            
            //ofertas
            corte_basico: "Corte básico",
            corte_basico_descricao: "Um corte clássico e rápido para manter o estilo.",
            barba_e_cabelo: "Barba e cabelo",
            barba_e_cabelo_descricao: "Pacote completo para barba e cabelo impecáveis.",
            corte_premium: "Corte premium",
            corte_premium_descricao: "Inclui lavagem, corte premium e finalização.",
            pacote_luxo: "Pacote luxo",
            pacote_luxo_descricao: "Corte, barba, hidratação e massagem capilar.",
            offer_button: "Agendar Agora",
            
            //Feedbacks
            feedback_title: "O Que Nossos Clientes Dizem",
            feedback_description: "Sua opinião é essencial para nós! Conte-nos como foi sua experiência e o que podemos melhorar. Cada feedback ajuda a tornar nossos serviços ainda melhores, para que você sempre saia satisfeito e com o estilo que merece.",
            client_text_1: "Atendimento de primeira! O ambiente é muito acolhedor e o corte ficou perfeito.",
            client_text_2: "Serviço impecável! Profissionais muito qualificados e super atenciosos.",
            client_text_3: "Excelente! Atendimento de qualidade e um ambiente super agradável. Voltarei com certeza!",
            client_text_4: "Muito satisfeito com o corte e o atendimento. Ambiente excelente e profissionais de qualidade.",
            client_text_5: "Corte top, ambiente ótimo e atendimento de primeira. Recomendo a todos!",
            
            
            
            //Booking
            booking_title: "Agende Seu Horário",
            booking_placeholder: "Seu nome completo",
            booking_button: "Agendar",
            booking_text_info: "Entraremos em contato para confirmar sua reserva. Obrigado!",
            
            
            
            //Contact
            contact_title: "Entre em Contato",
            contact_telephone: "Telefone:",
            contact_email: "Email:",
            contact_address: "Endereço:",
            contact_message_title: "Envie-nos uma Mensagem",
            contact_message_name: "Seu nome",
            contact_message_email: "Seu email",
            contact_message_message: "Sua Mensagem",
            contact_message_button: "Send message",
        },
    },
    es: {
        translation: {
            // Outras traduções
            quem_somos: "Quiénes somos",
            nossa_historia: "Nuestra historia",
            equipe: "Equipo",
            hero_title: "Bienvenido a la barbería",
            hero_subtitle: "Explore nuestros servicios increíbles",
            service_title: "Nuestros Servicios",
            services_description: "Ofrecemos los mejores servicios de cuidado para ti.",
            offers_title: "Ofertas Exclusivas",
            offers_description: "¡Consulta nuestras últimas ofertas!",
            footer_text: "Todos los derechos reservados.",
            footer_privacy: "Política de Privacidad",
            footer_terms: "Términos y Condiciones",
            
            // Tradução para os serviços
            corte_de_cabelo: "Corte de cabello",
            barba_e_sobrancelha: "Barba y Cejas",
            pacote_especial: "Paquete Especial",
            descricao_corte_de_cabelo: "Servicio completo de corte de cabello para hombres y mujeres.",
            descricao_barba_sobrancelha: "Servicio completo de barba y cejas para hombres.",
            descricao_pacote_especial: "Paquete especial con corte de cabello, barba y cejas.",
            saiba_mais: "Saber Más",
            
            //Ofertas
            corte_basico: "Corte Básico",
            corte_basico_descricao: "Un corte clásico y rápido para mantener el estilo.",
            barba_e_cabelo: "Barba y Cabelo",
            barba_e_cabelo_descricao: "Pacote completo para barba y cabello impecable.",
            corte_premium: "Corte Premium",
            corte_premium_descricao: "Incluye lavado, corte premium y finalización.",
            pacote_luxo: "Paquete de lujo",
            pacote_luxo_descricao: "Corte, barba, hidratación y masaje capilar.",
            offer_button: "Reservar ahora",
            
            //Feedbacks
            feedback_title: "Lo Que Dicen Nuestros Clientes",
            feedback_description: "¡Tu opinión es esencial para nosotros! Cuéntanos cómo fue tu experiencia y qué podemos mejorar. Cada comentario nos ayuda a mejorar nuestros servicios, para que siempre salgas satisfecho y con el estilo que te mereces.",
            client_text_1:"¡Atención de primera! El ambiente es muy acogedor y el corte quedó perfecto.",
            client_text_2: "¡Servicio impecable! Profesionales muy cualificados y muy atentos.",
            client_text_3: "¡Excelente! Atención de calidad y un ambiente muy agradable. ¡Volveré sin duda!",
            client_text_4: "Muy satisfecho con el corte y el servicio. Ambiente excelente y profesionales de calidad.",
            client_text_5: "Corte genial, ambiente excelente y atención de primera. ¡Lo recomiendo a todos!",
            
            
            //Booking
            booking_title: "Reserva Tu Cita",
            booking_placeholder: "Su nombre completo",
            booking_button: "Reservar",
            booking_text_info: "Nos pondremos en contacto con usted para confirmar su reserva. Muchas gracias.",
            
            
            //Contact
            contact_title: "Ponte en Contacto",
            contact_telephone: "Teléfono:",
            contact_email: "Correo electrónico:",
            contact_address: "Dirección:",
            contact_message_title: "Envíenos un mensaje",
            contact_message_name: "Tu nombre y apellidos",
            contact_message_email: "Su dirección de correo electrónico",
            contact_message_message: "Su mensaje",
            contact_message_button: "Enviar mensaje",
        },
    },
};


i18n.use(initReactI18next).init({
    resources,
    lng: "pt", // Idioma padrão
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // React já protege contra XSS
    },
});

export default i18n;
