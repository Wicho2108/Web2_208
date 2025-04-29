document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("whatsappForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const senderName = document.getElementById("senderName").value.trim();
      const receiverName = document.getElementById("receiverName").value.trim();
      const phoneNumber = document.getElementById("phoneNumber").value.trim();
      const customMessage = document.getElementById("customMessage").value.trim();
  
      const phoneRegex = /^\d{10,15}$/; // Solo números entre 10 y 15 dígitos
    if (!phoneRegex.test(phoneNumber)) {
      alert("Por favor ingresa un número de teléfono válido (solo números, incluyendo el código de país).");
      return; // Detiene el envío si el número es inválido
    }
  
      const mensaje = `Hola ${receiverName}, te saluda ${senderName}. ${customMessage}`;
      const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(mensaje)}`;
  
      window.open(url, "_blank");
    });
  });
  