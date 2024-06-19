// MyComponent.js
import React from 'react';
import  createReactClass  from 'create-react-class';
// Mixin.js
const MyMixin = {
    componentDidMount() {
        console.log('Component did mount');
    },
    logMessage(message) {
        return message;
    }
};


const MyComponent = createReactClass({
    mixins: [MyMixin],
    render : function(){
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
})

export default MyComponent;
