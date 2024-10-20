const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line")

    })
})



const scrollUp =()=>{
    const scrollUpBtn = document.getElementById("scroll-up")
    if(this.scrollY>=250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }
    else{
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")

    }
}

window.addEventListener("scroll",scrollUp)

const scrollHeader =()=>{
    const header = document.getElementById("navbar")
    if(this.scrollY>=250){
        header.classList.add("border-b","border-yellow-500")
    }
    else{
        header.classList.remove("border-b","border-yellow-500")

    }
}

window.addEventListener("scroll",scrollHeader)







const activeLink = ()=>{
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")

    let current = "home"

    sections.forEach(section=>{
        const sectionTop = section.offsetTop;

        if(this.scrollY>=sectionTop-60){
            current=section.getAttribute("id")
        }
    })

    navLinks.forEach(item=>{
        item.classList.remove("active")
        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
}


window.addEventListener("scroll",activeLink)



const sr= ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:300,
    reset:true
})

sr.reveal(".home_data,.about_top,.popular_top,.review_top,.subscribe_content,.subscribe_social,.copyright_top")
sr.reveal(".home_image",{delay:500,scale:0.5})


sr.reveal(".service_card,.popular_card,.review_card,.footer_link",{interval:100})


sr.reveal(".about_leaf",{delay:1000,origin:"right"})
sr.reveal(".review_leaf,.footer_leaf",{delay:1000,origin:"left"})


sr.reveal(".about_1content,.about_2content",{delay:300,origin:"right"})
sr.reveal(".about_1image,.about_2image",{delay:300,origin:"left"})
