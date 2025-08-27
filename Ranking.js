const times = ["são paulo", "rio de janeiro", "belo horizonte", "curitiba", "porto alegre", "salvador", "recife", "fortaleza", "brasilia", "manaus", "goiania", "campinas", "são luís", "maceió", "joão pessoa", "aracaju"];

const numNotas = parseInt(prompt("Quantas notas cada time vai receber? "));
const medias = [];

for (let i = 0; i < times.length; i++) {
    let soma = 0;
    for (let j = 0; j < numNotas; j++) {
        soma += Math.floor(prompt(`Digite a nota ${j + 1} para o time ${times[i]}:`));
    }
    const media = soma / numNotas;
    medias.push({ time: times[i], media: media });
}

// Ordena do maior para o menor
medias.sort((a, b) => b.media - a.media);

// Mostra o ranking 
console.log("Ranking dos times: ");
for (let i = 0; i < medias.length; i++) {
    console.log(`${i + 1}º lugar: ${medias[i].time} - Média: ${medias[i].media.toFixed(2)}`);
}