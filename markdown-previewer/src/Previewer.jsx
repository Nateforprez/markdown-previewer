import './Previewer.css'; 
import React from 'react'; 
import { marked } from 'https://cdnjs.cloudflare.com/ajax/libs/marked/16.3.0/lib/marked.esm.js'; 


class Previewer extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            previewerContainerMaximize: false, 
            visible: false, 
            text: '' 
        }


        this.handleMaxClick = this.handleMaxClick.bind(this); 
        this.convertMarkdown = this.convertMarkdown.bind(this); 
    }
    handleMaxClick() {
        this.setState(state => ({previewerContainerMaximize: !state.previewerContainerMaximize})); 
        this.props.parentVis(); 
    }
    convertMarkdown() {
        const html = marked.parse(this.props.previewText); 
        this.setState(({text: html})); 
    }
    componentDidUpdate(prevProp) {
        if (prevProp.previewText != this.props.previewText) {
            this.convertMarkdown(); 
        }
    }
    render() {
        return (
            <>
                <div id="previewer-container" className={this.state.previewerContainerMaximize ? "previewer-container-max" : "previewer-container-min"} style={{display: this.props.visibility ? 'block' : 'none'}}>
                    <div id="container-heading" style={{backgroundColor: 'white'}}>
                        <i class="fa-brands fa-free-code-camp"></i>
                        <h2 style={{color: "black", margin: 0}}>Previewer</h2>
                        <span onClick={this.handleMaxClick} style={{marginLeft: "auto", paddingRight: 10}}>
                            <i id="maximize-icon" class={this.state.previewerContainerMaximize ? "fa-solid fa-up-right-and-down-left-from-center" : "fa-solid fa-maximize"} style={{fontSize: 17}}></i>
                        </span> 
                    </div>
                    {/* <textarea id="previewer" value={this.props.previewText} disabled='disabled'/> */} 
                    <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.text}}/>
                </div>
            </>
        ); 
    }
}

export default Previewer; 