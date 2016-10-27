/* global React ReactDOM */

let div = React.DOM.div
let h1 = React.DOM.h1

let MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({ style: {color: this.props.color} }, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
// let MyFirstComponent = (
//   div (null,
//     React.createElement(MyTitle, null),
//     React.createElement(MyTitle, null),
//     React.createElement(MyTitle, null)
//   )
// )

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
    MyTitleFact({title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    MyTitleFact({title: 'Props are the best!', color: 'peru'})
  )
)

ReactDom.render(MyFirstComponent, document.getElementById('app'))
