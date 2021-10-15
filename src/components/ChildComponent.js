const ChildComponent = ({ arrayData }) => {
    return(
        <ul>
            { arrayData.map(obj => <li key={obj.number}>{obj.number}</li>) }
        </ul>
    )
}

export default ChildComponent