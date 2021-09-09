import { useState } from 'react';
import './App.css';
import DisplayArea from './components/DisplayArea';
import WriteArea from './components/WriteArea';

function App() {
  const [text, setText] = useState("");
  const [elements, setElements] = useState({
      input: {
        type:"number",
        placeholder: "boo",
        style: {
            border: "1px solid green"
        }
      },
      p: {
        text: 'lorem',
        style: {
          fontStyle: 'italic',
          fontSize: '20px',
          color: 'black'
        }
      },
      ul: {
        style: {
          listStyle: "georgian",
        },
        li: 'liasd',
      }
  });

  const a = elements;
  console.log(a.input)
  console.log(a.p, typeof a, typeof a.ul)

  const add = (event) => {
    if (event.key === "Enter") {
      if (!text) { return; }
      if (text) {
        let a = JSON.parse(text);
        let final = {...{elements}, a};
        setElements(final)
      }
    }
  }

  // const course = {
  //   name: "smth",
  //   categories: {
  //     bio: "123",
  //     it: "4546"
  //   }
  // };

  // const grade = {
  //   score: 10
  // };

  // const final = {elements, course, grade, ...{text:text}};
  // const copy = Object.assign({}, final)
  // console.log(copy)


  // const str = `{"input" : {"type":"number", "border":"1px solid orange"}}`;
  // console.log(JSON.parse(str))

  function makeItem() {
    return{
      data: {
        item: '1234',
        name: 'qwerty',
        size: {
          US: '12',
          EU: '42'
        }
      },
      country: {
       1: 'ua',
       2: 'kz', 
      },
      status: 'vibe'
    }
  }

  const res = makeItem();
  const data = res.data;
  const status = res.status;
  const country = res.country;
  console.log({data, status, country})

  return (
    <div className="App">
      <div className="display">
        <WriteArea text={text} setText={setText} elements={elements} add={add} />
        <DisplayArea elements={elements} />
      </div>
    </div>
  );
}

export default App;
