export default function Modal({ personagem }) {
    return (
        <div id="modal">
            <p id="nomeModal">Nome: {personagem.name}</p>
            <p id="origemModal">Origem: {personagem.origin.name}</p>
            <p id="localizacaoModal">Localização: {personagem.location.name}</p>
            <p id="especieModal">Especie: {personagem.species}</p>
        </div>
    );
}