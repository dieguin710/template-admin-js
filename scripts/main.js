

// 1. REFERÊNCIAS DOS ELEMENTOS HTML


// Selecionar o formulário de login.
const formLogin = document.querySelector("#login-form")
// Selecionar o campo de e-mail.
const email = document.querySelector("#login-email")
// Selecionar o campo de senha.
const password = document.querySelector("#login-password")


// 2. EVENTO DO FORMULÁRIO

// Adicionar um evento de escuta (submit) ao formulário.
formLogin.addEventListener("submit", loginUser)


// 3. FUNÇÃO DE LOGIN


function loginUser(e) {

  // Impedir que a página seja recarregada ao enviar o formulário.
e.preventDefault()
  // Capturar o e-mail digitado pelo usuário.
  const emailValue = email.value

  // Capturar a senha digitada pelo usuário.
  const passwordValue = password.value


  // 4. VALIDAR OS CAMPOS


  // Verificar se o e-mail ou a senha estão vazios.
  if (emailValue === "" || passwordValue === "") {
  


  // Se algum campo estiver vazio:
  // - Exibir um alerta solicitando o preenchimento.
  alert("Preencha os campos")
  // - Interromper a execução da função com return.
  return
  }


  // 5. VALIDAR AS CREDENCIAIS


  // Comparar o e-mail e a senha digitados com as credenciais
  // de teste definidas para esta atividade.~
  if (emailValue === "aluno@fullstack.dev" && passwordValue === "123456") {
  

  // Se as credenciais estiverem corretas:
  // - Exibir uma mensagem de boas-vindas no console.
  alert("Bem-vindo ao dashboard!")
  // - Redirecionar o usuário para a página do dashboard.
  window.location.href = "pages/dashboard/dashboard.html"
  }else {

  // Se as credenciais estiverem incorretas:
  // - Exibir um alerta informando o erro.
  alert("E-mail ou senha incorretos")
  // - Interromper a execução da função.
  return
  }}

