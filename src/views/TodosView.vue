<template>
  <div class="todos-view fill-height">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import TabItem from '@/components/TabItem'
import TodoAdd from '@/components/TodoAdd'
import TodoItem from '@/components/TodoItem'

export default {
  name: 'TodosView',
  components: {
    TabItem,
    TodoAdd,
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
      'hasTodos',
    ]),
    visibleTodos () {
      return this.activeTab === 'current'
        ? this.remainingTodos
        : this.completedTodos
    },
  },
  mounted () {
    // Would usually get todos here
    // this.getTodos()
  },
  methods: {
    ...mapActions([
      'deleteTodo',
      'getTodos',
      'updateTodo',
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
