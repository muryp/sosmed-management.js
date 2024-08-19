import { home, list, settings, upload } from '../../atoms/icons/nav'

export default html`
  <nav>
    <ul class="menu menu-horizontal md:menu-vertical bg-base-200 rounded-box">
      <li>
        <a href="#"> ${home} </a>
      </li>
      <li>
        <a href="#list"> ${list} </a>
      </li>
      <li>
        <a href="#upload"> ${upload} </a>
      </li>
      <li>
        <a href="#settings">${settings}</a>
      </li>
    </ul>
  </nav>
`
