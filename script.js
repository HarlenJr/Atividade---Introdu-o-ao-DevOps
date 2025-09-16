// Atualizar timestamp na página
document.addEventListener('DOMContentLoaded', function() {
    const timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Sao_Paulo'
        };
        timestampElement.textContent = now.toLocaleDateString('pt-BR', options);
    }
    
    // Adicionar animação aos cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Simular atualização de status
function updateStatus() {
    const badge = document.querySelector('.badge');
    if (badge) {
        badge.textContent = '🔄 Atualizando...';
        badge.className = 'badge warning';
        
        setTimeout(() => {
            badge.textContent = '✅ Online';
            badge.className = 'badge success';
        }, 2000);
    }
}

// Executar atualização a cada 30 segundos
setInterval(updateStatus, 30000);