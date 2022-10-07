import{Router} from "./router.js"

const router=new Router();

router.add("/","/pages/home.html")
router.add("/home","/pages/home.html")
router.add("/exploracao","/pages/home.html")
router.add("/O-Universo","/pages/home.html")


window.route=()=>router.route()
window.onpopstate=()=>router.handle()
router.handle()
