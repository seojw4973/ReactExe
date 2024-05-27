const scaleNames = {
    c: '섭씨',
    f: '화씨'
};

// function TemperatureInput({scale}) 직접 scale를 넣어주거나 props로 받거나
function TemperatureInput(props){

    const {scale, temperature, onTemperatureChange} = props;

    const handleChange = (event) =>{
        onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위 : {scaleNames[scale]})
            </legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;