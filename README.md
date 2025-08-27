# 🏆 Ranking de Times em JavaScript

Este projeto é um **script interativo em JavaScript** que coleta notas para diversos times brasileiros e gera automaticamente um **ranking baseado na média das avaliações**.  

É uma forma divertida de praticar **laços, arrays, objetos, entrada de dados e ordenação em JavaScript**.

---

## 🚀 Como funciona?

1. O programa possui uma lista de times pré-definida:
   - São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Salvador, Recife, Fortaleza, Brasília, Manaus, Goiânia, Campinas, São Luís, Maceió, João Pessoa e Aracaju.

2. O usuário define **quantas notas cada time vai receber**.

3. O script solicita, uma a uma, as notas de cada time.

4. Após o cálculo das médias, os times são **ordenados automaticamente do melhor para o pior**.

5. O resultado final é exibido no **console**, mostrando a classificação com duas casas decimais.

---

## 📌 Exemplo de uso

```bash
Quantas notas cada time vai receber? 3
Digite a nota 1 para o time são paulo: 8
Digite a nota 2 para o time são paulo: 7
Digite a nota 3 para o time são paulo: 9
...
Ranking dos times:
1º lugar: são paulo - Média: 8.00
2º lugar: rio de janeiro - Média: 7.67
3º lugar: belo horizonte - Média: 6.50
...

🛠️ Tecnologias utilizadas

JavaScript (ES6+)

prompt() para entrada de dados

Estruturas de repetição (for)

Manipulação de arrays e objetos

Função de ordenação (.sort())

📂 Estrutura do código

Definição da lista de times

Entrada da quantidade de notas

Loop para coletar notas de cada time

Cálculo das médias

Ordenação dos resultados

Exibição do ranking

🎯 Objetivos educacionais

Este projeto é ideal para quem deseja:

Praticar manipulação de arrays em JS

Entender o uso de loops aninhados

Aplicar lógica de cálculo de médias

Trabalhar com objetos e ordenação

⚡ Como executar

Copie o código para um arquivo chamado Ranking.js.

Execute em um navegador ou em um ambiente que suporte prompt() (ex.: Node.js com pacote readline-sync ou simuladores online).

Insira as notas e veja o ranking no console.

💡 Melhorias sugeridas

Adicionar validação de entrada (impedir notas inválidas).

Permitir que o usuário adicione seus próprios times.

Exportar o resultado para um arquivo .txt ou .json.

Criar uma interface gráfica simples em HTML + CSS.
