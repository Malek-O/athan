import React from 'react'
import { AppContext } from './AppProvider';
import { useFetch } from './useFetch'
import Clock from './Clock'



function Awqat() {
    const { select } = React.useContext(AppContext)


    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? '' : ''; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }


    const { loading, products } = useFetch(`https://api.aladhan.com/v1/timingsByCity?city=${select.urlCity ? select.urlCity : "Jeddah"}&country=SA` || 'https://api.aladhan.com/v1/timingsByCity?city=Jeddah&country=SA');

    // console.log(products)

    return (
        <section className='container'>
            <Clock />
            {loading ? <h1>Loading... </h1> : <>
                <div className="parent">
                    <div className="div1">{products.data.timings.Fajr} AM</div>
                    <div className="div2">فجر</div>
                </div>
                <div className="parent">
                    <div className="div1">{products.data.timings.Dhuhr} PM</div>
                    <div className="div2">ظهر</div>
                </div>
                <div className="parent">
                    <div className="div1">{tConvert(products.data.timings.Asr)} PM</div>
                    <div className="div2">عصر</div>
                </div>
                <div className="parent">
                    <div className="div1">{tConvert(products.data.timings.Maghrib)} PM</div>
                    <div className="div2">مغرب</div>
                </div>
                <div className="parent">
                    <div className="div1">{tConvert(products.data.timings.Isha)} PM</div>
                    <div className="div2">عشاء</div>
                </div>
            </>}


        </section>
    )
}

export default Awqat