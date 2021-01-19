window.addEventListener('load', (event) => {
    const AttributeBinding = {
      data() {
        return {
          message: 'ロードした日時：' + new Date().toLocaleString()
        }
      }
    };
    Vue.createApp(AttributeBinding).mount('#bind-attribute')
});
