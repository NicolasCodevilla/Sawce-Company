function whatsapp_msg() {
  const productName = document.getElementById('product-name').value.trim();
  const productSize = document.getElementById('product-size').value.trim();
  
  // Verifica se os campos estão preenchidos
  if (!productName || !productSize) {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  // Formata a mensagem
  const message = `Olá, eu vim pelo site e gostaria de comprar um ${productName} | ${productSize}.`;

  // Codifica a mensagem para a URL
  const encodedMessage = encodeURIComponent(message);

  // Define o número de WhatsApp
  const whatsappNumber = "5551992794110";

  // Cria o link para o WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Redireciona o usuário para o WhatsApp
  window.open(whatsappLink, '_blank');
}
