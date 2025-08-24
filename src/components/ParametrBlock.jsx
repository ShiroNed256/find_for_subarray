const ParametrBlock = (props) => {
    return (
        <div>
          {props.parametrName}: 
          <input 
            className="parametrInput"
            type="number" 
            min="1" 
            max="10"
            onChange={(e) => props.parametrChange(Number(e.target.value))              
            }
          />
        </div>        
    )
}

export default ParametrBlock