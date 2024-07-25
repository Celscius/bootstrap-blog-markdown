const configApp = {
    element: "app"
}

async function appTest(myApp) {
    const app = await containerApp(myApp)
}
appTest(configApp)

// main function here
function containerApp(config) {
    const element = document.getElementById("app")
    const markdown = ""
   
    return new Promise((resolve, reject)=>{
        const template = createContainer()
        element.innerHTML = template

        resolve()
        reject()
    })
       
}

function createContainer() {
  const markdown = app 
  return markdown
}


