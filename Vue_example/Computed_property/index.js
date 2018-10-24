var main = new Vue({
    el: '#main',
    data: {
    	message: "Akshay",
  	},
  	computed: {
	    // a computed getter
	    reversedMessage: function () {
	      // `this` points to the vm instance
	      return this.message.split('').reverse().join('')
	    }
  	}
});
