
window.addEventListener('DOMContentLoaded', () => {
  display_Portfolio(items)
  dynamic_btns()
  displayTeam()
  offer_display()
  display_testimonail()
})

window.addEventListener('load', (e) => {
  const preloader = document.querySelector('.Pre-loder')
  preloader.classList.add('hide-Pre-loder')
})


$('.header-nav a').on('click', function (e) {
  e.preventDefault()
  if (this.hash) {
    let hashTag = this.hash;
    $('html,body').animate({
      scrollTop: $(hashTag).offset().top
    }, 600)
  }

})

const head = document.querySelector("header");
window.addEventListener("scroll", () => {
  head.classList.toggle("stick-bar", window.scrollY > 0);
});



const toggleBtn = document.querySelector(".toggle-bar");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".slider");

toggleBtn.addEventListener("click", function () {

  sidebar.classList.toggle("active-slider");
  const link = document.querySelector('.slider-links')
  const x = link.children
  for (let i = 0; i < x.length; i++) {
    const element = x[i];

    element.addEventListener('click', (e) => {
      setTimeout(() => {
        sidebar.classList.remove("active-slider");
      }, 200);

    })

  }
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("active-slider");

});





/*
    ****************** Portfolio area start *************
*/
const sectionCenter = document.querySelector('.img-wrapper')
const button_container = document.querySelector('.button-container')

const items = [
  {
    "id": 1,
    "category": "creative",
    "img": "images/pic0.jpg"
  },
  {
    "id": 2,
    "category": "nature",
    "img": "images/pic1.jpg"
  }
  ,
  {
    "id": 3,
    "category": "nature",
    "img": "images/pic2.jpg"
  }
  ,
  {
    "id": 4,
    "category": "creative",
    "img": "images/pic3.jpg"
  }
  ,
  {
    "id": 5,
    "category": "wedding",
    "img": "images/pic4.jpg"
  }
  ,
  {
    "id": 6,
    "category": "wedding",
    "img": "images/pic5.jpg"
  }

  ,
  {
    "id": 7,
    "category": "wedding",
    "img": "images/pic7.jpg"
  }
  ,
  {
    "id": 8,
    "category": "nature",
    "img": "images/pic11.jpg"
  }
  ,
  {
    "id": 9,
    "category": "wedding",
    "img": "images/pic8.jpg"
  }
  ,
  {
    "id": 10,
    "category": "nature",
    "img": "images/pic12.jpg"
  }
  ,
  {
    "id": 11,
    "category": "creative",
    "img": "images/pic13.jpg"
  }
  ,
  {
    "id": 12,
    "category": "nature",
    "img": "images/pic14.jpg"
  }
  ,
  {
    "id": 13,
    "category": "wedding",
    "img": "images/pic9.jpg"
  }
  ,
  {
    "id": 14,
    "category": "creative",
    "img": "images/pic15.jpg"
  }
  ,
  {
    "id": 15,
    "category": "wedding",
    "img": "images/pic10.jpg"
  }
  ,
  {
    "id": 16,
    "category": "creative",
    "img": "images/pic16.jpg"
  }

]

function display_Portfolio(items) {
  let x = items.map(e => {
    return `<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-8 img-carryer">
              <a href="${e.img}">
                 <div class="photo-c">
                     <img src="${e.img}" class="img-fluid" alt="">
                 </div>
                  <div class="catatorys">
                       <h4>${e.category}</h4>
                  </div>
             </a>
            </div>`
  });
  $(document).ready(() => {
    $('.img-carryer').magnificPopup({
      type: 'image',
      delegate: 'a',
      gallery: {
        enabled: true,
      }
    });
  });
  let res = x.join(" ")
  sectionCenter.innerHTML = res
}

const dynamic_btns = () => {
  const reducing = items.reduce((previous, current) => {

    if (!previous.includes(current.category)) {
      previous.push(current.category)
    }
    return previous
  }, ['all'])

  const show_btn = reducing.map((e) => {
    return `<button class="btn filter-btn " data-filter="${e}">${e}</button>`

  }).join('')

  button_container.innerHTML = show_btn
  const buttons = document.querySelectorAll('.filter-btn')

  buttons.forEach((elem) => {
    elem.addEventListener('click', (e) => {

      const eachValu = e.currentTarget.dataset.filter

      const new_catagory = items.filter((e) => {
        if (e.category === eachValu) {
          return e
        }
      })
      if (eachValu === 'all') {
        display_Portfolio(items)
      } else {
        display_Portfolio(new_catagory)
      }


    })
  })

  const fistBtn = document.querySelectorAll('.filter-btn')[0]
  fistBtn.classList.add('active-fileter-btn')



  returnButtons(button_container, buttons)


}

function returnButtons(container, btn) {

  container.addEventListener('click', (e) => {

    const button = e.target.dataset.filter
    if (button) {

      btn.forEach((a) => {
        a.classList.remove('active-fileter-btn')
        e.target.classList.add('active-fileter-btn')
      });

    }
  })



}
/*
    ****************** Portfolio area end *************
*/





/*
    ****************** testimonial area start *************
*/
const testimonal_container = document.querySelector('.testimonal-wrapper')

