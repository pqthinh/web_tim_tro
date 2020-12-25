import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './SearchForm.css'

const Search = ()=>{

    const [place, setPlace] = useState("")

    return (
        <div className="container">
        <div className="form-search">
            <div class="r-left">
                <div class="right">
                    <div class="box-search">
                        <button class="nut"><i class="fas fa-search"></i></button>
                        <input type="text" value={place}  onChange={(data)=> setPlace(data.target.value)} placeholder="Tìm theo khu vực, tên trường học,..." />
                        <Link to={{
                            pathname: "/search",
                            place: place
                            }} >
                            <button type="button" class="btntim">Tìm kiếm</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="r-right">
                <p>
                    Tìm kiếm phòng theo địa điểm, giá, cơ sở vật chất
                </p>
                <Link to="search">
                    <button type="button" class="btnreview" > Tìm kiếm nâng cao</button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Search

