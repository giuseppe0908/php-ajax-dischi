  Vue.config.devtools = true;
  var app = new Vue({
    el: '#root',
    data: {
      disks: [],
      artists: [],
      autoree:"",
      // flag: false,

    },

    created(){
      axios.get('http://localhost:8888/php-ajax-dischi/call.php')
          .then((response) =>{
            console.log(response);
            this.disks = response.data;
            // console.log(this.disks);

            for (var i = 0; i < response.data.length; i++) {
              let artist = response.data[i].author;
              if (!(this.artists.includes(artist))) {
                this.artists.push(artist)
              }
            }
            console.log(this.artists);

          });
    },
    methods: {
    //   ordinamento: function () {
    //     this.flag = !this.flag;
    //     if (this.flag) {
    //       //Ordinamento crescente dell'anno di uscita
    //           this.disks.sort((a,b) =>  a.year - b.year);
    //     }else {
    //       this.disks.sort((a,b) =>  b.year - a.year);
    //     }
    //   }

      scegli: function(){
        console.log(this.autoree);
        axios.get(`http://localhost:8888/php-ajax-dischi/search.php?autore=${this.autoree}`)
            .then((response) =>{
              // let result = response;
              console.log(response.data);
                this.disks = response.data;  
            });

      }
    }

  });
