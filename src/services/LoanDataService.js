import http from "../http-common";

class LoanDataService {
  getAll() {
    return http.get("/loans");
  }

}

export default new LoanDataService();