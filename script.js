const subheader_head = document.querySelector('.subheader-head');
const subheader_subhead = document.querySelector(".subheader-subhead")
const card1_header = document.querySelector(".card1-header")
const card1_span = document.querySelector(".card1-span")
const video = document.getElementById("video")
const video_dash = document.querySelector('.card1-video');
const card2_img = document.querySelector('.card2-img')
const card2_header = document.querySelector(".card2-header")
const card2_span = document.querySelector(".card2-span")


const info = fetch('data.json')
.then((data) => {
    return data.json()
})
.then((data) => {
    console.log(data)

subheader_head.textContent = data.tasks[0].task_title
subheader_subhead.textContent = data.tasks[0].task_description
card1_header.textContent = data.tasks[0].assets[0].asset_title
card1_span.textContent = data.tasks[0].assets[0].asset_description

card2_header.textContent = data.tasks[0].assets[1].asset_title
card2_span.textContent = data.tasks[0].assets[1].asset_description
// video.src = data.tasks[0].assets[0].asset_content
// video_dash.load();
 
})
.catch((error) => {
    console.log(error)
})





