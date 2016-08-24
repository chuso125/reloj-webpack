// for (var i = 0; i < 100; i++) {
// 	var x = 100;
// };
// //funcion inline
// let a = x => x*x;
// console.log(a(9));
// var pares = [2,4,6];
// let impares = pares.map(v=>v+1);
// console.log(impares);

// const sq = (x) => {
// 	return x*x;
// };
// console.log(sq(2));
// let params = [1,2,3];
// let b = [4,5, ...params];
// console.log(b);
// const x = (a,b,c) => a + b + c;
// console.log(x(...params));
// let a = 5;
// let b = 6; 
// let c = 8;
// let o = {a,b,c};
// console.log(o);
// let nombre = "sergio";
// let momento = "manana";
// let saludo = `hola ${nombre}, que pase feliz ${momento}`;
// console.log(saludo);
// var objeto = {
// 	nombre: "sergio",
// 	saludar(){
// // 		console.log("hola");
// // 	}
// // };
// // objeto.saludar();
// let nombreLargo = {
// 	x: 0,
// 	y: 0
// }
// let {y} = nombreLargo
// function* miGenerador(){
// 	yield 5;
// 	yield 3;
// 	yield 4;
// }
// let resultado =

/*
State: int representing actual value 

Actions:
{
	type: 'INCREMENT'
}

{
	type: 'DECREMENT'
}

Reducer
counter(state_1, action) --> state_2
Test:

counter(0,{type:'INCREMENT'}) -->1
counter(1,{type:'INCREMENT'}) -->0

*/

// expect(
// 	counter(undefined,{})
// ).toEqual(0);

// expect(
// 	counter(0,{type: 'INCREMENT'})
// ).toEqual(1);

// expect(
// 	counter(1,{type: 'DECREMENT'})
// ).toEqual(0);

// console.log("All tests passed!");




// import expect from "expect";
// import { createStore } from "redux"

// //Reducer
// const counter = (state=0,action)=>{
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1;
// 		case 'DECREMENT':
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// 	return state;
// }

// createStore: reducer --> store
// const store = createStore(counter);

// console.log(store.getState());

// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());

// //aux var
// let viewport = document.getElementById("app");
// let html = document.getElementsByTagName("html")[0]

// const render = (state) => {
// 	return `${state}`;
// }

// const stateChanged = () => {
// 	viewport.innerHTML = render(store.getState());
// }

// //what should happen when state changes?
// store.subscribe(stateChanged);

// const stateChangeHappened = () => {
// 	viewport.innerHTML = render(store.getState());
// }

// //html event listener
// html.addEventListener('click', ()=>{
// 	store.dispatch({type: 'INCREMENT'});
// });

// statechanged();


// estado = []
// acciones:
// 		incrementar
//		decrementar 
// 		eliminar
// 		crear 
// So = []







//import Inmutable from 'inmutable';

// const CounterList = ({ list }) => (
// 	<div>
// 		{
// 			list.map(
// 				(value, i) => (
// 					<Counter
// 						key={i}
// 						value={ value}
// 						index={ i }
// 						incrementAction={
// 							() => store.dispatch({
// 								type: 'INCREMENT',
// 								payload: { index: i}
// 							})
// 						}
// 						incrementAction={
// 							() => store.dispatch({
// 								type: 'DECREMENT',
// 								payload: { index: i}
// 							})
// 						}
// 					)
// 				)
// 		}
// 	)

// const validateIndex = (index, list) => { return (index > 0) && (index < list.size); }



// const store = createStore(counterList);

// let viewport = document.getElementById("app");
// let html = document.getElementsByTagName("html")[0]




// import Immutable from 'immutable';
// import expect from "expect";
// import { createStore } from "redux"
// import React from 'react';
// import ReactDOM from 'react-dom';

// const Counter = ({ value, incrementAction, decrementAction, removeAction}) => (
// 	<div>
// 		<h1>{ value }</h1>
// 		<button onClick={ incrementAction }>+</button>
// 		<button onClick={ decrementAction }>-</button>
// 		<button onClick={ removeAction }>X</button>
// 	</div>
// );

// const CounterList = ({list})=>(
// 	<div>
// 		{
// 			list.map(
// 				(value, i) => (
// 					<Counter
// 						key={i}
// 						value={ value}
// 						incrementAction={
// 							() => store.dispatch({
// 								type: 'INCREMENT',
// 								payload: { index: i}
// 							})
// 						}
// 						decrementAction={
// 							() => store.dispatch({
// 								type: 'DECREMENT',
// 								payload: { index: i}
// 							})
// 						}
// 						removeAction={
// 							() => store.dispatch({
// 								type: 'REMOVE_COUNTER',
// 								payload: { index: i}
// 							})
// 						}/>
// 					)
// 				)
// 		}
// 		<button onClick={ () => store.dispatch({ type:'ADD_COUNTER'})}>ADD COUNTER</button>
// 	</div>
// );

// const validateIndex = (index, list) => { return (index > 0) && (index < list.size); };

// const counterList = (state = Immutable.List.of(), action) => { 
// 	if(typeof action.payload !== 'undefined'){
// 		var { index } = action.payload;
// 	}
// 	switch (action.type) {
// 		case 'ADD_COUNTER':
// 			return state.push(0);
// 		case 'REMOVE_COUNTER':
// 			if(validateIndex(index, state)){
// 				return state.delete(index);
// 			}
// 			return state
// 		case 'INCREMENT':
// 			if(validateIndex(index, state)){
// 				return state.update(index, (v) => v + 1);
// 			}
// 			return state;
// 		case 'DECREMENT':
// 			if(validateIndex(index, state)){
// 				return state.update(index, (v) => v - 1);
// 			}
// 			return state;
// 		default:
// 			return state;
// 	}
// }

// const store = createStore(counterList);

// const render = () => {
// 	ReactDOM.render(
// 		<CounterList list={ store.getState() }/>,
// 		document.getElementById("root")
// 	);
// 	// ReactDOM.render(
// 	// 	<Counter
// 	// 	value={999}
// 	// 	incrementAction={()=>{alert("hola incremento")}}
// 	// 	decrementAction={()=>{alert("hola decremento")}}
// 	// 	removeAction={()=>{alert("hola borrar")}}/>,
// 	// 	document.getElementById("root")
// 	// 	);
// }
// store.subscribe(render);
// render();


import Immutable from 'immutable';
import expect from "expect";
import { createStore } from "redux"
import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/styles.scss';

const Semaforo = ({state}) =>(
	<div>
		<div class="traffic-light">
			<div class={(state === 2 ? "green light": "green light off")}></div>
			<div class={(state === 1 ? "yellow light": "yellow light off")}></div>
			<div class={(state === 0 ? "red light": "red light off")}></div>
		</div>
		<button onClick={ () => store.dispatch({ type:'CHANGE_COLOR'})}>change</button>
	</div>
);

// //Reducer
const color = (state = 0,action)=>{
	if(action.type === 'CHANGE_COLOR') {
		switch (state) {
			case 0:
				return 2;
			case 1:
				return 0;
			case 2:
				return 1;
			default:
				return state;
		}
	}
	return state;
}

const store = createStore(color);

const render = () => {
	ReactDOM.render(
		<Semaforo state={ store.getState() }/>,
		document.getElementById("root")
	);
}

store.subscribe(render);
render();