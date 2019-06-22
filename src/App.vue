<template>
  <div id="app">
    <div class="container">
      <img
        class="logo"
        src="./assets/todos_logo.svg"
      >
      <div class="card fill-height">
        <TodosView />
      </div>
      <InputButton
        class="container__action"
        @click="getTodos"
      >
        Load Sample Todos
      </InputButton>
    </div>
    <Dialog v-model="isActiveTodo">
      <TodoEdit />
    </Dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

import Dialog from '@/components/Dialog'
import InputButton from '@/components/InputButton'
import TodoEdit from '@/components/TodoEdit'
import TodosView from './views/TodosView.vue'

export default {
  name: 'App',
  components: {
    Dialog,
    InputButton,
    TodoEdit,
    TodosView,
  },
  computed: {
    ...mapGetters([
      'hasActiveTodo',
    ]),
    isActiveTodo: {
      get () {
        return this.hasActiveTodo
      },
      set (value) {
        this.setActiveTodo(value)
      },
    },
  },
  methods: {
    ...mapActions([
      'getTodos',
    ]),
    ...mapMutations([
      'setActiveTodo',
    ]),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap');
@import '~normalize.css/normalize.css';

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;

  border-top: .4rem solid $color-primary;

  color: $color-font;
  font-family: $font-family;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 800px;
  height: calc(100vh - 4px);
  margin: 0 auto;
  padding: 0 1rem;
  overflow: hidden;

  &__action {
    margin: 1rem 0;
  }
}

.logo {
  display: block;
  width: 26rem;
  margin: 3rem auto 3.5rem auto;
}

.card {
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0,0,0,.1);
  overflow: hidden;
}

.fill-height {
  height: 100%;
}

</style>
