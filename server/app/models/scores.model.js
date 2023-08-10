module.exports = (sequelize, Sequelize) => {
    const scores = sequelize.define("scorecards", {
      feature_name: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      score: {
        type: Sequelize.INTEGER
      },

    });
  
    return scores;
  };