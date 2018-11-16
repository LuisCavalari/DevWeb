const pessoa =  {
    saudacao:"gayzão",
     falar (){
        console.log(this.saudacao)
    }

}

pessoa.falar()

const falar = pessoa.falar.bind(pessoa)
falar();
