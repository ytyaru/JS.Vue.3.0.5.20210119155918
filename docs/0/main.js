window.addEventListener('load', (event) => {
//    Vue.config.devtools = true; //Uncaught TypeError: Cannot set property 'devtools' of undefined
    const Counter = {
        data() {
            return {
                counter: 0
            }
        },
        mounted() {
            setInterval(() => {
                this.counter++;
            }, 1000);
        }
    };
    Vue.createApp(Counter).mount('#counter')
});
