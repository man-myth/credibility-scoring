import http from "../http-common";

class CreditScoreDataService {
  getAll() {
    return http.get("/credit-score");
  }
}

export default new CreditScoreDataService();