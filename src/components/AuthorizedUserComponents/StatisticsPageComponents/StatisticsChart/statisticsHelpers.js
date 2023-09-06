export const calculateTaskStatusCount = tasks => {
  const taskStatusCountDay = {
    todo: 0,
    inprogress: 0,
    done: 0,
  };
  const taskStatusCountMonth = {
    todo: 0,
    inprogress: 0,
    done: 0,
  };

  /* -------------------------------------------------------------------------- */
  /* ----------------------------------- DAY ---------------------------------- */
  /* -------------------------------------------------------------------------- */
  taskStatusCountDay.todo =
    tasks.find(task => task.category === 'to-do')?.amount || 0;
  taskStatusCountDay.inprogress =
    tasks.find(task => task.category === 'in-progress')?.amount || 0;
  taskStatusCountDay.done =
    tasks.find(task => task.category === 'done')?.amount || 0;

  /* -------------------------------------------------------------------------- */
  /* ---------------------------------- MONTH --------------------------------- */
  /* -------------------------------------------------------------------------- */
  taskStatusCountMonth.todo =
    tasks.find(task => task.category === 'to-do')?.amount || 0;
  taskStatusCountMonth.inprogress =
    tasks.find(task => task.category === 'in-progress')?.amount || 0;
  taskStatusCountMonth.done =
    tasks.find(task => task.category === 'done')?.amount || 0;
  return [taskStatusCountDay, taskStatusCountMonth];
};

export const calculatePercentages = tasks => {
  const allTasksAmount = tasks.todo + tasks.inprogress + tasks.done;
  const todoPercentage = Math.round((tasks.todo / allTasksAmount) * 100 || 0);
  const inprogressPercentage = Math.round(
    (tasks.inprogress / allTasksAmount) * 100 || 0
  );
  const donePercentage = Math.round((tasks.done / allTasksAmount) * 100 || 0);
  return { todoPercentage, inprogressPercentage, donePercentage };
};
