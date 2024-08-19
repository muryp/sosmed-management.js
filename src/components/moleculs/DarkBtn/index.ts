import { moon, sun } from '../../atoms/icons/themes'

export default html`
  <label class="swap swap-rotate btn btn-circle btn-md">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" class="theme-controller" value="synthwave" />
    ${sun} ${moon}
  </label>
`
