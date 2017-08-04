export const start = () => {
  var x = Math.floor((Math.random() * 10) + 1);
  var total = 0
  this.state.old = this.state.old += x
  console.log(x);
  console.log('ini total: ', this.state.old);
  return {
    type: 'GROW',
    payload: {
      numberOLD: this.state.old
    }
  }
  // this.setState({
  //   old: this.state.old
  // })
}
