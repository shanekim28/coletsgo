import { useEffect, useState } from 'react';

function FetchApi() {
    function loadActivity() {
        fetch("https://0cbc7cb3-8ad3-485c-abe9-72b5beec1acb.mock.pstmn.io/api/list")
            .then((response) => response.json())
            .then((data) => setList(data));
    }

    const [list, setList] = useState([]);
    useEffect(() => {loadActivity()}, []);
    
}

export default FetchApi