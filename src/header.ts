
import backgroundImage from './img/Coffee.png'


document.querySelector<HTMLDivElement>('#nav')!.innerHTML = `
<img src="${backgroundImage}" class="animate-fade object-cover bg-no-repeat"></img>
`