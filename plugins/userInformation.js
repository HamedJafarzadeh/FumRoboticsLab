export default ({ app }, inject) => {
  async function InitUserInfo() {
    let userCountry = await app.$axios.get('https://get.geojs.io/v1/ip/country/full/');
    if (userCountry.data.indexOf("Iran") >= 0) {
      app.store.commit('setIran', true);
    }
    else{
      app.store.commit('setIran', false);
    }
  }
  InitUserInfo();
}
