var app = new Vue({
    el: '#root',

    data: {

        genreSelected: "",
        cds: []

    },

    methods: {

        getDischi: function() {

            axios
            .get('file:///C:/MAMP/htdocs/boolean/-php-ajax-dischi/server.php', {
                params: {
                    genere: this.genreSelected
                }
            })
            .then( (response) => {

                this.cds = response.data;

            });
        }
    },

    mounted() {

        this.getDischi();

    }

})