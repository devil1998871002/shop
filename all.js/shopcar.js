let list =JSON.parse(localStorage.getItem("myshop")) || [];
var vm = new Vue({
    el:'#shopcar',
    data:{
        logo:'breakfast!',
        menu:[{name:'首頁',link:'index.html'},{name:'產品列表',link:'product.html'},{name:'會員中心',link:'member.html'},{name:'購物車',link:'shopcar.html'}],
        socialLink:{
            fb:'https://facebook.com/',
            ig:'https://www.instagram.com/yuming7749/',
            github:'https://github.com/devil1998871002'
        },
        email:'devil1998871002@gmail.com',

        myshop:JSON.parse(localStorage.getItem("myshop")) || [],
        total:list.reduce( (sun,i) => {return sun+(parseInt(i.pay,10)*parseInt(i.nums,10))},0),

    },
    methods:{
        delcoffee(index){
            // this.myshop=this.myshop.filter((item,i)=> {
            //     return i!= index;
            // });
            this.myshop.splice(index,1)
            localStorage.setItem('myshop',JSON.stringify(this.myshop));
            this.total=this.myshop.reduce( (sun,i) => {return sun+(parseInt(i.pay,10)*parseInt(i.nums,10))},0)
        }
    },


});
