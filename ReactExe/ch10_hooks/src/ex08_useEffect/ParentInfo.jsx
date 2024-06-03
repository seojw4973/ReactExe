import { useState } from "react";
import Info from './info';

const ParentInfo = () => {
    const [visible, setVisibel] = useState(false);

    return (
        <div>
            <button onClick={() =>{
                setVisibel(!visible)
            }}>
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr/>
            {visible && <Info/>}
        </div>
    )
}

export default ParentInfo;