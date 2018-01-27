class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title ={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll(){
        alert("some message");
    }
    render() {
        return (
        <div>
           {
               this.props.options.map((option) => <Option key={option} optionText={option}/>)
           }
             <button onClick={this.handleRemoveAll}>Remove All</button>
        </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}
class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        const option =e.target.elements.option.value.trim();
        if (option){
            alert(option);
        }
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
        );
    }
}
//we extend the Header class by React.Component class and get access
//to its all features
//React components require a special method to be defined which is render


ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));
//we call React components using their names in html tags and they are reusable 
//we can use them several times 