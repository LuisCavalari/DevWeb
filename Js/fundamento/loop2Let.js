const func = []
for (let index = 0; index < 10; index++) {
    func.push(function(){
        console.log(index)
    })
    

}

func[2]()