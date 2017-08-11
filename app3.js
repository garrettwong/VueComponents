let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    },
    methods: {
        toggle: function() {
            this.seen = !this.seen;
        }
    }
});