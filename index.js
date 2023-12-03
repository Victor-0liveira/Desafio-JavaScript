const listaDeTarefas = [
  { nome: "Responder Bea no Discord", status: "Não Concluído" },
  { nome: "Sofrer pelo Santa Cruz", status: "Concluído" },
  {
    nome: "Mudar algo no Boilerplate (pela 1782683729 vez)",
    status: "Não Concluído",
  },
];

for (let i = 0; i < listaDeTarefas.length; i++) {
  const tarefa = listaDeTarefas[i];
  console.log(`Tarefa ${i + 1}: ${tarefa.nome} -> Status: ${tarefa.status}`);
}
