window.addEventListener('load', (event) => {
    const ListRendering = {
      data() {
        return {};
      }
    };
    const app = Vue.createApp(ListRendering);
    app.component('todo-item', {
      template: `<li>This is a todo</li>`
    })
    app.mount('#list-rendering');
});
