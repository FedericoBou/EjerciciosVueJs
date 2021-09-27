Vue.component('padre',{

    template://html
    `
    <div class='p-3 m-5  text-center'>
        <h2>Yo soy el Padre</h2>
        <hijo saludo="Hola" v-for="(hijo, index) in hijos"></hijo>
    </div>
    `,
    data(){
        return{   
            hijos:[
                {nombre: "hijo"},
                {nombre: "hijo1"},
                {nombre: "hijo2"}
                ]

                
            }
         
    }

})


