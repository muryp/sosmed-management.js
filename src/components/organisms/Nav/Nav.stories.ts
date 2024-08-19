import Component from './'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Organisms/Nav',
  render: () => {
    return `<div class="bg-base-100">
      ${Component}
    </div>`
  },
}
export const nav = {}