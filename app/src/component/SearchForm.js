// Tim kiem co : theo loai phong + theo khu vuc + theo gia + theo Khu vuc lan can + theo csvc

// csvc: dieu hoa + nong lanh + ban cong + dien nuoc

// sort view + sort time + sort gia

import './SearchForm.css'

const Search = ()=>{
    return (
        <>
        <div className="container-search-form">
            <div className="row-search-form">
                <div>Chọn khu vuc/ khu vuc lan can</div>
                {/* La input  */}

                {/* La dropdown */}
                <div>Chon loai phong</div>

                <div>Chon khoang gia</div>

                <div>Chon khoang dien tich</div>

                <div>Co so vat chat</div>

                {/* dung bootstrap dropdown */}
            </div>

            <div>Sologan: Kham pha danh muc</div>
            <div className="filter-row-search-form">

            </div>
        </div>
        </>
    )
}

export default Search