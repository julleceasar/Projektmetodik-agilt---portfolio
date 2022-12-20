    
    let main = document.getElementById("people")
    const kompetens = document.getElementById("kompetens");


    kompetens.innerHTML = `
    <h1 class="headerKomp">Vilken kompetens behöver du?</h1>
    <div class="kompContainer">
        <div class="komp">
        <span id="cssBtn">CSS</span>
        <span id="htmlBtn">HTML</span>
        <span id="jsBtn">JAVASCRIPT</span>
        <span id="phpBtn">PHP</span>
        </div>
    </div>`;


    let array = document.getElementsByTagName("span")
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        let tagSpan = element.innerText.toLowerCase()

        element.addEventListener("click", () => {
            document.getElementById("people").innerHTML = ""

            if(element.innerText.toLowerCase() == "css") {
                document.getElementById("people").innerHTML = ""
                SkillSelector(tagSpan)   
            }
            if(element.innerText.toLowerCase() == "html") {
                document.getElementById("people").innerHTML == ""
                SkillSelector(tagSpan)
            }
            if(element.innerText.toLowerCase() == "javascript") {
                document.getElementById("people").innerHTML = ""
                SkillSelector(tagSpan)
            }
            if(element.innerText.toLowerCase() == "php") {
                document.getElementById("people").innerHTML = ""
                SkillSelector(tagSpan)
            }
        })
    }



    async function SkillSelector(skill) {

        let response = await fetch(`http://localhost:3000/user/getSkills/${skill}`)
        
        let data = await response.json();
        console.log(data)

        if(data == "Det finns tyvärr ingen som är ledig just nu.."){
            let nogo = document.createElement("h3")
            nogo.innerText = data
            main.append(nogo)
            return
        }

        if(data) {
            let personContainer = document.createElement("div")
            personContainer.classList.add("personContainer")

            for (let i = 0; i < data.length; i++) {
                const info = data[i];            
                

    
                let personInfo = document.createElement("div")
                personInfo.classList.add("personInfo")
                
                let image = document.createElement("img")
                image.classList.add("image")
                image.src = info.img
                
                let header = document.createElement("h3")
                header.innerHTML = info.shortDesc
                
                let button = document.createElement("button")
                button.classList.add("readMoretBtn")
                button.innerText = "Läs Mer"
                
                let link = document.createElement("a")
                
                button.addEventListener('click', () => {
                    let myUrl = `/portfolio.html?profile=${info.slug}`
                    link.href = myUrl
                })

                link.append(button)
                personInfo.append(image, header, link)
                personContainer.append(personInfo)
                main.append(personContainer)
    
            }
        }
    }   


    async function renderProfileFrontPage() {
        let response = await fetch(`http://localhost:3000/user/getAll`)
        let personContainer = document.createElement("div")
        personContainer.classList.add("personContainer")
        main.append(personContainer)

        let data = await response.json();
        
            for (let i = 0; i < data.length; i++) {
                const info = data[i];            
                
    
                let personInfo = document.createElement("div")
                personInfo.classList.add("personInfo")
                
                let image = document.createElement("img")
                image.classList.add("image")
                image.src = info.img
                
                let header = document.createElement("h3")
                header.innerHTML = info.shortDesc
                
                let button = document.createElement("button")
                button.classList.add("readMoretBtn")
                button.innerText = "Läs Mer"

                
                let link = document.createElement("a")
                
                button.addEventListener('click', (e) => {
                    let myUrl = `/portfolio.html?profile=${info.slug}`
                    link.href = myUrl
                })
                link.append(button)
                personInfo.append(image, header, link)
                personContainer.append(personInfo)
        }
    }


    document.addEventListener("DOMContentLoaded", () => {
        renderProfileFrontPage()
    })


    


    // <div class="personContainer">
    //     <div class="personInfo">
    //         <img class="image" src="https://anhede.se/wp-content/uploads/2020/10/corporate-headshots-professional-business-portraits-niccolas-albiz-stockholm-gothenburg-self-leaders-sweden-commercial-photographer-jesper-anhede-04579.jpg" alt="">
    //            <h3>Julle-boii</h3>
    //        <a href="/portfolio.html"><button id="readMoretBtn">Läs mer</button></a>
    //     </div>
    // </div>
