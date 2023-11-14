export default {
    computed: {
        virgula(){
            return this.frase.replaceAll(' ', ',');
        },
        contaPalavra() {
            const arr = this.frase.split(' ');
            const contagens = arr.map((palavra) => {
                return `${palavra} (${palavra.length})`;
            });

            return contagens.join(' ');
        }
    }
}