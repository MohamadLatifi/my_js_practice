const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

const audio1 = new Audio('off.ogg')//wav , mp3 , ogg , aif //file format you can use
// audio1.src='off.ogg'
btn1.addEventListener('click', () => {
  audio1.play()
})


const audio2 = new Audio('button1.ogg')

//پشتیبانی نمیشه چ کنیم روش 1 تبدیل  فایل صوتی به رشته های بیس 64 مشکل شون اینه ک خیلی طولانین و عملی نیس این روش
btn2.addEventListener('click', () => {
  audio2.play()
  //property
  // console.log(audio2.duration) //file length
})

const audio3 = new Audio('Pickup_Coin14.ogg')

//به مدت نیم ثانیه پلی کن تا زمانی که سه ثانیه بشه بعد اون متوقف شو
btn3.addEventListener('click', () => {
  setInterval(() => {
    setTimeout(() => {
      audio3.pause()
      console.log('exe inside') // این ها نشون دهنده بد بودن کد هس
    }, 3000)
    audio3.play()
    console.log('exe outside')// این ها نشون دهنده بد بودن کد هس
  }, 500)
})

const audio4 = new Audio('The Elven Groves.ogg')

btn4.addEventListener('click',()=>{
  audio4.play().then(()=>audio4.currentTime=20) // از ثانیه 20 شروع میشه
})