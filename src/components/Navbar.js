import React from 'react'
import Logo from '../imgs/logo.png'
import { AppContext } from './AppProvider';

function Navbar() {

    const { setSelect, select } = React.useContext(AppContext)

    const handleSelcet = (e) => {

        if (e.target.value === 'جدة') {
            setSelect({
                city: e.target.value,
                urlCity: 'Jeddah'
            })
        } else if (e.target.value === 'مكة') {
            setSelect({
                city: e.target.value,
                urlCity: 'Makkah'
            })
        } else if (e.target.value === 'الرياض') {
            setSelect({
                city: e.target.value,
                urlCity: 'Ar Riyāḑ'
            })
        } else if (e.target.value === 'الشرقية') {
            setSelect({
                city: e.target.value,
                urlCity: 'Ash Sharqīyah'
            })
        }
    }

    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
                <h2>أذان</h2>
            </div>
            <aside className="options">
                <select value={select.city} onChange={handleSelcet}>
                    <option >جدة</option>
                    <option >مكة</option>
                    <option >الرياض</option>
                    <option >الشرقية</option>
                </select>
            </aside>
        </nav>
    )
}

export default Navbar