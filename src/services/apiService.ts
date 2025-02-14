
const apiHeaders = {
    headers: {
    "x-key": import.meta.env.VITE_API_KEY
    }
}
const apiUrl = import.meta.env.VITE_API_URL;
// const apiUrl = window.__RUNTIME_CONFIG__.VITE_API_URL || "fallback";

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
    let dat = await r.json();
    return dat;
  },

  async setBssidTag(bssid:string, tag_id:number){
    fetch(`${apiUrl}/bssidtag`, {
      method: "POST",
      body: JSON.stringify({
        bssid_id: bssid,
        tag_id: tag_id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-key": import.meta.env.VITE_API_KEY
      }
});

}

}
