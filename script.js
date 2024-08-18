const subheader_head = document.querySelector('.subheader-head');
const subheader_subhead = document.querySelector(".subheader-subhead")
const card1_header = document.querySelector(".card1-header")
const card1_span = document.querySelector(".card1-span")
const video_dash = document.querySelector('.card1-video');
const card2_img = document.querySelector('.card2-img')
const card2_header = document.querySelector(".card2-header")
const card2_span = document.querySelector(".card2-span")
const card3_header = document.querySelector(".card3-header")
const card3_span = document.querySelector(".card3-span")
const card4_header = document.querySelector(".card4-header")
const card4_span = document.querySelector(".card4-span")
const arrowImg = document.getElementById('arrowImg');
const left_bar = document.getElementById("nav")
const left_top = document.getElementById("toggleButton")
const toggle = document.getElementById('toggleContent')
const p = document.createElement("p")
const contentBox = document.getElementById('contentBox');
// const text_box = document.getElementById('')
const m = document.getElementById('epicenter')
arrowImg.src = '/public/Screenshot from 2024-06-19 11-58-44 1.png'
left_bar.classList.add('left-bar')
left_top.classList.add('left_top');
m.classList.add('middle-content')
toggle.classList.add('left-bottom');
// middle.classList.add('middle-content')

document.getElementById('toggleButton').addEventListener('click', function() {
 
    if (contentBox.innerText === '1') {
        
        left_bar.classList.remove('left-bar')
        left_bar.classList.add('open-left-bar')
        m.classList.add('open-middle-content')
        m.classList.remove('middle-content')
        left_top.classList.remove('left-top')
        left_top.prepend(p)
        p.innerText = 'Journey Board'
        p.classList.add('journey-board');
        left_top.classList.add('open-left-top')
        contentBox.classList.remove('text-box')
        toggle.classList.add('open-left-bottom');
        toggle.classList.remove('left-bottom');
        

        contentBox.innerHTML = `
            <ul class="item-list">
                <li class="l1">Explore the world of management</li>
                <li class="l2">Technical Project Management</li>
                <li class="l3">Threadbuild</li>
                <li class="l4">Structure your pointers</li>
                <li class="l5">4SA Method</li>
            </ul>
        `;
      
        arrowImg.src = '/public/downarrow.png';
        console.log('open up')
    } else {
        left_bar.classList.remove('open-left-bar')
        left_bar.classList.add('left-bar')
        left_top.classList.remove('open-left-top')
        left_top.classList.add('left-top')
        contentBox.classList.add('text-box');
        m.classList.remove('open-middle-content')
        m.classList.add('middle-content')
        left_top.removeChild(p)
        toggle.classList.remove('open-left-bottom');
        toggle.classList.add('left-bottom');

        contentBox.innerHTML = ``
        contentBox.innerText = '1';
        arrowImg.src = '/public/Screenshot from 2024-06-19 11-58-44 1.png'; 
        console.log('closing...')

    }
});


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
card3_header.textContent = data.tasks[0].assets[2].asset_title
video_dash.src = data.tasks[0].assets[0].asset_content
// video_dash.load();tex
card3_span.textContent = data.tasks[0].assets[2].asset_description
card4_header.textContent = data.tasks[0].assets[3].asset_title
// video.src = data.tasks[0].assets[0].asset_content
// video_dash.load();tex
card4_span.textContent = data.tasks[0].assets[3].asset_description

})
.catch((error) => {
    console.log(error)
})





