var main = new Vue({
    el: '#main',
    data: {
    	name: "Akshay",
    	fontSize: 30
    },
    methods: {
    	increaseFont: function() {
    		this.fontSize++;
    	},
    	decreaseFont: function() {
    		this.fontSize--;
    	}

    }
});
