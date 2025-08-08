// AgroPrati - JavaScript Principal

// Variáveis globais
let chatAberto = false;
let mensagensPredefinidas = {
    saudacao: [
        "Olá! Sou o assistente virtual da AgroPrati. Como posso ajudá-lo hoje?",
        "Oi! Bem-vindo à AgroPrati! Em que posso auxiliá-lo?",
        "Olá, agricultor! Estou aqui para ajudar com suas dúvidas sobre plantio e manejo."
    ],
    plantio: [
        "Para plantio de milho, recomendo solo bem drenado e pH entre 5,5 e 6,8. Posso conectá-lo com especialistas em sua região.",
        "O melhor período para plantio de soja é entre setembro e dezembro. Quer dicas específicas para sua região?",
        "Para plantio de feijão, considere a época das águas (outubro-janeiro) ou da seca (março-junho)."
    ],
    pragas: [
        "Para controle de pragas, primeiro preciso identificar qual está afetando sua cultura. Pode descrever os sintomas?",
        "Lagarta-do-cartucho no milho? Recomendo monitoramento e controle integrado. Posso conectá-lo com especialistas.",
        "Problemas com pulgões? Existem soluções biológicas e químicas. Precisa de indicação de fornecedores?"
    ],
    fertilizacao: [
        "A fertilização ideal depende da análise do solo. Temos parceiros que fazem análise na sua região.",
        "Para NPK, recomendo análise de solo primeiro. Posso conectá-lo com laboratórios credenciados.",
        "Adubação orgânica é excelente! Quer dicas sobre compostagem ou fornecedores de adubo orgânico?"
    ],
    irrigacao: [
        "Sistema de irrigação por gotejamento é ideal para economizar água. Temos parceiros especializados.",
        "Para irrigação eficiente, considere horários adequados e monitoramento da umidade do solo.",
        "Problemas com irrigação? Posso conectá-lo com técnicos especializados em sua região."
    ],
    default: [
        "Interessante! Para essa questão específica, recomendo conversar com um especialista. Posso conectá-lo com profissionais qualificados.",
        "Essa é uma ótima pergunta! Temos especialistas que podem ajudar melhor. Quer que eu encontre um em sua região?",
        "Para orientações mais detalhadas, sugiro consultar nossos parceiros especialistas. Posso fazer essa conexão para você."
    ]
};

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeChatbot();
    initializeScrollEffects();
    initializeAnimations();
});

// Navegação suave
function initializeNavigation() {
    // Navegação suave para links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Menu mobile toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Fechar menu mobile ao clicar em link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });
}

// Função para scroll suave
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Inicializar chatbot
function initializeChatbot() {
    // O chatbot já está no HTML, apenas configurar eventos
    const chatInput = document.getElementById('chatbot-input-field');
    const sendButton = document.getElementById('send-button');

    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                enviarMensagem();
            }
        });
    }
    
    if (sendButton) {
        sendButton.addEventListener('click', enviarMensagem);
    }

    // Inicializar com mensagem de boas-vindas
    setTimeout(() => {
        adicionarMensagemBot("Olá! Eu sou o AgroBot, seu assistente agrícola inteligente. Como posso ajudá-lo hoje? 🌱");
    }, 1000);
}

// Criar interface do chat - não necessário pois já está no HTML
function createChatInterface() {
    // Interface já existe no HTML
}

// Funções do chatbot atualizadas
function abrirChat() {
    const chatWidget = document.querySelector('.chatbot-widget');
    if (chatWidget) {
        chatWidget.style.display = 'flex';
        chatAberto = true;
        
        // Focus no input
        setTimeout(() => {
            const chatInput = document.getElementById('chatbot-input-field');
            if (chatInput) chatInput.focus();
        }, 100);
    }
}

function fecharChat() {
    const chatWidget = document.querySelector('.chatbot-widget');
    if (chatWidget) {
        chatWidget.style.display = 'none';
        chatAberto = false;
    }
}

function toggleChat() {
    if (chatAberto) {
        fecharChat();
    } else {
        abrirChat();
    }
}

function enviarMensagem() {
    const chatInput = document.getElementById('chatbot-input-field');
    const chatMessages = document.getElementById('chatbot-messages');
    
    if (!chatInput || !chatMessages) return;
    
    const mensagem = chatInput.value.trim();
    if (mensagem === '') return;
    
    // Adicionar mensagem do usuário
    adicionarMensagemUsuario(mensagem);
    
    // Limpar input
    chatInput.value = '';
    
    // Simular typing e resposta
    mostrarTyping();
    setTimeout(() => {
        esconderTyping();
        const resposta = gerarResposta(mensagem);
        adicionarMensagemBot(resposta);
    }, 1500);
}

function adicionarMensagemUsuario(mensagem) {
    const chatMessages = document.getElementById('chatbot-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="message-content">${mensagem}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function adicionarMensagemBot(mensagem) {
    const chatMessages = document.getElementById('chatbot-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">${mensagem}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function mostrarTyping() {
    const chatMessages = document.getElementById('chatbot-messages');
    if (!chatMessages) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <span class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function esconderTyping() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function enviarSugestao(texto) {
    const chatInput = document.getElementById('chatbot-input-field');
    if (chatInput) {
        chatInput.value = texto;
        enviarMensagem();
    }
}

function gerarResposta(mensagem) {
    const msg = mensagem.toLowerCase();
    
    // Palavras-chave para categorizar a pergunta
    if (msg.includes('plantio') || msg.includes('plantar') || msg.includes('semear')) {
        return getRandomMessage(mensagensPredefinidas.plantio);
    } else if (msg.includes('praga') || msg.includes('inseto') || msg.includes('lagarta') || msg.includes('pulgão')) {
        return getRandomMessage(mensagensPredefinidas.pragas);
    } else if (msg.includes('adubo') || msg.includes('fertilizante') || msg.includes('npk') || msg.includes('nutrição')) {
        return getRandomMessage(mensagensPredefinidas.fertilizacao);
    } else if (msg.includes('irrigação') || msg.includes('água') || msg.includes('irrigar')) {
        return getRandomMessage(mensagensPredefinidas.irrigacao);
    } else if (msg.includes('olá') || msg.includes('oi') || msg.includes('bom dia') || msg.includes('boa tarde')) {
        return getRandomMessage(mensagensPredefinidas.saudacao);
    } else {
        return getRandomMessage(mensagensPredefinidas.default);
    }
}

function getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Efeitos de scroll
function initializeScrollEffects() {
    // Mudar header ao fazer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'var(--bg-white)';
                header.style.backdropFilter = 'none';
            }
        }
    });

    // Animações ao aparecer na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    document.querySelectorAll('.solucao-card, .section-header, .parceiro-categoria').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Animações gerais
function initializeAnimations() {
    // Contador animado para estatísticas
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };

    // Observer para ativar contadores quando visíveis
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target.querySelector('.stat-number');
                if (number && !number.classList.contains('animated')) {
                    number.classList.add('animated');
                    animateCounter(number);
                }
            }
        });
    });

    document.querySelectorAll('.stat').forEach(stat => {
        counterObserver.observe(stat);
    });
}

// Utilitários
function formatarNumero(num) {
    return num.toLocaleString('pt-BR');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Função para mostrar notificação de sucesso
function mostrarNotificacao(mensagem, tipo = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${tipo}`;
    notification.textContent = mensagem;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${tipo === 'success' ? 'var(--primary-color)' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// CSS para animações de notificação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

console.log('AgroPrati - Sistema carregado com sucesso! 🌱');