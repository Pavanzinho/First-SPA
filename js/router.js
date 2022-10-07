const bgBody=document.querySelector("#page");


// {
//     "/": "/pages/home.html",
//     "/home": "/pages/home.html",
//     "/exploracao":"/pages/exploracao.html",
//     "/O-Universo": "/pages/O-Universo.html"
// }


export class Router{
    routes={};

    add(routName, page){
        this.routes[routName]=page

    }
    route(event){
        event=event || window.event;
        
    
        event.preventDefault();
        
    
        window.history.pushState({},"",event.target.href);
        console.log(event.target);
        // event.stopImediatePropagation();    
    
        this.handle();
    
        if(event.target.id=="universe"){
            bgBody.className=""
            bgBody.classList.add("bg-theUniverse")
        }
    
        if(event.target.id=="exploration"){
            bgBody.className=""
            bgBody.classList.add("bg-exploration")
        }
        if(event.target.id=="home"){
            bgBody.className=""
            bgBody.classList.add("bg-home")
        }
    
    
    }
        
        handle(){
            const {pathname}=window.location
            const route=this.routes[pathname]
        
            fetch(route).
            then(data=>data.text())
            // then(data=>data.text()).
            .then(html=>document.querySelector(".app").innerHTML=html)
            
        }
        
        
    }   