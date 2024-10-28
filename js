document.getElementById('adicionarLivro').addEventListener('click', function() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const capa = document.getElementById('capa').value;
    
    if (titulo && autor && capa) {
        const listaLivros = document.getElementById('listaLivros');
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${capa}" alt="Capa do Livro">
            <h3>${titulo}</h3>
            <p>Autor: ${autor}</p>
        `;
        
        listaLivros.appendChild(card);
        
        // Limpa os campos de entrada
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('capa').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

