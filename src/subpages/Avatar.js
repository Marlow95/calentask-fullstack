import React from 'react'

function Avatar(){

    const [formData, setFormData] = React.useState([])

    function postImageUploadApi(){
        const form = new FormData()
        form.append('imageFile', formData)
        console.log(form)
        fetch('https://localhost:4620/api/fileUpload', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'multipart/form-data',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': 'http://localhost:3000/'
            },
            body: form
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }


    function getImageUpload(event){
        const {name, files} = event.target
        setFormData(prevForm => {
            return {
                ...prevForm,
                [name]: files[0]
            }
        })

    }

    function uploadImage(event){
        event.preventDefault()
        postImageUploadApi()
    }

    return(
        <div>
            <form>
                <label>Upload your profile picture</label>
                <br />
                <input type="file" name="imageFile" onChange={getImageUpload}/>
                <br />
                <button onClick={uploadImage}>Upload</button>
            </form>
            {formData[0]}
        </div>
    )
}

export default Avatar