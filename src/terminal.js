import React, {useState} from "react";
import ReactDOM from "react";
import "/css/index.css";

alert("Loading");

function terminal(){
    const [hasRightPass, setHasRightPass] = useState(false);

    return(
        <div>
            this is working!
        </div>
    );
}

const root = document.getElementById("root");
ReactDOM.render(<terminal />, root);
/*
import Ract, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function element(){

const [valVar, valUpdateMethod] = useState(initVal);

return(
<div>
//html content needed here
</div>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<element />, rootElement);
 */