module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
      client_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      age: {
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
      residence: {
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
      epenses: {
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