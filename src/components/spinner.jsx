import React from 'react'

const Spinner = React.createClass({
  render () {
    return (
      <div className="row">
        <div className="col s12 center" style={{paddingTop: '20px'}}>
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Spinner
