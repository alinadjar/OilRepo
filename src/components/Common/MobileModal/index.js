import React, { Component } from 'react';

class MobileConfirmModal extends Component {
    constructor(props) {
        super(props);

        this.interval = 0;


        this.state = {
            phase: 1,
            mobileNumber: null,
            SMSnum1: null,
            SMSnum2: null,
            SMSnum3: null,
            SMSnum4: null,
            timerMinute: 0,
            timerSecond: 20,
            randomInt: 0,
            SMSresendBtnShow: false
        }
    }

    componentDidMount() {
        this.setState({ phase: 1 })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.timerMinute + ':' + this.state.timerSecond)
        if (prevState.timerMinute === 0 && prevState.timerSecond === 0) {
            clearInterval(this.interval);
            console.log('Cleared interval.............................');
            //alert('timeover .... => goto cards');
            this.setState({ phase: 1 }
                , () => console.log('callBack of setState'));
        }
    }


    triggerMyTimer = () => {
        const min = 1000;
        const max = 9999;
        const rand = min + Math.random() * (max - min);
        this.setState({ randomInt: Math.round(rand), verifySMS: 0 });
        alert(Math.round(rand));
        console.log(Math.round(rand));
        
        // Axios Call to API and send SMS
        // [POST] /api/v1/SendSMS/{mobile: 09150000, msg: 748}



        this.interval = setInterval(
            () => this.setState((prevState) => {
                return {
                    timerMinute: Math.max(prevState.timerSecond === 0 ? prevState.timerMinute - 1 : prevState.timerMinute, 0),
                    timerSecond: prevState.timerSecond - 1 < 0 ? 59 : (prevState.timerSecond - 1)
                }
            }),
            1000
        );
    }

    render() {
        return (
            <div className="mymodal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
                style={{
                    position: 'fixed',
                    top: 0, right: 0, left: 0,
                    zIndex: 500, backgroundColor: '#00000077', width: '100%', height: '100%',
                }}
            >

                {
                    this.state.phase === 1 ?
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header" style={{ borderRight: '4px solid green', borderBottom: 'none' }}>
                                    <h5 className="modal-title" id="exampleModalLabel" style={{ fontSize: '0.85rem', width: '100%', textAlign: 'right' }}>ورود یا ثبت نام در تبرک مارکت</h5>
                                </div>
                                <div className="modal-body">
                                    <h5 className="modal-title" id="exampleModalLabel" style={{ fontSize: '0.75rem', width: '100%', textAlign: 'center', paddingBottom: '10px' }}>لطفا شماره همراه خود را وارد نمائید</h5>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="09*********"
                                            style={{ width: '80%', margin: '0 auto', borderRadius: '30px', textAlign: 'center' }}
                                            onChange={(e) => this.setState({ mobileNumber: e.target.value })} minLength={11} maxLength={11} />
                                    </div>
                                </div>
                                <div className="modal-footer" style={{ border: 'none' }}>
                                    <button type="button" className="btn btn-success"
                                        style={{ borderRadius: '30px', margin: '0 auto', fontSize: '0.8rem', padding: '10px 70px' }}
                                        onClick={() => {
                                            this.setState({ phase: 2 });

                                            this.triggerMyTimer();


                                        }}
                                    >ورود به تبرک مارکت</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header" style={{ borderRight: '4px solid green', borderBottom: 'none' }}>
                                    <h5 className="modal-title" id="exampleModalLabel" style={{ fontSize: '0.85rem', width: '100%', textAlign: 'right' }}>کد تایید </h5>
                                </div>
                                <div className="modal-body">
                                    <h5 className="modal-title" id="exampleModalLabel" style={{ fontSize: '0.75rem', width: '100%', textAlign: 'center', paddingBottom: '10px' }}>لطفا کد پیامک شده را وارد نمائید</h5>
                                    <h4 className="modal-title" id="exampleModalLabel" style={{
                                        fontSize: '0.85rem', width: 'fit-content',
                                        textAlign: 'center', padding: '10px 40px', margin: '0 auto',
                                    }}>{this.state.mobileNumber}</h4>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <input type="text" class="form-control"
                                        autoFocus={true}
                                        style={{
                                            width: '40px',
                                            // margin: '0 auto',
                                            marginRight: '2%',
                                            padding: 0,
                                            fontSize: '1.8rem',
                                            textAlign: 'center',
                                            fontWeight: 'bolder',
                                            borderBottom: '2px solid green',
                                            backgroundColor: '#ecffeb'
                                        }} maxLength={1} minLength={1}
                                        onChange={(e) => {
                                            this.setState({ SMSnum1: e.target.value });
                                            this.secondTextInput.focus();
                                        }} />
                                    <input type="text" class="form-control"
                                        ref={(input) => { this.secondTextInput = input; }}
                                        style={{
                                            width: '40px',
                                            // margin: '0 auto',
                                            marginRight: '2%',
                                            padding: 0,
                                            fontSize: '1.8rem',
                                            textAlign: 'center',
                                            fontWeight: 'bolder',
                                            borderBottom: '2px solid green',
                                            backgroundColor: '#ecffeb'
                                        }} maxLength={1} minLength={1}
                                        onChange={(e) => {
                                            this.setState({ SMSnum2: e.target.value });
                                            this.thirdTextInput.focus();
                                        }} />
                                    <input type="text" class="form-control"
                                        ref={(input) => { this.thirdTextInput = input; }}
                                        style={{
                                            width: '40px',
                                            // margin: '0 auto',
                                            marginRight: '2%',
                                            padding: 0,
                                            fontSize: '1.8rem',
                                            textAlign: 'center',
                                            fontWeight: 'bolder',
                                            borderBottom: '2px solid green',
                                            backgroundColor: '#ecffeb'
                                        }} maxLength={1} minLength={1}
                                        onChange={(e) => {
                                            this.setState({ SMSnum3: e.target.value });
                                            this.fourthTextInput.focus();
                                        }} />
                                    <input type="text" class="form-control"
                                        ref={(input) => { this.fourthTextInput = input; }}
                                        style={{
                                            width: '40px',
                                            // margin: '0 auto',
                                            padding: 0,
                                            fontSize: '1.8rem',
                                            textAlign: 'center',
                                            fontWeight: 'bolder',
                                            borderBottom: '2px solid green',
                                            backgroundColor: '#ecffeb'
                                        }} maxLength={1} minLength={1}
                                        onChange={(e) => this.setState({ SMSnum4: e.target.value })} />
                                </div>
                                <h5 style={{ textAlign: 'center', paddingTop: '20px' }}>
                                    {
                                        this.setState.SMSresendBtnShow ?
                                            <span onClick={() => {
                                                this.setState({ SMSresendBtnShow: false });
                                                this.triggerMyTimer();

                                            }}>ارسال مجدد کد پیامکی</span>
                                            :
                                            `${this.state.timerMinute} : ${this.state.timerSecond}`
                                    }
                                </h5>

                                <div className="modal-footer" style={{ border: 'none', padding: 0 }}>
                                    <button type="button" className="btn btn-success"
                                        style={{ borderRadius: '30px', margin: '0 auto', fontSize: '0.8rem', padding: '10px 70px', marginTop: '30px' }}
                                        onClick={ () => {
                                            debugger
                                            var temp = (parseInt(this.state.SMSnum1) * 10) + parseInt(this.state.SMSnum2) ;
                                            temp = temp * 10 + parseInt(this.state.SMSnum3);
                                            temp = temp * 10 + parseInt(this.state.SMSnum4);
                                            // alert(temp)

                                            if(parseInt(this.state.randomInt) === temp) {
                                                this.props.close();
                                            } else {
                                                alert('اشتباه وارد کردید')
                                            }
                                        }}
                                        >ورود به تبرک مارکت
                                        
                                    </button>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        width: '100%',
                                        textAlign: 'center',
                                        marginTop: '30px',
                                        backgroundColor: '#dcf7dc',
                                        marginBottom: 0,
                                        padding: '5px',
                                        cursor: 'pointer'
                                    }}
                                        onClick={() => this.setState({ phase: 1 })}
                                    >
                                        آیا میخواهید شماره همراه خود را تغییر دهید؟
                                    </div>


                                </div>
                            </div>
                        </div>
                }

            </div>
        );
    }
}

export default MobileConfirmModal;