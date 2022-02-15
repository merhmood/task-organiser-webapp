function InlineStyle() {
  this.modalWrapper = function (styleFunc) {
    return styleFunc();
  };
}

export default new InlineStyle();
