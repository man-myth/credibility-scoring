import http from "../http-common";

class CreditScoreDataService {
  getAll() {
    return http.get("/scores");
  }
}

export default new CreditScoreDataService();