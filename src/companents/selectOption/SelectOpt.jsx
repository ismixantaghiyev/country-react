import "./SelectOpt.css";

function SelectOpt({datas ,changeOption, color}) {

    const arr = ["Region"];
    datas.forEach(item => {
        const same = item.region
        if (!arr.includes(same)) {
            arr.push(same)
        }
    })  
    return (
        <div className='container'>
            <select style={color} onChange={(e) => changeOption(e.target.value)} className='custom-select' name="" id="">
                {arr.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectOpt;

