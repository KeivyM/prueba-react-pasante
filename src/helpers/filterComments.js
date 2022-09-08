export const filterComments = (idPost, comments) => {
  const commentsFiltered = comments.filter(
    (comment) => idPost === comment.idPost
  );

  return commentsFiltered;
};
