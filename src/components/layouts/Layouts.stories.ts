import Cover from '../atoms/Cover'
import Component from './'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Layouts',
  render: () => {
    return Cover(Component())
  },
}
export const Layouts = {}