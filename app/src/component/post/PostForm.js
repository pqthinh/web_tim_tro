import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiImageInput from 'react-multiple-image-input';
import axios from 'axios'

import {Button} from 'react-bootstrap'
import getData from "../../Utils/DataAddress";
import { FormInput } from "../FormInput";
import Note from "../Note";
import Padding from "../padding";

export const PostForm = () => {
    const province = getData.province();
    const districtValue = getData.district();
    const communeValue = getData.commune();

    const province1 = require('../../Utils/tinh_tp.json')
    const districtValue1 = require('../../Utils/quan_huyen.json')
    const communeValue1 = require('../../Utils/xa_phuong.json')

    const typeRoomData = [
        { code: 0, name: "Phòng trọ" },
        { code: 1, name: "Chung cư mini" },
        { code: 2, name: "Nhà nguyên căn" },
        { code: 3, name: "Chung cư" },
    ];
    const withOwn = [
        { code: 1, name: "Có" },
        { code: 0, name: "Không" },
    ];
    const option = [
        { code: 1, name: "Có" },
        { code: 0, name: "Không" },
    ];

    const message = "Vui lòng nhập trường này!"
    const require_message = "Vui lòng nhập đúng định dạng!"

    // Lấy thông tin xã, huyện từu file json // thêm địa điểm lân cận
    const [district, setDistrict] = useState("");
    const [commune, setCommune] = useState("");
    const [nearby, setNearby] = useState([{ stt: 1, value: "" }]);

    // object images
    const [objImages, setObjImages] = useState({})
    // up luon anh len cung voi tin thi ko can cai nay nua
    // const [linkimg, setLinkimg] = useState([])

    const handleAddNearbyForm = (e) => {
        setNearby([...nearby, { stt: nearby.length + 1, value: "" }]);
        console.log(nearby);
    };

    const handleListNearby = (e, stt) => {
        nearby[stt - 1].value = e.target.value;
        setNearby(nearby);
    };

    const renderNearbyForm = (list) => {
        return list.map((item) => {
            return (
                <FormInput
                    label={item.stt === 1 ? "Gần các địa điểm" : ""}
                    placeholder={"Địa điểm " + item.stt}
                    name="near_by"
                    onChange={(e) => handleListNearby(e, item.stt)}
                />
            );
        });
    };

    const handleSelectedProvince = (e) => {
        var newDistrict = districtValue.filter(
            (item) => item.parent_code === e.target.value
        );
        setDistrict(newDistrict);
    };
    const handleSelectedDistrict = (e) => {
        var newCommune = communeValue.filter(
            (item) => item.parent_code === e.target.value
        );
        setCommune(newCommune);
    };

    // button upload ảnh lên server trước
    // up luon anh cung voi chi tiet tin 
    // const handleSubmitImages =async (images) => {
    //     // console.log(images)
    //     const result = await axios.post("http://localhost:4000/api/images/upload/base64", {file: images} )
    //     const path = result.data.path
    //     console.log(path)
    //     setLinkimg(path)

    //     // Làm cách này thì set images: ở phần onsubmit thành (linkimgs)
    // }

    const handlePostNewsToDB = async (data) => {
        try {
            const result = await axios.post("http://localhost:4000/api/post/create", data )
            const res = result.data
            console.log(res)
            alert(res.msg)
        }
        catch(err) {
            console.log(err)
        }
        alert(JSON.stringify(data))
    }

    const ConvertNearBytoPlace = (data) =>{
        alert(JSON.stringify(data))
        var arr = []
        data.map(x=> arr.push(x.value))
        console.log(arr)
        return arr

    }

    // Cắt ảnh 
    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
    };

    const { handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues: {
            // dia chi phong
            province: "",
            district: "",
            commune: "",
            street: "",
            // thong tin phong
            typeroom: "",
            numberOfRoom: "",
            square: "",
            price: "",
            with_owner: "",
            pre_money: "",

            // thong tin ve co so vat chat
            bathroom: "",
            heater: "",
            kitchen: "",
            airconditional: "",
            balcony: "",
            electric_price: "",
            water_price: "",
            other: "",
            
            // tieu de va mieu ta bai dang + thoi han
            title: "",
            description: "",
            duration: "",

            // anh cua tin dang
            // images: [],
            file: [],
        },
        validationSchema: Yup.object({
            commune: Yup.string().required(message),
            district: Yup.string().required(message),
            province: Yup.string().required(message),

            typeroom: Yup.number().required(message),
            numberOfRoom: Yup.number().required(message),
            square: Yup.number(require_message).required(message),
            price: Yup.number(require_message).required(message),
            with_owner: Yup.number().required(message),
            pre_money: Yup.number(require_message).required(message),

            bathroom: Yup.number().required(message),
            heater: Yup.number().required(message),
            kitchen: Yup.number().required(message),
            airconditional: Yup.number().required(message),
            balcony: Yup.number().required(message),
            electric_price: Yup.number(require_message).required(message),
            water_price: Yup.number(require_message).required(message),

            title: Yup.string().required(message),
            duration: Yup.number(require_message).required(message),
            description: Yup.string()
            .required(message)
            .min(10, 'Độ dài tối thiểu là 10')
            .max(250, 'Tối đa 250 ký tự')

            // images: Yup
            // images: Yup.array().min(1).max(10).required(message),
        }),
        onSubmit: (value) => {
            // console.log(value);
            let data = {
                // province: province1[value.province].name ,
                address:  value.street + ", "+ communeValue1[value.commune].name + ", "+districtValue1[value.district].name + ", "+ province1[value.province].name,
                // district_code: districtValue1[value.district].name,
                // commune_code: communeValue1[value.commune].name,
                nearby: ConvertNearBytoPlace(nearby),
                // street: value.street,
                roomType: value.typeroom,
                quantity: value.numberOfRoom,
                area: value.square,
                price: value.price,
                shared: value.with_owner,
                tiencoc: value.pre_money,

                // Co so vat chat cua phong
                bathroom: value.bathroom,
                nonglanh: value.heater,
                kitchen: value.kitchen,
                airConditioner: value.airconditional,
                balcony: value.balcony,
                electricity: value.electric_price,
                water: value.water_price,
                other: value.other,

                // tieu de va noi dung
                title: value.title,
                description: value.description,
                duration: value.duration,

                // anh cua tin dang
                // images: linkimg,
                file: objImages,

                typeCostElectric: 0,
                // sua khi có đăng nhập
                id_owner: 1,
            };
            console.log(data);
            handlePostNewsToDB(data)
        },
    });
    return (
        <div className="container">
            <h2>Đăng tin</h2>
            <form action="" onSubmit={handleSubmit}>
                <h3>Lấy địa chỉ</h3>
                <div className="row" style={{margin: 0, justifyContent: "space-between"}}>
                    <FormInput
                        typeInput="select"
                        name="province"
                        label="Chọn tỉnh/thành phố"
                        required={true}
                        placeholder="Chọn tỉnh/thành phố"
                        listOption={province}
                        onChange={(e) => {
                        handleSelectedProvince(e);
                        handleChange(e);
                        }}
                    />
                    <FormInput
                        typeInput="select"
                        name="district"
                        label="Chọn quận/huyện/thị xã"
                        required={true}
                        placeholder="Chọn quận/huyện/thị xã"
                        listOption={district}
                        onChange={(e) => {
                        handleSelectedDistrict(e);
                        handleChange(e);
                        }}
                    />
                    <FormInput
                        typeInput="select"
                        name="commune"
                        label="Chọn xã/phường/thị trấn"
                        required={true}
                        placeholder="Chọn xã/phường/thị trấn"
                        listOption={commune}
                        onChange={handleChange}
                        error={errors.commune}
                        touched={touched.commune}
                    />
                </div>
                <FormInput
                    label="Số nhà, đường/thôn"
                    name="street"
                    onChange={handleChange}
                    placeholder="Số nhà, đường/thôn"
                />
                {renderNearbyForm(nearby)}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button onClick={handleAddNearbyForm} type="button">
                        <i class="fas fa-plus-square"></i>
                    </Button>
                </div>

                <h3>Thông tin về phòng trọ</h3>
                <div className="row" style={{margin: 0, justifyContent: "space-between"}}>
                    <FormInput
                        name="typeroom"
                        label="Loại phòng"
                        required={true}
                        placeholder="Chọn loại phòng"
                        listOption={typeRoomData}
                        error={errors.typeroom}
                        touched={touched}
                        onChange={handleChange}
                        typeInput="select"
                        
                    />
                    <FormInput
                        name="with_owner"
                        label="Chung chủ"
                        placeholder="Chung chủ"
                        listOption={withOwn}
                        onChange={handleChange}
                        error={errors.with_owner}
                        touched={touched}
                        required={true}
                        typeInput="select"
                    />
                    <FormInput
                        name="numberOfRoom"
                        label="Số phòng"
                        required={true}
                        onChange={handleChange}
                        error={errors.numberOfRoom}
                        touched={touched}
                        placeholder="Số phòng"
                        
                        type="number"
                    />
                </div>
                
                <div className="row" style={{margin: 0, justifyContent: "space-between"}}>
                    <FormInput
                        name="square"
                        label="Diện tích (m2)"
                        required={true}
                        onChange={handleChange}
                        error={errors.square}
                        touched={touched}
                        placeholder="Diện tích"
                    />
                    <FormInput
                        name="price"
                        label="Giá (đ)/ 1 tháng"
                        required={true}
                        onChange={handleChange}
                        error={errors.price}
                        touched={touched}
                        placeholder="Giá"
                        
                    />
                    <FormInput
                        name="pre_money"
                        label="Tiền cọc (đ)"
                        placeholder="Tiền cọc"
                        onChange={handleChange}
                        error={errors.pre_money}
                        touched={touched}
                        required={true}
                    />
                </div>

                <h3>Cơ sở vật chất của phòng</h3>
                <div className="row" style={{margin: 0, justifyContent: "space-between"}}>
                    <FormInput
                        name="bathroom"
                        label="Phòng tắm riêng/ khép kín"
                        required={true}
                        placeholder="Phòng tắm"
                        error={errors.bathroom}
                        touched={touched}
                        listOption={option}
                        onChange={handleChange}
                        typeInput="select"
                        
                    />
                    <FormInput
                        name="heater"
                        label="Nóng lạnh"
                        required={true}
                        placeholder="Nóng lạnh"
                        error={errors.heater}
                        touched={touched}
                        listOption={option}
                        onChange={handleChange}
                        
                        typeInput="select"
                    />
                    <FormInput
                        name="kitchen"
                        label="Khu bếp riêng"
                        required={true}
                        error={errors.kitchen}
                        listOption={option}
                        touched={touched}
                        onChange={handleChange}
                        placeholder="Phòng bếp"
                        typeInput="select"
                    />
                    <FormInput
                        name="airconditional"
                        label="Điều hoà"
                        required={true}
                        placeholder="Điều hoà"
                        error={errors.airconditional}
                        listOption={option}
                        touched={touched}
                        onChange={handleChange}
                        typeInput="select"
                    />
                    <FormInput
                        name="balcony"
                        label="Ban công"
                        required={true}
                        placeholder="Ban công"
                        error={errors.balcony}
                        listOption={option}
                        touched={touched}
                        onChange={handleChange}
                        
                        typeInput="select"
                    />
                </div>
                <div className="row" style={{margin: 0, justifyContent: "space-between"}}>
                    <FormInput
                        name="electric_price"
                        label="Điện (đ/kWh)"
                        required={true}
                        error={errors.electric_price}
                        touched={touched}
                        onChange={handleChange}
                        placeholder="Điện (đ/kWh)"
                        
                    />
                    <FormInput
                        name="water_price"
                        label="Nước (đ/m3)"
                        error={errors.water_price}
                        touched={touched}
                        onChange={handleChange}
                        required={true}
                        placeholder="Nước (đ/m3)"
                        
                    />
                    <FormInput
                        name="other"
                        label="Tiện ích khác"
                        placeholder="Tiện ích khác"
                        onChange={handleChange}
                    />
                </div>
                <Note>
                    <p>Điện nước tính giá dân thì để giá điện và nước là 0đ</p>
                    <p>Trường có dấu (*) là trường bắt buộc phải cung cấp thông tin</p>
                </Note>

                <h3>Chọn tiêu đề và miêu tả bài viết</h3>
                
                <FormInput
                    name="title"
                    label="Tiêu đề"
                    placeholder="Tiêu đề"
                    onChange={handleChange}
                    error={errors.title}
                    touched={touched}
                    required={true}
                />
                <FormInput
                    typeInput="textaria"
                    name="description"
                    onChange={handleChange}
                    label="Mô tả"
                    required={true}
                    placeholder="Mô tả về phòng để mọi người chú ý ..."
                    error={errors.description}
                    touched={touched}
                    
                />
                
                <FormInput
                    name="duration"
                    label="Thời hạn đăng (mặc định là 7 ngày)/ đơn vị (ngày)"
                    placeholder="Ngày"
                    required={true}
                    onChange={handleChange}
                    type="number"
                    min="7"
                />

                <h3>Tải ảnh lên</h3>

                <MultiImageInput
                    images={objImages}
                    setImages={setObjImages}
                    max={10}
                    cropConfig={{ crop, ruleOfThirds: true }}
                />
                <div>
                    {/* <input type="button" value="Upload ảnh" className="btn btn-success" onClick={()=>handleSubmitImages(objImages)}/> */}
                </div>
                <Note>
                    <p>Phải tải ảnh lên trước khi ấn post tin</p>
                    <p>Chọn tối đa là 10 ảnh</p>
                    <p>Ấn submit ảnh trước khi post tin nhé</p>
                </Note>
                <Padding />
                <div className="">
                    <Button
                        children="Post tin đăng"
                        type="submit"></Button>
                </div>
            </form>
        </div>
    );
};