let testimonal_members = [
  {
    img: 'images/client1.jpg',
    name: 'Chirs May',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores sint nobis! Placeat adipisci ullam possimus temporibus tempore.voluptatum minus temporibus esse.`

  },
  {
    img: 'images/client2.jpg',
    name: 'Hrittik',
    text: ` Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af
  blog church-key meggings vaporware PBR&B master cleanse post-ironic man.`
  },
  {
    img: 'images/client3.jpg',
    name: 'Moush Pal',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores sint nobis! Placeat adipisci ullam possimus temporibus tempore.voluptatum minus temporibus esse.`
  }
]

function display_testimonail() {

  const show_testimonal = testimonal_members.map((e) => {

    return ` <div class="item">
  <div class="row justify-content-center">
      <div
          class="col-lg-10 d-flex flex-column justify-content-center  align-items-center text-center">
          <div class="photo mb-2">
              <img src="${e.img}" class="border border-4 rounded-circle mx-auto img-fluid"
                  alt="">
          </div>
          <div class="review-text text-white-50">
              <div>
                  <a href="#0" class="text-decoration-none ">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                  </a>
                  <h4 class="mt-2">- ${e.name}</h4>
              </div>
              <p class="w-50 mx-auto">
               ${e.text}
              </p>
          </div>
      </div>
  </div>
</div>`
  }).join('')

  testimonal_container.innerHTML = show_testimonal

}

$(document).ready(() => {
  $('.testimonal-wrapper').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
})
/*
    ****************** testimonial area end *************
*/





$('.overview-carousel').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1500,
  responsive: {
    0: {
      items: 1,
      stagePadding: 30,

    },
    501: {
      items: 1.5
    },
    625: {
      items: 2
    },
    1000: {
      items: 3
    },
    1300: {
      items: 4
    }

  }
})





/*
    ****************** Team area start *************
*/
const team_Details = [
  {
    id: 1,
    img: 'images/team1.jpg',
    faceBook: '#0',
    in: '#0',
    instagram: '#0',
    twitter: '0#'
  },
  {
    id: 2,
    img: 'images/team2.jpg',
    faceBook: '#0',
    in: '#0',
    instagram: '#0',
    twitter: '#0'

  },
  {
    id: 3,
    img: 'images/team3.jpg',
    faceBook: '#0',
    in: '#0',
    instagram: '#0',
    twitter: '#0'
  },
  {
    id: 4,
    img: 'images/team4.jpg',
    faceBook: '#0',
    in: '#0',
    instagram: '#0',
    twitter: '#0'
  }

]
const team_wrapper = document.querySelector('.team-wrapper')

const displayTeam = () => {

  const show_team = team_Details.map((e) => {
    return ` <div class="col-lg-3 col-md-4 col-sm-5 col-7">
  <div class="team-carryer">
      <div class="team-img w-100">
          <img src="${e.img}" class="img-fluid" alt="">
      </div>
      <div class="d-flex justify-content-center mx-auto social-icons">
          <a href="${e.faceBook}"><i class="fab fa-facebook-f"></i></a>
          <a href="${e.in}"><i class="fab fa-linkedin-in"></i></a>
          <a href="${e.instagram}"><i class="fab fa-instagram"></i></a>
          <a href="${e.twitter}"> <i class="fab fa-twitter"></i></a>
      </div>
    
  </div>
</div>`
  }).join('')

  team_wrapper.innerHTML = show_team

}
/*
    ****************** Team area end *************
*/





/*
    ****************** Offer area start *************
*/
const offer_display = () => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];


  const label = document.querySelector('.giveaway-date')
  const showdate = document.querySelector('.days')
  const showhour = document.querySelector('.hour')

  const showminit = document.querySelector('.minit')
  const showsecend = document.querySelector('.second')



  const currentTimes = new Date()

  const curr_year = currentTimes.getFullYear()
  const curr_month = currentTimes.getMonth()
  const curr_date = currentTimes.getDate()



  const futureDate = new Date(curr_year, curr_month, curr_date + 5, 10, 30, 10)

  let mon = futureDate.getMonth()
  mon = month[mon]

  let day = futureDate.getDay()
  day = weekdays[day]

  let date = futureDate.getDate()
  let year = futureDate.getFullYear()
  let future_hour = futureDate.getHours()
  let future_minit = futureDate.getMinutes()



  label.innerHTML = `Offer Ends On <span>${day} ${date} ${mon} ${year} ${future_hour}:${future_minit} am`




  const time = futureDate.getTime()
  const calling = () => {

    const currentDate = new Date().getTime()

    const t = time - currentDate

    let s = 1000;
    let m = s * 60;
    let h = m * 60;
    let d = h * 24


    let sec = Math.floor((t % m) / s)
    let minit = Math.floor((t % h) / m)
    let hours = Math.floor(((t % d) / h))
    let day = Math.floor(t / d)


    showdate.innerHTML = day
    showhour.innerHTML = hours
    showminit.innerHTML = minit
    showsecend.innerHTML = sec
  }

  setInterval(calling, 1000)


}
/*
    ****************** Offer area end *************
*/
