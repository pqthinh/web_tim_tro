// Tim kiem co : theo loai phong + theo khu vuc + theo gia + theo Khu vuc lan can + theo csvc

// csvc: dieu hoa + nong lanh + ban cong + dien nuoc

// sort view + sort time + sort gia

import '../SearchForm.css'

const SearchAdvance = ()=>{
    return (
    <div className="container">
        <div className="form-search" style={{width: '100%'}}>
            <div class="r-left">
                    <div class="box-search" style={{width: '100%'}}>
                        <button class="nut"><i class="fas fa-search"></i></button>
                        <input type="text" placeholder="Tìm theo khu vực, tên trường học,..." />
                        <button type="button" class="btntim">Tìm kiếm</button>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default SearchAdvance

