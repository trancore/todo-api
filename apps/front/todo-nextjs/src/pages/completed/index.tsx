﻿import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { wrapper } from '~/store/root';

import TodoEclipse from '~/components/container/Todo/TodoEclipse';
import TodoIconBox from '~/components/container/Todo/TodoIconBox';

import { STATUS } from '~/constants';

import {
  getRunningQueriesThunk,
  getTodos,
  useGetTodosQuery,
} from '~/services/todo';

import { dateFormat } from '~/utils/date';

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
const StyledTodo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTodoUnder = styled.div`
  margin-top: 8px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`;
const StyledTodoDeadlineAt = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: bold;
`;

export default function Completed() {
  const { data: todoList } = useGetTodosQuery(`${STATUS.DONE}`, {
    refetchOnMountOrArgChange: true,
  });
  const t = useTranslations('pages');

  const { formatToYYYYMMdd, colorizeDate } = dateFormat();

  return (
    <>
      <h1>{t('completed.heading')}</h1>
      <StyledTodoList>
        {todoList && todoList.length > 0
          ? todoList?.map((todo) => {
              return (
                <StyledTodo key={todo.id} id="todo">
                  <TodoEclipse
                    presentational={{
                      title: todo.title,
                      description: todo.description,
                    }}
                    id={String(todo.id)}
                    deadlineAt={todo.deadlineAt}
                  />
                  <StyledTodoUnder>
                    {todo.deadlineAt ? (
                      <StyledTodoDeadlineAt
                        color={colorizeDate(new Date(todo.deadlineAt))}
                        test-id="todo-deadline"
                      >
                        {formatToYYYYMMdd(new Date(todo.deadlineAt))}
                      </StyledTodoDeadlineAt>
                    ) : (
                      <p>{''}</p>
                    )}
                    <TodoIconBox
                      todoId={todo.id}
                      hasIcons={{ hasUncheck: true, hasTrashCan: true }}
                    />
                  </StyledTodoUnder>
                </StyledTodo>
              );
            })
          : []}
      </StyledTodoList>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      await store.dispatch(getTodos.initiate(`${STATUS.DONE}`));
      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      const messages = await import(`~/messages/${locale}.json`);

      return {
        props: {
          messages: messages.default,
        },
      };
    },
);
