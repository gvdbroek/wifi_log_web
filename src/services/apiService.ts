const apiHeaders = {
    headers: {
    "x-key": import.meta.env.API_KEY
    }
}
const apiUrl = "http://127.0.0.1:8000";

export const apiService = {
  getStatus(){
    return "Status is ok";
  },
  async fetchTags(target){

    fetch(`${apiUrl}/tags`, apiHeaders)
      .then(response => response.json())
      .then(data => {
        target.value = data;
      });

  },
  async getTags(){
    let r = await fetch(`${apiUrl}/tags`, apiHeaders);
    return await r.json();
  },
  async fetchBssids (target){
  fetch(`${apiUrl}/bssids`, apiHeaders)
    .then(response => response.json())
    .then(data =>{
          target.value = data;})

  },

  async fetchBssidTags(target){
  fetch(`${apiUrl}/bssidtag`, apiHeaders)
    .then(response => response.json())
    .then(data =>{
          target.value = data;})

  },
  async fetchReport(year:number, month:number){
    let r = await fetch(`${apiUrl}/report?year=${year}&month=${month}`, apiHeaders);
    return await r.json();

}

}
