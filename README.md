# Lista de Compras

Aplicação de lista de compras feita com **HTML, CSS e JavaScript puro**, sem frameworks. Começou como um desafio de To Do List (os requisitos originais estão em `INFO.txt`) e evoluiu para uma lista que também calcula o valor da compra.

## Funcionalidades

- Adicionar itens (entradas em branco são ignoradas)
- Marcar itens como comprados
- Informar quantidade e valor unitário e calcular o subtotal de cada item
- Total geral da compra em R$, atualizado automaticamente
- Excluir itens
- **Dados salvos no `localStorage`**: a lista continua lá depois de fechar o navegador

## Conceitos praticados

- Manipulação do DOM e criação de elementos dinâmicos
- Eventos (`click` e `change`)
- Arrays de objetos (`forEach`, `indexOf`, `splice`)
- Persistência com `localStorage` e `JSON.stringify` / `JSON.parse`

## Como executar

Clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/RicardoLMessias/lista-de-compras.git
```

## Autor

Ricardo Lima Messias — [GitHub](https://github.com/RicardoLMessias) · [LinkedIn](https://www.linkedin.com/in/ricardolimamessias-java)
