import { useEffect } from "react";


const Social = () => {
    useEffect(()=>{
        window.location.href = "https://github.com/real-tea"
    },[]);

    return (
        <div>
            <h2>Github</h2>
        </div>
    )
}

export default Social;