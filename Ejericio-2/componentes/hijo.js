Vue.component('hijo',{

    template://html
    `
    <div class='p-5 mb-3 mt-3 border border-secondary text-center bg-success'>
        <h4>Yo soy el HIJO {{saludo}}</h4>
        <button type="button" class="btn btn-warning btn-lg"  @click = "numero++">{{numero}}</button>
    </div>
    `,
    data(){
        return{
            numero: 0
        }
    },
    props:['saludo']

});