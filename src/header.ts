
import backgroundImage from './img/Coffee.png'


document.querySelector<HTMLDivElement>('#head')!.innerHTML = `
<img src="${backgroundImage}" class="animate-fade object-cover bg-no-repeat"></img>
`