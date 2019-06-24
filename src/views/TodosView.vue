<template>
  <div class="todos-view card fill-height">
    <TodoAdd />
    <div
      v-if="!hasTodos"
      class="todos-view__message"
    >
      You don't have any todos :(
    </div>
    <template v-if="hasTodos">
      <div class="todos-view__filter-tabs">
        <TabItem
          :is-active="activeTab === 'current'"
          @click="activeTab = 'current'"
        >
          Current ({{ remainingTodos.length }})
        </TabItem>
        <TabItem
          :is-active="activeTab === 'completed'"
          @click="activeTab = 'completed'"
        >
          Completed ({{ completedTodos.length }})
        </TabItem>
      </div>
      <div class="todos-view__content fill-height">
        <template v-if="visibleTodos.length">
          <TodoItem
            v-for="todo in visibleTodos"
            :key="todo.id"
            :todo="todo"
          />
        </template>
        <div
          v-else
          class="todos-view__message"
        >
          You don't have any {{ activeTab }} todos :(
        </div>
      </div>
    </template>
    <Dialog v-model="isActiveTodo">
      <TodoEdit />
    </Dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import Dialog from '@/components/Dialog'
import TodoEdit from '@/components/TodoEdit'
import TabItem from '@/components/TabItem'
import TodoAdd from '@/components/TodoAdd'
import TodoItem from '@/components/TodoItem'

export default {
  name: 'TodosView',
  components: {
    Dialog,
    TabItem,
    TodoAdd,
    TodoEdit,
    TodoItem,
  },
  data () {
    return {
      activeTab: 'current',
    }
  },
  computed: {
    ...mapGetters([
      'remainingTodos',
      'completedTodos',
      'hasActiveTodo',
      'hasTodos',
    ]),
    isActiveTodo: {
      get () {
        return this.hasActiveTodo
      },
      set (value) {
        this.setActiveTodo(value)
      },
    },
    visibleTodos () {
      return this.activeTab === 'current'
        ? this.remainingTodos
        : this.completedTodos
    },
  },
  methods: {
    ...mapMutations([
      'setActiveTodo',
    ]),
  },
}
</script>

<style lang="scss" scoped>
  .todos-view {
    display: flex;
    flex-direction: column;

    &__message {
      padding: 2rem;

      color: $color-grey;
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
    }

    &__filter-tabs {
      display: flex;
      justify-content: center;
    }

    &__content {
      overflow-y: auto;
    }
  }
</style>
