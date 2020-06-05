import React, { Component } from 'react';

class YesNoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="mymodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
                style={{
                    position: 'fixed',
                    top: 0, right: 0, left: 0,
                    zIndex: 500, backgroundColor: '#00000077', width: '100%', height: '100%'
                }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ position: 'relative'}}>
                            <h5 className="modal-title" 
                            style={{ position: 'absolute', right: 0, left: 0, textAlign: 'center'}}>{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ textAlign: 'right'}}>
                            <p>{this.props.bodyTxt}</p>
                        </div>
                        <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                            <button type="button" className="btn btn-danger"
                                style={{ width: '45%' }} data-dismiss="modal"
                                onClick={this.props.noFunc}
                            >{this.props.noTxt}</button>
                            <button type="button" className="btn btn-success"
                                style={{ width: '45%' }}
                                onClick={this.props.yesFunc}
                            >{this.props.yesTxt}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default YesNoModal;