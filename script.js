const defaultConfig = {
  background_color: '#F2E6ED',
  // ... resto das configurações
};

async function onConfigChange(config) {
  // ... código da função
}

function mapToCapabilities(config) {
  // ... código da função
}

function handleSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  // ... resto da lógica do formulário
  // Lembre-se de configurar o número do WhatsApp aqui também se houver referência
}

// ... Todas as outras funções (toggleMobileMenu, etc)

document.addEventListener('DOMContentLoaded', () => {
  // ... todo o código do DOMContentLoaded
});
