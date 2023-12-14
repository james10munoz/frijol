function enviarMensaje() {
    var mensajeInput = document.getElementById("mensajeInput");
    var chatContainer = document.getElementById("chatContainer");
  
    // Obtener el mensaje del usuario
    var mensajeUsuario = mensajeInput.value;
  
    // Mostrar el mensaje del usuario en el chat
    var mensajeUsuarioDiv = document.createElement("div");
    mensajeUsuarioDiv.textContent = mensajeUsuario;
    mensajeUsuarioDiv.classList.add("chat-mensaje", "mensaje-usuario");
    chatContainer.appendChild(mensajeUsuarioDiv);
  
    // Responder al mensaje del usuario
    setTimeout(function() {
      var respuestaBotDiv = document.createElement("div");
      if (mensajeUsuario.toLowerCase().includes("hola")) {
        respuestaBotDiv.textContent = "¡Hola! Soy Frijoles Ricos. ¿En qué puedo ayudarte?";
      } else if (mensajeUsuario.toLowerCase().includes("precio")) {
        respuestaBotDiv.textContent = "Nuestro frijol tiene un precio de $2000 pesos por bolsa de 1kg.";
      } else {
        respuestaBotDiv.textContent = "Lo siento, no entiendo esa solicitud. ¿Puedes ser más específico?";
      }
      respuestaBotDiv.classList.add("chat-mensaje", "mensaje-bot");
      chatContainer.appendChild(respuestaBotDiv);
  
      // Scroll al último mensaje
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);
  
    // Limpiar el input del usuario
    mensajeInput.value = "";
  }
  