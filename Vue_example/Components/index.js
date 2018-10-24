Vue.component('post', {
  template: `<p>Hey there</p>`
});

Vue.component('posts', {

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
