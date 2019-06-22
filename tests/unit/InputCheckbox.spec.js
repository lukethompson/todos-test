import { shallowMount } from '@vue/test-utils'
import InputCheckbox from '@/components/InputCheckbox'

const factory = propsData => {
  return shallowMount(InputCheckbox, {
    propsData: {
      ...propsData,
    },
  })
}

describe('InputCheckbox.vue', () => {
  it('renders a checkbox with :checked equal to the value prop', () => {
    const wrapper = factory({
      name: 'sampleCheckbox',
      id: 'sampleCheckbox',
      value: true,
    })

    expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(true)
  })

  it('emits an input event with the :checked value on checkbox change', () => {
    const wrapper = factory({
      name: 'sampleCheckbox',
      id: 'sampleCheckbox',
      value: true,
    })

    const input = wrapper.find('input[type="checkbox"]')
    input.element.checked = false
    input.trigger('change')

    expect(wrapper.emitted().input[0]).toEqual([false])
  })
})
