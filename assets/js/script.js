const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoNome = document.getElementById("nome");
  const txtNome = document.getElementById("txtNome");

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O nome deve ter mais de 3 caracteres";
    txtNome.style.color = "red";
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = "";
  }

  const campoEmail = document.getElementById("email");
  const txtEmail = document.getElementById("txtEmail");
  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um E-mail válido";
    txtEmail.style.color = "red";
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = "";
  }

  const campoSubject = document.getElementById("subject");
  const txtSubject = document.getElementById("txtSubject");

  if (campoSubject.value.lenght < 5) {
    txtSubject.innerHTML = "O assunto deve ter mais de 3 caracteres";
    txtSubject.style.color = "red";
    campoSubject.focus();
    return;
  } else {
    txtSubject.innerHTML = "";
  }
  const campoMensagem = document.getElementById("mensagem");
  window.alert("Formulário enviado com sucesso!");
  campoNome.value = "";
  campoEmail.value = "";
  campoSubject.value = "";
  campoMensagem.value = "";
});
