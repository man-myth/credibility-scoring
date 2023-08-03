import http from "../http-common";

class LoanDataService {
  getAll() {
    return http.get("/loans");
  }

  getLoans(id){
    return http.get(`/loans/${id}`)
  }

}

export default new LoanDataService();