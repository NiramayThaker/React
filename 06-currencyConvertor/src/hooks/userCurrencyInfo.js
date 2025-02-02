import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_kUqdPiGnZ5LORUZaZS6w8uuCBfgpkpZlCaWYe6hi&currencies=EUR%2CUSD%2CCAD&base_currency=${currency}`
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res['data']['USD']['value']))
        console.log(data)
    }, [currency])

    return data
}


export default useCurrencyInfo;
