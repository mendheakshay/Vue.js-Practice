Vue.component('posts', {
  template: `
    <div>
      <ul>
        <post v-for="post in posts" :key="post.id">{{post.title}}</post>
      </ul>
    </div>
  `,

  data() {
    return {
      posts: [
        {id: 1, title: "Post 1"},
        {id: 2, title: "Post 2"},
        {id: 3, title: "Post 3"},
        {id: 4, title: "Post 4"},
        {id: 5, title: "Post 5"},
      ]
    }
  },
});

Vue.component('post', {
  template: '<li><slot></slot></li>',
});

var main = new Vue({
    el: '#main',
    data: {
      name: "Akshay"
    }
});
