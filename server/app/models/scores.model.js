module.exports = (sequelize, Sequelize) => {
    const scores = sequelize.define("scores", {
      feature_name: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      score: {
        type: Sequelize.STRING
      },

    });
  
    return scores;
  };