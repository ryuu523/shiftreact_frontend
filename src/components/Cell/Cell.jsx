import "./Cell.css"

export default function Cell({ num,clickday }) {
    if(typeof num=="number" && num!=0){
        return (
            <td onClick={clickday} className="cell">
                {num}
            </td>
        )
    }
    else if(typeof num=="string"){
        return (
            <th className="cell">
                {num}
            </th>
        )
    }
    else{
        return <td></td>
    }
    
    
}