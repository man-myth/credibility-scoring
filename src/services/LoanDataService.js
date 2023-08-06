import http from "../http-common";

class LoanDataService {
  getAll() {
    return http.get("/loans");
  }

  getLoans(id){
    return http.get(`/loans/client/${id}`)
  }
  
  getLoansByType(type){
    return http.get(`/loans/${type}`)
  }

}

export default new LoanDataService();