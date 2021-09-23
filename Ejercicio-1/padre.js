//Creamos componentes
Vue.component('padre',{

    template: //html
    `
    <div class='p-5 bg-dark text-white text-center'>
        <h2>Componente Padre</h2>
        <hijo></hijo>
    </div>
    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
}) 