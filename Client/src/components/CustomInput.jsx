import React, {Component} from 'react';
import '../static/css/FormSection.css';

const StyleComponent = ({isActive, name}) => {
    if (isActive) {
        return(
            <style type="text/css">
                .label[for={name}]::after {'{'}
                    transform: translateX(0%);
                {'}'}
                .span[name={name}] {'{'}
                    transform: translateY(-120%);
                    font-size: 16px;
                    color: #2D9CDB;
                {'}'}
            </style>
        )
    }
    return(
        <style></style>
    );
}



class CustomInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        }
        this.valueChange = this.valueChange.bind(this)
    }
    componentWillMount(){
        if (this.props.defaultValue !== undefined){
            this.setState({isActive: true})
        }
    }
    
    
    valueChange (e, onChange) {
        onChange(e.target.value)
        if (e.target.value !== ""){
            this.setState({isActive: true})
        } else {
            this.setState({isActive: false})
        }
    }
    render(){
        const { input: { onChange } } = this.props
        return(
            <section className='form-section'>
                <StyleComponent  isActive={this.state.isActive} name={this.props.name}/>
                <input type={this.props.type} name={this.props.name} className="input" defaultValue={this.props.defaultValue} onChange={(e) => this.valueChange(e, onChange)}/>
                <label htmlFor={this.props.name} className="label"><span className="span" name={this.props.name}>{this.props.text}</span></label>
            </section>
        )
    }
}

export default CustomInput;