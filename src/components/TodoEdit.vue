<template>
  <form
    v-if="localTodo"
    class="edit-todo"
    @submit.prevent="onEditTodoSubmit"
  >
    <div class="edit-todo__heading">
      <h2 class="edit-todo__title">
        Edit Todo
      </h2>
      <InputButton
        :type="'button'"
        :color="'warning'"
        @click="onDeleteTodoClick()"
      >
        <img
          src="../assets/trash.svg"
          height="16px"
          alt="Trash icon"
        >
      </InputButton>
    </div>
    <InputText v-model="localTodo.title" />
    <InputCheckbox
      :id="'edit-todo-checkbox'"
      v-model="localTodo.completed"
      :name="'edit-todo-checkbox'"
      :label="'Mark as completed'"
    />
    <div class="edit-todo__btns-container">
      <InputButton
        :type="'button'"
        :color="'tertiary'"
        @click="setActiveTodo(null)"
      >
        Cancel
      </InputButton>
      <InputButton :type="'submit'">
        Save
      </InputButton>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

import InputButton from './InputButton'
import InputCheckbox from './InputCheckbox'
import InputText from './InputText'

export default {
  name: 'TodoEdit',
  components: {
    InputButton,
    InputCheckbox,
    InputText,
  },
  data () {
    return {
      localTodo: null,
    }
  },
  computed: {
    ...mapState([
      'active',
    ]),
  },
  watch: {
    active: {
      handler: function (value) {
        this.localTodo = { ...value }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions([
      'deleteTodo',
      'updateTodo',
    ]),
    ...mapMutations([
      'setActiveTodo',
    ]),
    onEditTodoSubmit () {
      this.localTodo.title = this.localTodo.title.trim()
      if (this.localTodo.title === '') return

      this.updateTodo(this.localTodo)
        .then(() => this.setActiveTodo(null))
    },
    onDeleteTodoClick () {
      this.deleteTodo(this.localTodo)
        .then(() => this.setActiveTodo(null))
    },
  },
}
</script>

<style lang="scss" scoped>
  .edit-todo {
    &__heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      font-size: 2rem;
    }

    &__btns-container {
      display: flex;
      justify-content: flex-end;

      & > :first-child {
        margin-right: 2rem;
      }
    }
  }
</style>
