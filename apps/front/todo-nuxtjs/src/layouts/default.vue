<script setup lang="ts">
const menuStore = useMenuStore();

const openedTodoDetailModal = false;
const openedTodoEditModal = false;

const todo1 = {
  title: 'test',
  description: 'testtesttest',
  deadlineAt: '2024-01-01',
};
const todo2 = {
  title: 'test',
  description: 'testtesttest',
};

function closeMenu() {
  menuStore.toggle();
}
</script>

<template>
  <div>
    <Menu
      v-if="menuStore.isOpen"
      user-name="username"
      :sign-out="() => {}"
      :close-menu="closeMenu"
    />
    <ModalTodoDetail
      v-if="openedTodoDetailModal"
      :todo="todo1"
      :locate-completed="true"
      :disabled="{
        completedButtonDisabled: false,
        deletedButtonDisabled: false,
      }"
      :event="{
        clickCompletedButton: () => {},
        clickEditButton: () => {},
        clickDeleteButton: () => {},
      }"
    />
    <ModalTodoEdit
      v-if="openedTodoEditModal"
      :todo="todo2"
      :event="{
        onClickEdit: () => {},
      }"
    />
    <HeaderCommonHeader />
    <Error :displayed="true" text="error" />
    <div class="layout">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  margin: 0 auto;
  padding: 44px 15px;
  max-width: 512px;
}
</style>
