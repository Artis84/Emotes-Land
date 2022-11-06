import { Component } from "react";
import { createRoot } from "react-dom/client";

// function Hour(props) {
// return (
//     ...
// )
class Hour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        console.log("Component Mounted !🤩");
        this.timerID = setInterval(
            () =>
                this.setState({
                    date: new Date(),
                }),
            1000
        );
    }

    componentWillUnmount() {
        console.log("removed !💣");
        clearInterval(this.timerID);
    }

    // tick() {
    //     this.setState({
    //         date: new Date(),
    //     });
    // }
    render() {
        return (
            <div>
                <h1 className="text-blue-600">{this.props.title}</h1>
                {/* <h2 className="text-gray-400">{new Date().toLocaleTimeString()}</h2> */}
                <h2 className="text-gray-400">{this.state.date.toLocaleTimeString("fr-FR")}</h2>
            </div>
        );
    }
}

const root = createRoot(document.getElementById("root"));

// Whitout state property
// function tick() {
// Add a property as an atribute to the component
// const element = <Hour title="Bienvenue" />;
root.render(<Hour title="Bienvenue" />);
// }
console.log("test");

// setInterval(tick, 1000);
