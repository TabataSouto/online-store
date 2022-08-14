export const saveEvaluation = (evaluation) => localStorage
  .setItem('assessments', JSON.stringify(evaluation));

export const getEvaluation = () => JSON.parse(localStorage.getItem('assessments'));
