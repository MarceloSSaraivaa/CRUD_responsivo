// Função para adicionar uma nova linha à tabela com os dados fornecidos
function addRow(nome, email, telefone, cidade) {
   const tbody = document.querySelector("tbody");

     // Verificar se o registro já existe
  const isDuplicate = Array.from(tbody.children).some(row => {
   const rowNome = row.querySelector("td:first-child").textContent;
   const rowEmail = row.querySelector("td:nth-child(2)").textContent;
   return rowNome === nome && rowEmail === email;
 });

 if (isDuplicate) {
   alert("Esse registro já existe na tabela.");
   return;
 }

   const row = document.createElement("tr");
   const nomeCell = document.createElement("td");
   const emailCell = document.createElement("td");
   const telefoneCell = document.createElement("td");
   const cidadeCell = document.createElement("td");
   const acoesCell = document.createElement("td");
   const editBtn = document.createElement("button");
   const deleteBtn = document.createElement("button");

   nomeCell.textContent = nome;
   emailCell.textContent = email;
   telefoneCell.textContent = telefone;
   cidadeCell.textContent = cidade;
   editBtn.textContent = "Editar";
   deleteBtn.textContent = "Excluir";

   editBtn.classList.add("edit-btn");
   deleteBtn.classList.add("delete-btn");

   editBtn.addEventListener("click", function() {
     openEditModal(nome, email, telefone, cidade);
   });

   deleteBtn.addEventListener("click", function() {
     // Lógica para excluir o registro
     console.log("Excluir: " + nome);
     row.remove(); // Remove a linha da tabela
   });

   row.appendChild(nomeCell);
   row.appendChild(emailCell);
   row.appendChild(telefoneCell);
   row.appendChild(cidadeCell);
   row.appendChild(acoesCell);
   acoesCell.appendChild(editBtn);
   acoesCell.appendChild(deleteBtn);

   tbody.appendChild(row);
}

// Evento para adicionar uma nova linha com os dados inseridos pelo usuário quando o botão "Novo Cadastro" é clicado
const newRecordBtn = document.getElementById("new-record-btn");
newRecordBtn.addEventListener("click", function() {
   const nome = document.getElementById("nome").value;
   const email = document.getElementById("email").value;
   const telefone = document.getElementById("telefone").value;
   const cidade = document.getElementById("cidade").value;

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (nome && email && telefone && cidade && emailRegex.test(email)) {
     addRow(nome, email, telefone, cidade);

     // Limpar os campos do formulário após adicionar o novo registro
     document.getElementById("nome").value = "";
     document.getElementById("email").value = "";
     document.getElementById("telefone").value = "";
     document.getElementById("cidade").value = "";
   } else {
     alert("Por favor, preencha todos os campos corretamente.");
   }
});

// Modal para edição de registro
const editModal = document.getElementById("edit-modal");
const closeEditModalBtn = document.querySelector("#edit-modal .close");
const saveEditBtn = document.getElementById("save-edit-btn");

closeEditModalBtn.addEventListener("click", closeEditModal);

function openEditModal(nome, email, telefone, cidade) {
   document.getElementById("edit-nome").value = nome;
   document.getElementById("edit-email").value = email;
   document.getElementById("edit-telefone").value = telefone;
   document.getElementById("edit-cidade").value = cidade;

   editModal.style.display = "block";
}

function closeEditModal() {
   editModal.style.display = "none";
}

saveEditBtn.addEventListener("click", function() {
   const nome = document.getElementById("edit-nome").value;
   const email = document.getElementById("edit-email").value;
   const telefone = document.getElementById("edit-telefone").value;
   const cidade = document.getElementById("edit-cidade").value;

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (nome && email && telefone && cidade && emailRegex.test(email)) {
     // Lógica para salvar as alterações do registro
     console.log("Salvar Edição: " + nome);

     closeEditModal();
   } else {
     alert("Por favor, preencha todos os campos corretamente.");
   }
});
