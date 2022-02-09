import  React from 'react'
import styled from 'styled-components'

type MyProps ={
    text: string,
    backgroundColor?: string
}

let backgroundColor = 'green'


export default class Badge extends React.Component<MyProps>{
    
    state = {
       statusText: this.props.text,
       backgroundColor: ''
    }

    componentDidMount(){
        if(this.props.text){
            switch(this.props.text.toLowerCase()){
                case "active":
                    this.setState({backgroundColor : 'rgba(93, 248, 136, 1)' })
                    break;
                case "block":
                    this.setState({  backgroundColor : 'red' })
                    break;
                case "successful":
                    this.setState({backgroundColor : 'rgba(93, 248, 136, 1)' })
                    break;
                case "cancelled":
                    this.setState({  backgroundColor : 'red' })
                    break;
                case "pending":
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                case "processing":
                    this.setState({ backgroundColor : "rgba(1, 0, 102, 1)" })
                    break;
                case "decline":
                    this.setState({backgroundColor: 'red'})
                    break;
                case "completed":
                    this.setState({backgroundColor : 'rgba(93, 248, 136, 1)' })
                    break;
                case "failed":
                    this.setState({backgroundColor : 'red' })
                    break;
                case "in progress":
                    this.setState({ backgroundColor : "rgba(1, 0, 102, 1)" })
                    break;
                    
            }
            console.log('This is the props', this.props.text)
            console.log('This is the props', this.props.backgroundColor, 'This is the state',  this.state.backgroundColor)
        }
    }

    componentDidUpdate(prevProps:any) {
        if(prevProps.text !== this.props.text){
        console.log("CHIP STATUS HAS CHANGED")
        this.onChangeBackgroundColor()
        
        }
        
            }
        
        
            onChangeBackgroundColor = () => {
        
                    switch(this.props.text.toLowerCase()){
                        case "active":
                            this.setState({backgroundColor : 'green' })
                            break;
                        case "block":
                            this.setState({  backgroundColor : 'red' })
                            break;
                        case "successful":
                            this.setState({backgroundColor : 'rgba(93, 248, 136, 1)',text:"successful"  })
                            break;
                        case "cancelled":
                            this.setState({  backgroundColor : 'red',text:"cancelled" })
                            break;
                        case "pending":
                            this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                            break;
                        case "processing":
                            this.setState({ backgroundColor : "rgba(1, 0, 102, 1)", text:"processing" })
                            break;
                        case "decline":
                            this.setState({backgroundColor: 'red'})
                            break;
                        case "completed":
                            this.setState({backgroundColor : 'rgba(93, 248, 136, 1)' })
                            break;
                        case "failed":
                            this.setState({backgroundColor : 'red' })
                            break;
                        case "in progress":
                            this.setState({ backgroundColor : "rgba(1, 0, 102, 1)" })
                            break;
                        case "false":
                            this.setState({ text : "Active" })
                            this.setState({ backgroundColor : "rgba(93, 248, 136, 1)" })
                            break;
                        case "true":
                            this.setState({ text : "Inactive" })
                            this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                            break;
                            default:
                                this.setState({ backgroundColor : "rgba(1, 0, 102, 1)" });
                                break
                            
                    }
                
            }

    render(){
        return(
            <div>
                <BadgeCard className="" style={{ backgroundColor: `${this.state.backgroundColor}` }}>
                    <p className="chips-text">{this.props.text}</p>
                </BadgeCard>
            </div>
        )
    }
}



const BadgeCard = styled.div `
    box-sizing: border-box;
    color: white;
    width: 111px;
    height: 30px;
    border-radius: 215px;
    margin: 0px;
    padding: 0px;
`