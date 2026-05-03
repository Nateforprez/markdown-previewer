import React from 'react'; 
import './Editor.css'; 

const markup = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff: 


Heres some code, \`<div></div>\`, between 2 backticks. this is so cool dont you agree with me? 

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:  \`testing testing\`

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;  

class Editor extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            editorContainerMaximize: false, 
            visible: false, 
            input: markup
        }
        this.handleMaxClick = this.handleMaxClick.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
    }
    handleMaxClick() {
        this.setState(state => ({editorContainerMaximize: !state.editorContainerMaximize})); 
        this.props.parentVis(); 
    }
    handleChange(event) {
        this.setState(
            state => ({input: event.target.value}), 
            () => {
                this.props.update(this.state.input); 
            }
        ); 
    }
    componentDidMount() {
        this.props.update(this.state.input); 
    }
    render() {
        return (
            <>
                <div id="editor-container" className={this.state.editorContainerMaximize ? "editor-container-max" : "editor-container-min"} style={{display: this.props.visibility ? 'block' : 'none'}}>
                    <div id="container-heading" style={{backgroundColor: 'white'}}>
                        <i class="fa-brands fa-free-code-camp"></i>
                        <h2 style={{color: "black", margin: 0}}>Editor</h2>
                        <span onClick={this.handleMaxClick} style={{marginLeft: "auto", paddingRight: 10}}>
                            <i id="maximize-icon" class={this.state.editorContainerMaximize ? "fa-solid fa-up-right-and-down-left-from-center" : "fa-solid fa-maximize"} style={{fontSize: 17}}></i>
                        </span> 
                    </div>
                    <textarea id="editor" onChange={this.handleChange} value={this.state.input}/> 
                </div>
            </>
        ); 
    }
}

export default Editor; 