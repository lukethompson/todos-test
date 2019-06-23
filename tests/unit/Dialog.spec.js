import { shallowMount } from '@vue/test-utils'
import Dialog from '@/components/Dialog'

const factory = propsData => {
  return shallowMount(Dialog, {
    propsData: {
      ...propsData,
    },
  })
}

describe('Dialog.vue', () => {
  it('does not render a dialog when the value prop is false', () => {
    const wrapper = factory({
      value: false,
    })

    expect(wrapper.find('.dialog').exists()).toBe(false)
  })

  it('renders a dialog when the value prop is true', () => {
    const wrapper = factory({
      value: true,
    })

    expect(wrapper.find('.dialog').exists()).toBe(true)
  })

  it('emits an input event with null when the .dialog is clicked', () => {
    const wrapper = factory({
      value: true,
    })

    const dialog = wrapper.find('.dialog')
    dialog.trigger('click')

    expect(wrapper.emitted().input[0]).toEqual([null])
  })

  it('does not emit an input event when the .dialog__content is clicked', () => {
    const wrapper = factory({
      value: true,
    })

    const dialogContent = wrapper.find('.dialog__content')
    dialogContent.trigger('click')

    expect(wrapper.emitted()).toMatchObject({})
  })
})
