  Vue.config.devtools = true;
  var app = new Vue({
    el: '#root',
    data: {
      disks: [],
      // genereoption: [],
      // genere:"",
      // flag: false,

    },

    created(){
      axios.get('http://localhost:8888/php-ajax-dischi/_partials/dati.php')
          .then((response) =>{
            console.log(response);
            this.disks = response.data;
            console.log(this.disks);
          //   this.disks.forEach((item, i) => {
          //     if (!this.genereoption.includes(item.genre)) {
          //         this.genereoption.push(item.genre);
          //     }
          //   });
          //
          });
    },
    // methods: {
    //   ordinamento: function () {
    //     this.flag = !this.flag;
    //     if (this.flag) {
    //       //Ordinamento crescente dell'anno di uscita
    //           this.disks.sort((a,b) =>  a.year - b.year);
    //     }else {
    //       this.disks.sort((a,b) =>  b.year - a.year);
    //     }
    //   }
    // }

  });
