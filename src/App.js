import React from 'react';
import Table from './Table';
import './style.css';

export default function App() {
  let list = [
    { id: 1, name: 'shankar', age: 26, place: 'piler' },
    { id: 2, name: 'ravi', age: 27, place: 'bangalore' },
    { id: 3, name: 'chytanya', age: 30, place: 'channai' },
  ];
  // console.log(Object.keys(list[1]));
  // console.log(Object.values(list).map(a=>{
  //   {
  //    console.log( Object.values(a).map(b=>console.log(b)))
  //   }
  // }))
  let collName = ['id', 'Name', 'Age', 'Place'];
  return (
    <div>
      <Table list={list} collName={collName} />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
