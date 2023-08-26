import { useEffect, useState } from "react";
import Header from "./companents/header/Header";
import Search from "./companents/search/Search";
import Flags from "./companents/Flags/Flags";
import SelectOpt from "./companents/selectOption/SelectOpt";


function App() {
  const [color, setColor] = useState({ backgroundColor: "white", color: "#2B3945" })
  const [datas, setDatas] = useState([])
  const [value, setValue] = useState("")
  const [filtered, setFiltered] = useState([]);
  const [loader, setLoader] = useState(true)
  const [region, setRegion] = useState('Region')
  const changeOption = (e) => setRegion(e)

  const [count, setCount] = useState(12)


  const addCard = () => {
    setCount(count + 12)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDatas(data)
        setLoader(false)
      })
  }, [])

  useEffect(() => {
    if (region == 'Region') {
      const filteredDataRegion = datas.filter(item2 => item2.name.toLowerCase().startsWith(value.toLocaleLowerCase()))
      setFiltered(filteredDataRegion)
    }
    else {
      const filterDatas = datas.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase()) && item.region == region)
      setFiltered(filterDatas)
    }
  }, [region, datas, value]);


  return (
    <>
      <div className="app" style={color}>
        <Header color={color} setColor={setColor} />
        <Search color={color} value={value} setValue={setValue} />
        <SelectOpt color={color} datas={datas} changeOption={changeOption} filterDatas={filtered} />
        <Flags color={color} count={count} setCount={setCount} addCard={addCard} datas={datas}filterDatas={filtered} loader={loader} />
      </div>
    </>
  );
}

export default App;
