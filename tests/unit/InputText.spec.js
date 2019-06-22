import { shallowMount } from '@vue/test-utils'
import InputText from '@/components/InputText'

const factory = propsData => {
  return shallowMount(InputText, {
    propsData: {
      ...propsData,
    },
  })
}

describe('InputText.vue', () => {
  it('renders a placeholder', () => {
    const samplePlaceholder = 'Sample Placeholder'
    const wrapper = factory({
      placeholder: samplePlaceholder,
      value: '',
    })

    expect(wrapper.find('input').element.placeholder).toBe(samplePlaceholder)
  })

  it('renders the value', () => {
    const sampleValue = 'Sample Value'
    const wrapper = factory({
      value: sampleValue,
    })

    expect(wrapper.find('input').element.value).toBe(sampleValue)
  })

  it('renders the updated value if the value is changed', () => {
    const sampleValue = 'Sample Value'
    const wrapper = factory({
      value: '',
    })

    wrapper.setProps({
      value: sampleValue,
    })

    expect(wrapper.find('input').element.value).toBe(sampleValue)
  })

  it('changing the inputs value updates the localValue', () => {
    const sampleValue = 'Sample Value'
    const wrapper = factory({
      value: '',
    })

    const input = wrapper.find('input')
    input.element.value = sampleValue
    input.trigger('input')

    expect(wrapper.vm.$data.localValue).toBe(sampleValue)
  })

  it('changing the inputs value emits an input event with the updated value', () => {
    const sampleValue = 'Sample Value'
    const wrapper = factory({
      value: '',
    })

    const input = wrapper.find('input')
    input.element.value = sampleValue
    input.trigger('input')

    expect(wrapper.emitted().input[0]).toEqual([sampleValue])
  })
})
