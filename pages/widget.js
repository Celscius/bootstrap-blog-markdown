
async function widgettest(mynavbar) {
    const navbar = await widget().scrollspy()
}
widgettest()


/*
  2024-07-25 18:36
  function to create scrollspy for md file
  create link for h2 element
*/
function widget() {
    const scrollspy = (config) => {
      const element = document.getElementById('widget')
        
        return new Promise((resolve, reject) => {
            const template = scrollspy_create()
            element.innerHTML = template

            resolve()
            reject()
        })
    }

    const scrollspy_create = (config) => {
      const element = config?.element ? config.element : 'h2'


        const query = document.querySelectorAll(element); // returns NodeList
        const contents = [...query]; // converts NodeList to Array
        console.log(contents)

        const widget = contents.map(scrollspy_item).join('');
        //const widget = contents.forEach(scrollspy_item)

        const list = `<ul>${widget}</ul>`
        return list;
    }

    const scrollspy_item = (item,index,arr) => {
      
        const text = item?.innerHTML ? item.innerHTML : ""
        const url = item?.id ? item.id : ""

        const template = `
<li><a href="#${url}" style="text-decoration: none;color: black">${text}</a></li>
    `
    return template
    }

    return {
        scrollspy: scrollspy,
        scrollspy_element: scrollspy_create,
        scrollspy_item:scrollspy_item

    }

}