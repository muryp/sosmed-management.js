import Cover from '../atoms/Cover'
import DarkBtn from '../moleculs/DarkBtn'
import Nav from '../organisms/Nav'

export default function () {
  return Cover(html`
    <div
      class="fixed bottom-5 w-full text-center
      md:h-[100vh] md:w-fit md:bottom-0 md:flex
      md:justify-center md:items-center">
      ${Nav}
    </div>
    <div class="fixed bottom-16 right-auto">${DarkBtn}</div>
    <div id="main"></div>
  `)
}
