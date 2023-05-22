let disc = document.getElementById('discord')
disc.value = 'Mateus M#9119'

disc.addEventListener('click', ev => {
  ev.preventDefault()

  navigator.clipboard.writeText(disc.value)
  disc.classList.add("copied")
  disc.classList.remove('bi')
  
  setTimeout(()=> {
      disc.classList.remove('copied')
      disc.classList.add('bi')
  }, 1000 * 1)
})



let email = document.getElementById('email')
email.value = "dev.mateusmac@gmail.com"

email.addEventListener('click', ev => {
  ev.preventDefault()

  navigator.clipboard.writeText(email.value)
  email.classList.remove('bi')
  email.classList.add('copied')
  
  setTimeout(()=> {
    email.classList.remove('copied')
    email.classList.add('bi')
}, 1000 * 1.5)
})


async function getDataOnGithub(){
  let projects = await fetch("https://api.github.com/users/DevMateusmac/repos").then(res => res.json())
  projects.forEach(renderProjects)
}
getDataOnGithub()

function renderProjects(data){
  const myProjects = document.getElementById('my-projects')

  let link = document.createElement('a')
  link.href = data.clone_url
  link.target = "_blank"
  link.textContent = data.name

  myProjects.appendChild(link)
}