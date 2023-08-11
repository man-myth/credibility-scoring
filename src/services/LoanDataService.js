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

  delete(id) {
    return http.delete(`/loans/${id}`);
  }
  create(data) {
    return http.post("/loans", data);
  }

  update(id, data) {
    return http.put(`/loans/${id}`, data);
  }
}

export default new LoanDataService();