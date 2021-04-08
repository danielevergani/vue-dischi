var app = new Vue ({
    el: `#app`,
    data: {
        albums: [],
        genre: ["All"],
        genreSelected: "All"
    },
    methods:{
        albumDispo: function(){
            axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(( results ) => {
                this.albums = results.data.response;
                this.selectConstructor();
            });
        },

        selectConstructor: function(){
            this.albums.forEach((elemento) => {
                if ( this.genre.includes(elemento.genre) == false ){
                    this.genre.push(elemento.genre);
                }
            });
            console.log(this.genre);
        },

    },

    mounted: function(){
        this.albumDispo();
    }
});