import { shallowMount } from '@vue/test-utils'
import TabItem from '@/components/TabItem'

const factory = propsData => {
  return shallowMount(TabItem, {
    propsData: {
      ...propsData,
    },
  })
}

describe('TabItem.vue', () => {
  it('renders a button without the active class when isActive is false', () => {
    const wrapper = factory({
      isActive: false,
    })

    expect(wrapper.find('button').element.classList).not.toContain('tab-item--active')
  })

  it('renders a button with the active class when isActive is true', () => {
    const wrapper = factory({
      isActive: true,
    })

    expect(wrapper.find('button').element.classList).toContain('tab-item--active')
  })

  it('emits a click event when the button is clicked', () => {
    const wrapper = factory({
      isActive: false,
    })

    const button = wrapper.find('button')
    button.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
