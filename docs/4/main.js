var app;
//var ConditionalRendering;
window.addEventListener('load', (event) => {
//    ConditionalRendering = {
    const ConditionalRendering = {
      data() {
        return {
          seen: true
        }
      }
    };
//    Vue.createApp(ConditionalRendering).mount('#conditional-rendering');
    app = Vue.createApp(ConditionalRendering);
    app.mount('#conditional-rendering');
    console.log(app);
});
