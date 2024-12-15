<script setup lang="ts">
type Props = {
  todoId: number;
  uncheck?: {
    has: boolean;
    click: () => void;
  };
  check?: {
    has: boolean;
  };
  squareEdit?: {
    has: boolean;
    click: () => void;
  };
  trashCan?: {
    has: boolean;
    click: () => void;
  };
  refresh: (opts?: { dedupe?: 'cancel' | 'defer' }) => Promise<void>;
};

const { todoId, uncheck, check, squareEdit, trashCan, refresh } =
  defineProps<Props>();

const { execute: postTodosTodoidStatus } = await useApiClient(
  '/todos/{todo_id}/status',
  {
    method: 'put',
    params: {
      todo_id: String(todoId),
    },
    body: {
      status: 'DONE',
    },
    server: false,
    immediate: false,
  },
);

const clickCheck = async () => {
  await postTodosTodoidStatus();
  setTimeout(() => refresh(), 100);
};
</script>

<template>
  <div class="todo-icon-box">
    <Icon
      v-if="uncheck?.has"
      name="Uncheck"
      :size="48"
      :click-icon="uncheck.click"
    />
    <Icon v-if="check?.has" name="Check" :size="48" :click-icon="clickCheck" />
    <Icon
      v-if="squareEdit?.has"
      name="SquareEdit"
      :size="48"
      :click-icon="squareEdit.click"
    />
    <Icon
      v-if="trashCan?.has"
      name="TrashCan"
      :size="48"
      :click-icon="trashCan.click"
    />
  </div>
</template>

<style lang="scss" scoped>
.todo-icon-box {
  display: flex;
  gap: 24px;
}
</style>
