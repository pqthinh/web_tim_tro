import React, { useEffect, useState } from 'react'
import Axios from "axios"
// import formAxios from '../fetch/axios'
import MultiImageInput from 'react-multiple-image-input';
import baseUrl from '../../fetch/baseurl';

export default function ImageUpload() {
    const [files, setFiles] = useState([])
    const [images, setImages] = useState({});
    const [list, setList] = useState([])
    
    // test file
    const fileSelectedHandler = (e) => {
      // this.setState({ files: [...this.state.files, ...e.target.files] })
      // console.log(e.target.files)
      const image = [...files, ...e.target.files]
      // console.log(image)
      setFiles(image)
    }
    

    const submitForm = (images) =>{
      console.log(images)
      // let headers = { 'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2) };
      Axios.post(`${baseUrl}/images/upload/base64`, {file: images} )
      .then(res=> console.log(res))
      .catch(err=> console.log(err))
    }
    useEffect(()=>{
      const fetchimage = async() => {
        const temp =  await Axios.get(`${baseUrl}/images/room`)
        console.log(temp.data)
        alert(temp.data.length)
        setList(temp.data)
      }
      fetchimage()
    }, [])

    // Cat anh
    const crop = {
      unit: '%',
      aspect: 4 / 3,
      width: '100'
    };
    return (
      <div>
        <MultiImageInput
          images={images}
          setImages={setImages}
          max={10}
          cropConfig={{ crop, ruleOfThirds: true }}
        />
        <h1>List : {JSON.stringify(list)}</h1>

        <div className="containImage">
          {
            list?.map(x => (
              <div>
                {
                  JSON.parse(x.link)?.map(img => <img key={img} src={img} alt="test "/>)
                }
              </div>
            ))
          }
          {/* <img src={JSON.parse(list[0].link)[0]} /> */}
        </div>

        <form>
          <div><h2>Upload images</h2></div>
          <h3>Images</h3>
          <input type="file" multiple onChange={fileSelectedHandler} />
          <input type="button" value="Up file" onClick={()=>submitForm(images)}/>
      </form>
      </div>
      
    )
    
}