import React from 'react'
import { Link } from 'react-router-dom'

const DashboardAction = props => {
    return (
        <div className="dash-buttons">
            <Link to="/edit-profile" className="btn btn-light">
                ແກ້ໄຂຂໍ້ມູນຂອງໂປຣໄຟລ໌
            </Link>
            <Link to="/add-experience" className="btn btn-light">
                ເພີ່ມຂໍ້ມູນປະສົບການ
            </Link>
            <Link to="/add-education" className="btn btn-light">
                ເພີ່ມຂໍ້ມູນການສຶກສາ
            </Link>
        </div>
    )
}


export default DashboardAction
