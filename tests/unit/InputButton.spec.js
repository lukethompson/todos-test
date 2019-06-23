import { shallowMount } from '@vue/test-utils'
import InputButton from '@/components/InputButton'

const factory = propsData => {
  return shallowMount(InputButton, {
    propsData: {
      ...propsData,
    },
  })
}

describe('InputButton.vue', () => {
  it('renders a button with the type equal to the type prop', () => {
    const wrapper = factory({
      type: 'submit',
    })

    expect(wrapper.find('button').element.type).toBe('submit')
  })

  it('renders a button with a class built from the color prop', () => {
    const wrapper = factory({
      color: 'secondary',
    })

    expect(wrapper.find('button').element.classList).toContain('btn--secondary')
  })

  it('emits a click event when the button is clicked', () => {
    const wrapper = factory()

    const button = wrapper.find('button')
    button.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
