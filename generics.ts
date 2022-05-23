/**
* S => state
T => type
K => kyes
v => value
E => element 
 */

// vou definir como padrao string caso nao seja definido o type
function useStatePadrao<T extends string | number = string>(){
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

let statePadrao = useStatePadrao<number>();

statePadrao.get();
statePadrao.set(1213);
// statePadrao.set(`23232`);


function useState<T>(){
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}


let newState = useState<string>();
newState.get();
// newState.set(123);
newState.set(`123`);

