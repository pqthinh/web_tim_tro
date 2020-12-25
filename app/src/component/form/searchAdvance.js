// Tim kiem co : theo loai phong + theo khu vuc + theo gia + theo Khu vuc lan can + theo csvc

// csvc: dieu hoa + nong lanh + ban cong + dien nuoc

// sort view + sort time + sort gia
import React, { useState } from "react";
import { useFormik } from "formik";
import { FormInput} from'../FormInput'
import { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import '../SearchForm.css'
import { useLocation } from "react-router-dom";

const SearchAdvance = ()=>{
    const {place} = useLocation() || ""
    // console.log(place)
    const [cost, setCost] = useState([500000,100000000])
    const [area, setArea] = useState([0,200])
    const { handleSubmit, handleChange } = useFormik({
        initialValues: {
            place: place,
            typeroom: "",

            price: "",
            with_owner: "",

            // thong tin ve co so vat chat
            bathroom: "",
            heater: "",
            kitchen: "",
            airconditional: "",
            balcony: "",
            electric_water_price: "",
            sort: "",
        },
        onSubmit: (value) => {
            // console.log(value);
            let data = {
                address:  value.address,
                nearby: value.nearby,
                roomType: value.typeroom,
                area: area,
                price: cost,
                shared: value.with_owner,

                // Co so vat chat cua phong
                bathroom: value.bathroom,
                nonglanh: value.heater,
                kitchen: value.kitchen,
                airConditioner: value.airconditional,
                balcony: value.balcony,
                typeCostElectric: value.electric_water_price,
                sort: value.sort
            };
            console.log(data)
            // api search
        },
    });

    return (
    <div className="container">
        <div className="form-search" style={{width: '100%'}}>
            <div class="r-left" style={{width: '100%', height: 'auto'}}>
                <form action="" onSubmit={handleSubmit}>
                    <div class="box-search" style={{width: '100%'}}>
                        <button class="nut"><i class="fas fa-search"></i></button>
                        <input type="text" value={place} placeholder="Tìm theo khu vực, tên trường học,..." />
                        <button type="submit" class="btntim">Tìm kiếm</button>
                    </div>
                    <div>
                        <pre>Khoảng giá từ: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cost[0])} đến {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cost[1])}</pre>
                        <Range step={200000} min= {100000} max= {20000000} onChange={(values)=> setCost(values)}/>
                        
                    </div>
                    <div>
                        <pre>Khoảng diện tích phòng từ: {area[0]}<sup>m2</sup> đến {area[1]}<sup>m2</sup></pre>
                        <Range step={3} min= {10} max= {200} onChange={(values)=> setArea(values)}/>
                        
                    </div>
                    <div>
                        <div className="row" style={{justifyContent: "space-between", marginLeft: 10, marginRight: 10}}>
                            <FormInput
                                name="typeroom"
                                placeholder="Loại phòng"
                                listOption={typeRoomData}
                                onChange={handleChange}
                                typeInput="select"
                            />
                            <FormInput
                                name="with_owner"
                                placeholder="Chung chủ"
                                listOption={option}
                                onChange={handleChange}
                                typeInput="select"
                            />
                            <FormInput
                                name="airconditional"
                                placeholder="Điều hoà"
                                listOption={option}
                                onChange={handleChange}
                                typeInput="select"
                            />
                            <FormInput
                                name="heater"
                                placeholder="Nóng lạnh"
                                listOption={option}
                                onChange={handleChange}
                                typeInput="select"
                            />
                            <FormInput
                                name="kitchen"
                                placeholder="Khu bếp"
                                listOption={option}
                                onChange={handleChange}
                                typeInput="select"
                            />
                            <FormInput
                                name="bathroom"
                                placeholder="Phòng tắm"
                                listOption={option}
                                onChange={handleChange}
                                typeInput="select"
                            />
                            <FormInput
                                name="balcony"
                                placeholder="Ban công"
                                listOption={option}
                                onChange={handleChange}
                                typeInput="select"
                            />
                            <FormInput
                                name="electric_water_price"
                                placeholder="Điện giá dân"
                                listOption={option}
                                onChange={handleChange}
                                typeInput="select"
                            />
                        </div>
                    </div>
                    <div>
                        Sắp xếp tin theo các tiêu chí:
                        <FormInput
                            name="sort"
                            placeholder="Sắp xếp tin"
                            listOption={sort}
                            onChange={handleChange}
                            typeInput="select"
                        />
                    </div>
                </form>
            </div>
        </div>

        <div>
            {/* Show kết quả tìm kiếm ở đây */}
        </div>
    </div>
    )
}

export default SearchAdvance
const sort = [
    {code: 0, name: "Giá thấp trước"},
    {code: 1, name: "Đăng gần đây nhất"},
    {code: 2, name: "View cao nhất"},
]
const typeRoomData = [
    { code: 0, name: "Phòng trọ" },
    { code: 1, name: "Chung cư mini" },
    { code: 2, name: "Nhà nguyên căn" },
    { code: 3, name: "Chung cư" },
];

const option = [
    { code: 1, name: "Có" },
    { code: 0, name: "Không" },
];