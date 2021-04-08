var app = new Vue ({
    el: `#app`,
    data: {
        albums: [],
        generi: null
    },
    methods:{
        albumDispo: function(){
            axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(( results ) => {
                this.albums = results.data.response;
            });
        },

        selectConstructor: function(){
            this.albums.forEach((elemento) => {
                console.log(elemento);
            });
        }
    },
    mounted: function(){
        this.albumDispo();
        this.selectConstructor();
    }
});