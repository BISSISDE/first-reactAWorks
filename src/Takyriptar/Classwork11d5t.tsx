import { useState } from "react";

export default function TaggleText() {
    const [show , setShow] = useState(false)
    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                {show ? "Jasyru":'Show more'}
            </button>
            {show && <p>Jasyrldy</p> || <p>Kosymsha akparat</p>}
        </div>
    )
}
