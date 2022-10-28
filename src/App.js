import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import CardList from './components/CardList';
import React from 'react';


function App() {
  const [PemainArr, setPemainArr] = React.useState([
    {
      nama: "Messi",
      Club: "PSG",
      urlFoto: "https://akcdn.detik.net.id/community/media/visual/2022/10/26/lionel-messi_169.jpeg?w=700&q=90",
      description: "Pemain sepak bola profesional asal Argentina"
    },
    {
      nama: "Ronaldo",
      Club: "Manchester United",
      urlFoto: "https://akcdn.detik.net.id/visual/2022/05/08/brighton-vs-manchester-united_169.jpeg?w=650",
      description: "Pemain sepak bola profesional asal Portugal"
    },
    {
      nama: "Neymar",
      Club: "PSG",
      urlFoto: "https://cdn0-production-images-kly.akamaized.net/fTIc-lnNqx-zQp8Zl6gvbSl85B0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4025681/original/098001600_1652851425-000_329Q34Q.jpg",
      description: "Pemain sepak bola profesional Brasil"
    },
    {
      nama: "Harry Maguire",
      Club: "Manchester United",
      urlFoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcv6pNpN3EwWo4yrI3Lz3QSxUdklH6pz32mA&usqp=CAU",
      description: "Pemain sepak bola berkewarganegaraan Inggris"
    },
  ]);

  const [Pemain, setPemain] = React.useState({ nama: "" });



  let { nama } = Pemain;

  const PemainHandler = (data) => {
    setPemainArr(PemainerArr => [...PemainArr, data]);

  }

  const submitHandler2 = (event) => {
    console.info(`Pemain Array Size : ${PemainArr.length}`);
    for (let a of PemainArr) {
      console.info(`Pemain : ${a.nama}`);
      console.info(`Club : ${a.Club}`);
      console.info(`Url : ${a.urlFoto}`)
      console.info(`Key : ${a.key}`)
    }

  }



  return (
    <div className="App">
      <h2>Kelompok 06</h2>
      <h3>Data Pemain Sepak Bola Dunia</h3>
      <Form onPraktikanHandler={PemainHandler} />
      <button className="console" onClick={submitHandler2}>Check Console</button>
    <div className="media-scroller">
    {
      PemainArr.map(
        (data, index) => {
          return(
            
            <CardList
            key = {index}
            keyIndex = {index}
            nama = {data.nama}
            Club = {data.Club}
            urlFoto = {data.urlFoto}
            description = {data.description}
            />
            
          )
        }
      )
    }
    </div>
    
      
    </div>
  );
}

export default App;
