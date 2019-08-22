import React from 'react'

class Carousel extends React.Component {
  state = {
    children: [],
    currIdx: 0,
    width: 0,
    dir: 'next',
  }

  prev = () => {
    let len = this.state.children.length
    let currIdx = (this.state.currIdx - 1) % len
    if (currIdx < 0) {
      currIdx += len
    }

    this.setState({
      currIdx,
      dir: 'prev',
    })
  }

  next = () => {
    let len = this.state.children.length
    let currIdx = (this.state.currIdx + 1) % len
    if (currIdx < 0) {
      currIdx += len
    }

    this.setState({
      currIdx,
      dir: 'next',
    })
  }

  componentDidMount = async () => {
    if (this.props.children.length) {
      await this.setState({
        children: this.props.children,
      })
    } else {
      await this.setState({
        children: [this.props.children],
      })
    }
  }

  render() {
    const { children, currIdx, dir } = this.state

    return (
      <div className='carousel'>
        <div className='arrow' onClick={this.prev}>
          {'<'}
        </div>

        <div className='current-slide'>
          {!!children.length &&
            children.map((child, idx) => {
              const childProps = { key: idx, className: 'method' }
              if (idx === currIdx) {
                if (dir === 'next') {
                  childProps.className = 'method next'
                } else if (dir === 'prev') {
                  childProps.className = 'method prev'
                }

                return React.cloneElement(children[idx], childProps)
              } else {
                return React.cloneElement(children[idx], childProps)
              }
            })}
        </div>

        <div className='arrow' onClick={this.next}>
          {'>'}
        </div>
      </div>
    )
  }
}

export default Carousel
