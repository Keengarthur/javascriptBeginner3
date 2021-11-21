let people = [
    {   id:1,
        name:'Arthur Keeng',
        img:'1.jpg',
        job:'Software Developer',
        comment:`I am delighted to be in the midst of such
        distinguished people and I hope I am able to live up to the hype`
    },
    {   id:2,
        name:'Graham Nwosu',
        img:'2.jpg',
        job:'copywriter',
        comment:`I am delighted to be in the midst of suchshed people and I hop
        distinguished people and I hope I am able to live up to the hype`
    },
    {   id:3,
        name:'Favour Nwosu',
        img:'3.jpg',
        job:'Python Developer',
        comment:`I am delighted to be in theshed people and I hop midst of such
        distinguished people and I hope I am able to live up to the hype`
    },
    {   id:4,
        name:'Laura Nwosu',
        img:'4.jpg',
        job:'Entrepreneur',
        comment:`I am delighted to be in the midst of such
        distinguished people and I hopeshed people and I hop I am able to live up to the hype`
    },
    {   id:5,
        name:'Ugonma Nwosu',
        img:'5.jpg',
        job:'Fashion Designer',
        comment:`lorem eowuteowi sereow sodfe was sd eot s
        I am delighted to be in the midst of such
        distinguished people and I hope I am able to live up to the hype`
    }
]

let buttons = document.querySelectorAll('button')
let image = document.querySelector('.image')
let personName = document.querySelector('.name')
let job = document.querySelector('.job')
let comment = document.querySelector('.comment')
let count = 0;

function changeView(){
    image.src = people[count].img
    personName.innerHTML = people[count].name
    job.innerHTML =  people[count].job
    comment.innerHTML = people[count].comment
}

function getRandom(){
    return Math.floor(Math.random()*people.length)
}
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
       let clickedButton = e.target.classList
       if(clickedButton.contains('prev')){   
        count--
        if (count<0)  {
            count=people.length-1
        }
      }

       else if(clickedButton.contains('next')){
           count++
           if(count==people.length){
            count= 0
           }
        }
       else{
           count=getRandom()
       }
      changeView()
    })
})