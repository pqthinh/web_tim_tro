// Tim kiem co : theo loai phong + theo khu vuc + theo gia + theo Khu vuc lan can + theo csvc

// csvc: dieu hoa + nong lanh + ban cong + dien nuoc

// sort view + sort time + sort gia

import '../SearchForm.css'

const Search = ()=>{
    return (
        <div className="container">
        <div className="form-search">
            <div class="r-left">
                <div class="right">
                    <div class="box-search">
                        <button class="nut"><i class="fas fa-search"></i></button>
                        <input type="text" placeholder="Tìm theo khu vực, tên trường học,..." />
                        <button type="button" class="btntim">Tìm kiếm</button>
                    </div>
                </div>
            </div>
            <div class="r-right">
                <p>
                    Tìm kiếm phòng theo địa điểm, giá, cơ sở vật chất
                </p>
                <button type="button" class="btnreview">Tìm kiếm nâng cao</button>
            </div>
        </div>
        </div>
    )
}

export default Search

