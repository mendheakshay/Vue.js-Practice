Vue.component('posts', {
  template: `<h1 @click="display">Hello {{name}} {{data}}</h1>`,

  props: ['data'],

  data() {
    return {
      name: "Akshay"
    }
  },

  methods: {
    display() {
      console.log("Hello");
    }
  }
});

var main = new Vue({
    el: '#main',
    data: {
      name: "Akshay"
    }
});
