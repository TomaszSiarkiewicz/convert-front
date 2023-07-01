import {NewDevice} from "./components/NewDevice";
import {ListContainer} from "./components/ListContainer";

function App() {
    return (
        <div className="App">
            <div className="main-container">
                <div className="newDevices-container">
                    <NewDevice/>
                </div>
                <div className="search-container">
                    <ListContainer/>
                </div>
            </div>
        </div>
    );
}

export default App;
