const dataAll = document.getElementById("data")

const queryParam = window.location.search.slice(1)
//My logic, wish me luck...
const noplus = queryParam.replace("+"," ")
const datas = noplus.split("&")

for(let i=0;i<datas.length;i++){
    const finalization = datas[i].split("=")
    const[variable,name] = finalization

    if(finalization[i]){
        dataAll.innerHTML += `<h1>Hello, ${name}! Thank you for ordering in Hoops Indonesia!</h1>`
        break
    }
    
}
