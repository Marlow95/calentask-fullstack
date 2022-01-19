import React from 'react'

function Avatar(){

    const [formData, setFormData] = React.useState('')

    function postImageUploadApi(){
        const form = new FormData(formData)
        form.append('profilePic', form)
        fetch('http://localhost:4000/api/imageUpload', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
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
                <input type="file" name="profilePic" value={formData} onChange={getImageUpload}/>
                <br />
                <button onClick={uploadImage}>Upload</button>
            </form>
        </div>
    )
}

export default Avatar