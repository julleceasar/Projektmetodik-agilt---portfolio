
const headerText = document.getElementById('HeaderName')
const slogan = document.getElementById('slogan')
const profileSection = document.getElementsByClassName('projekt')[0]

const initSite = async () => {
    const slug = getUrlParams()
    const profile =  await fetchSpecProfile(slug)
    renderProfile(profile)
    
}


const getUrlParams = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const slug = urlParams.get('profile')
    return slug
}

const fetchSpecProfile =  async (slug) => {
    const res = await fetch(`/user/getSlug/${slug}`)
    const test = await res.json()
    console.log(test)
    return test
}

const renderProfile = (profile) => {
    headerText.innerText = profile[0].fname + ' ' + profile[0].lname
    slogan.innerText = profile[0].slogan

    profileSection.innerHTML = `
    <div class="container">
    <div class="info">
        <img class="image" src=${profile[0].img} alt="">
        
    </div>
    <div class="info">
        
      <form id='form'>
        <h2>Kontakta mig</h2><br>
          <p>Är du intresserad av mina tjänster eller har andra frågor ? Vänligen fyll i formuläret nedan så hör jag personligen av mig inom 24h!</p><br>
            <label for="name">Namn:</label><br>
            <input type="text" id="name" name="name" required><br>
            <label for="email">Email Address:</label><br>
            <input type="email" id="email" name="email" required><br>
            <input id='kontaktBtn' type="submit" value="KONTAKTA MIG">
            <div id='messageInfo'></div>
      </form>                    
    </div>
</div>
<div class="container">
    <div class="info">                    
        <p>${profile[0].description.slice(0,495)}...</p>                   
    </div>
    <div class="skillsInfo">
        <h3>Skills</h3>
            <div class="starContainer" id="html">
            <p>HTML:</p>
        </div>
        <div class="starContainer" id="css">
            <p>CSS:</p>
        </div>
        <div class="starContainer" id="javascript">
            <p>JavaScript:</p>
        </div>
        <div class="starContainer" id="php">
            <p>PHP:</p>
        </div>    
        <i>* Denna skala är baserad på konsultens projekt och erfarenhet *</i>     
    </div>
</div>

<h2 class="title">Mina projekt</h2>

<div class="projektContainer">
   
</div>
    `
    // SEND FORM DATA TO DATABASE'

    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const messageDiv = document.getElementById('messageInfo')
    const form = document.getElementById('form')


    
    form.addEventListener('submit', (e) => {
        sendMsgToDatabase(e, nameInput.value, emailInput.value, profile[0]._id, messageDiv)
    })


    // LOOP AND RENDER THE PROJECTS

    const projectContainer = document.getElementsByClassName('projektContainer')[0]
    
    profile[0].project.forEach((project) => {
        const projectParent = document.createElement('div')
        projectParent.setAttribute('id', 'projectParent')
        projectParent.innerHTML = `
        <div class="info">
        
        <h4 class="title">${project.name}</h4>
        <img class="miniImage" src=${project.img} alt="">
        <p class="projektText">${project.description}</p>

    </div>
        `
        projectContainer.append(projectParent)
    })

    // SKILLS AND STARS START HERE!!!
    const htmlContainer = document.getElementById('html')
    const cssContainer = document.getElementById('css')
    const javaScriptContainer = document.getElementById('javascript')
    const phpContainer = document.getElementById('php')
    
    for (let i = 0; i < 5; i++) {

        if(i < profile[0].html) {
            const starIcon = document.createElement('i')
            starIcon.className = 'fa-sharp fa-solid fa-star stars'
            htmlContainer.append(starIcon)
            
        } else {
            const starIcon = document.createElement('i')
            const skillName = document.createElement('p')
            starIcon.className = 'fa-regular fa-star stars'
            
            htmlContainer.append(starIcon)
        }

        if(i < profile[0].css) {
            const starIcon = document.createElement('i')
            starIcon.className = 'fa-sharp fa-solid fa-star stars'
            cssContainer.append(starIcon)
            
        } else {
            const starIcon = document.createElement('i')
            const skillName = document.createElement('p')
            starIcon.className = 'fa-regular fa-star stars'
            
            cssContainer.append(starIcon)
        }

        if(i < profile[0].javaScript) {
            const starIcon = document.createElement('i')
            starIcon.className = 'fa-sharp fa-solid fa-star stars'
            javaScriptContainer.append(starIcon)
            
        } else {
            const starIcon = document.createElement('i')
            const skillName = document.createElement('p')
            starIcon.className = 'fa-regular fa-star stars'
            
            javaScriptContainer.append(starIcon)
        }

        
        if(i < profile[0].php) {
            const starIcon = document.createElement('i')
            starIcon.className = 'fa-sharp fa-solid fa-star stars'
            phpContainer.append(starIcon)
            
        } else {
            const starIcon = document.createElement('i')
            const skillName = document.createElement('p')
            starIcon.className = 'fa-regular fa-star stars'
            
            phpContainer.append(starIcon)
        }
        
    }

}

const sendMsgToDatabase = async (e, name, email, userId, messageDiv) => {
    e.preventDefault()
    const message = {
        name,
        email,
        userId
    }

    const response = await fetch('/user/contactRequest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(message)
    })

    const result = await response.json()
    messageDiv.innerText = `${result} ✅`

}


window.addEventListener('load', initSite)