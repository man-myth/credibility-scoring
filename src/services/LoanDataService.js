import http from "../http-common";

class LoanDataService {
  getAll() {
    return http.get("/loans");
  }

  getLoans(id){
    return http.get(`/loans/client/${id}`)
  }

  countLoans(id){
    return http.get(`/loans/count/${id}`)
  }
  
  getLoansByType(type){
    return http.get(`/loans/type/${type}`)
  }

}

export default new LoanDataService();