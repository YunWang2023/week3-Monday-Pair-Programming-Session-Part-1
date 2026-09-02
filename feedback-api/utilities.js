// let feedbacks = [];
// let nextId = 1;

// const Feedback = {
//   getAll: () => {
//     return feedbacks;
//   },

//   addOne: (sender, message, rating, platform) => {
//     const newFeedback = {
//       id: nextId++,
//       sender,
//       message,
//       rating,
//       platform
//     };

//     feedbacks.push(newFeedback);
//     return newFeedback;
//   },

//   findById: (feedbackId) => {
//     return feedbacks.find(
//       (feedback) => feedback.id == feedbackId
//     );
//   },

//   updateById: (feedbackId, updates) => {
//     const feedback = feedbacks.find(
//       (feedback) => feedback.id == feedbackId
//     );

//     if (!feedback) {
//       return null;
//     }

//     Object.assign(feedback, updates);
//     return feedback;
//   },

//   deleteOneById: (feedbackId) => {
//     const index = feedbacks.findIndex(
//       (feedback) => feedback.id == feedbackId
//     );

//     if (index === -1) {
//       return false;
//     }

//     feedbacks.splice(index, 1);
//     return true;
//   }
// };

// module.exports = Feedback;