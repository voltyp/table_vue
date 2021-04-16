export default {
  twoWay: true, // this transformation applies back to the vm
  bind() {
    this.handler = function () {
      this.set(this.el.value.toUpperCase());
    }.bind(this);
    this.el.addEventListener('input', this.handler);
  },
  unbind() {
    this.el.removeEventListener('input', this.handler);
  },
};
