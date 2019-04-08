const appMenu = new Vue({
  el: '#menu',
  data: {
    isOpen: false
  },
  methods: {
    showOrHideSidebar: function() {
      this.isOpen = !this.isOpen
    }
  },
  //delimiters: ["[[","]]"]
})