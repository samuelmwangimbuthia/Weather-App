import {toggle} from './toggleHandler'
const sayMyName = (value)=>{
    const statement = `Hello ${value}`;
    console.log(statement);
}

toggle();
sayMyName('Samuel');