module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
      client_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      picture:{
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      contact:{
        type: Sequelize.STRING
      },
      credit_score:{
        type: Sequelize.INTEGER
      },
      marital_status: {
        type: Sequelize.STRING
      },
      dependents: {
        type: Sequelize.INTEGER
      },
      education: {
        type: Sequelize.STRING
      },

      housing: {
        type: Sequelize.STRING
      },
      years_residence: {
        type: Sequelize.INTEGER
      },
      employment: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      loan_history: {
        type: Sequelize.STRING
      },
      income: {
        type: Sequelize.INTEGER
      },
      expenses: {
        type: Sequelize.INTEGER
      },
      savings: {
        type: Sequelize.INTEGER
      },
      properties: {
        type: Sequelize.TEXT
      },
    });
  
    return Client;
  };