module.exports = (sequelize, Sequelize) => {
    const Loan = sequelize.define("loan", {
      loan_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      purpose: {
        type: Sequelize.STRING
      },
      loan_status:{
        type: Sequelize.STRING
      },
      loan_amount:{
        type: Sequelize.INTEGER
      },
      guarantors: {
        type: Sequelize.INTEGER
      },
      coapplicant: {
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.INTEGER
      },
      validated_by: {
        type: Sequelize.STRING
      },
      loan_type: {
        type: Sequelize.STRING
      },
    });
  
    return Loan;
  };