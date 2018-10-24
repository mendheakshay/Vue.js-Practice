var main = new Vue({
    el: '#main',
    data: {
    	message: "Akshay",
      isActive: 'not active'
  	},
    watch: {
      isActive : function (newValue) {
        console.log("Sending an email to " + newValue + " user");
      }
    }
});
