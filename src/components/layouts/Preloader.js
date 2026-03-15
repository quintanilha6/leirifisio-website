import React, { Component } from 'react';

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	fetchSuccess: false
	}
  }

  componentDidMount() {
    fetch('assets/img/leirifisio/logo-sem-texto.png')
      .then(response => {
		this.setState({
			fetchSuccess: true
		});
  	})
      .catch(() => {
        this.setState({
          fetchSuccess: true
        });
      });
  }
  render() {
    const{ fetchSuccess } = this.state;
    return (
      <div className={ (fetchSuccess? "d-none ":"") + "preloader align-items-center justify-content-center "}>
        <div className="cssload-container">
          <div className="cssload-loading"><i /><i /><i /><i /></div>
        </div>
      </div>
    );
  }
}

export default Preloader;
