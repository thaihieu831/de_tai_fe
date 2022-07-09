$('.lazy').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  prevArrow: $('.btn-prev'),
  nextArrow: $('.btn-next'),
});

$('.lazy1').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slideVer').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  vertical: true,
});

$('.lazy2').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.lazy4').slick({
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slick-repon').slick({
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Effect typing desktop
const words = ["Nhập từ khóa cần tìm kiếm?"
];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      let elem = document.getElementById('email');
      elem.setAttribute('placeholder', elem.getAttribute('placeholder') + word.shift());
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
};

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById('email').setAttribute('placeholder', word.join(""));
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
};
typingEffect();

//Effect typing mobile
const words1 = ["Nhập từ khóa cần tìm kiếm?"];
let i1 = 0;
let timer1;

function typingEffect1() {
  let word1 = words1[i].split("");
  var loopTyping1 = function () {
    if (word1.length > 0) {
      let elem1 = document.getElementById('typing_mb');
      elem1.setAttribute('placeholder', elem1.getAttribute('placeholder') + word1.shift());
    } else {
      deletingEffect1();
      return false;
    };
    timer = setTimeout(loopTyping1, 100);
  };
  loopTyping1();
};

function deletingEffect1() {
  let word1 = words1[i].split("");
  var loopDeleting1 = function () {
    if (word1.length > 0) {
      word1.pop();
      document.getElementById('typing_mb').setAttribute('placeholder', word1.join(""));
    } else {
      if (words1.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect1();
      return false;
    };
    timer1 = setTimeout(loopDeleting1, 100);
  };
  loopDeleting1();
};
typingEffect1();

////////////* button scroll top *////////
let mybutton = document.getElementById("myBtn");
let mybutton1 = document.getElementById("listShare");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    mybutton.style.display = "block";
    mybutton1.style.display = "block";
  } else {
    mybutton.style.display = "none";
    mybutton1.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Menu mobile

function menuMobile() {
  let x = document.getElementById("header-left");
  let opacity = document.getElementById("menu-hide");

  if (x.style.display === "block") {
    x.style.display = "none";
    opacity.style.display = "none";
  } else {
    x.style.display = "block";
    opacity.style.display = "block";
  }
}

function hideMenu() {
  let hide = document.getElementById("header-left");
  let opacity = document.getElementById("menu-hide");
  if (hide.style.display === "block") {
    hide.style.display = "none";
    opacity.style.display = "none";
  }
}

function dropdownMenu() {
  let gt = document.getElementById("dropdown-menu1");
  if (gt.style.display === "block") {
    gt.style.display = "none";
    document.getElementById("btn-dropdown-menu").style.transform = "rotate(0deg)";
    document.getElementById("btn-dropdown-menu").style.color = "#8a8987";
  }
  else {
    gt.style.display = "block";
    document.getElementById("btn-dropdown-menu").style.transform = "rotate(90deg)";
    document.getElementById("btn-dropdown-menu").style.color = "#f4c601";
  }
}


function dropdownMenu1() {
  let ks = document.getElementById("dropdown-menu2");
  if (ks.style.display === "block") {
    ks.style.display = "none";
    document.getElementById("btn-dropdown-menu1").style.transform = "rotate(0deg)";
    document.getElementById("btn-dropdown-menu1").style.color = "#8a8987";
  }
  else {
    ks.style.display = "block";
    document.getElementById("btn-dropdown-menu1").style.transform = "rotate(90deg)";
    document.getElementById("btn-dropdown-menu1").style.color = "#f4c601";
  }
}

function dropdownMenu2() {
  let bt = document.getElementById("dropdown-menu3");
  if (bt.style.display === "block") {
    bt.style.display = "none";
    document.getElementById("btn-dropdown-menu2").style.transform = "rotate(0deg)";
    document.getElementById("btn-dropdown-menu2").style.color = "#8a8987";
  }
  else {
    bt.style.display = "block";
    document.getElementById("btn-dropdown-menu2").style.transform = "rotate(90deg)";
    document.getElementById("btn-dropdown-menu2").style.color = "#f4c601";
  }
}

function dropdownMenu3() {
  let np = document.getElementById("dropdown-menu4");
  if (np.style.display === "block") {
    np.style.display = "none";
    document.getElementById("btn-dropdown-menu3").style.transform = "rotate(0deg)";
    document.getElementById("btn-dropdown-menu3").style.color = "#8a8987";
  }
  else {
    np.style.display = "block";
    document.getElementById("btn-dropdown-menu3").style.transform = "rotate(90deg)";
    document.getElementById("btn-dropdown-menu3").style.color = "#f4c601";
  }
}

function dropdownMenu4() {
  let nt = document.getElementById("dropdown-menu5");
  if (nt.style.display === "block") {
    nt.style.display = "none";
    document.getElementById("btn-dropdown-menu4").style.transform = "rotate(0deg)";
    document.getElementById("btn-dropdown-menu4").style.color = "#8a8987";
  }
  else {
    nt.style.display = "block";
    document.getElementById("btn-dropdown-menu4").style.transform = "rotate(90deg)";
    document.getElementById("btn-dropdown-menu4").style.color = "#f4c601";
  }
}

function dropdownMenu5() {
  let dt = document.getElementById("dropdown-menu6");
  if (dt.style.display === "block") {
    dt.style.display = "none";
    document.getElementById("btn-dropdown-menu5").style.transform = "rotate(0deg)";
    document.getElementById("btn-dropdown-menu5").style.color = "#8a8987";
  }
  else {
    dt.style.display = "block";
    document.getElementById("btn-dropdown-menu5").style.transform = "rotate(90deg)";
    document.getElementById("btn-dropdown-menu5").style.color = "#f4c601";
  }
}

function dropdownMenu6() {
  let pt = document.getElementById("dropdown-menu7");
  if (pt.style.display === "block") {
    pt.style.display = "none";
    document.getElementById("btn-dropdown-menu6").style.transform = "rotate(0deg)";
    document.getElementById("btn-dropdown-menu6").style.color = "#8a8987";
  }
  else {
    pt.style.display = "block";
    document.getElementById("btn-dropdown-menu6").style.transform = "rotate(90deg)";
    document.getElementById("btn-dropdown-menu6").style.color = "#f4c601";
  }
}

function dropdownMenu7() {
  let tv = document.getElementById("dropdown-menu8");
  if (tv.style.display === "block") {
    tv.style.display = "none";
    document.getElementById("btn-dropdown-menu7").style.transform = "rotate(0deg)";
    document.getElementById("btn-dropdown-menu7").style.color = "#8a8987";
  }
  else {
    tv.style.display = "block";
    document.getElementById("btn-dropdown-menu7").style.transform = "rotate(90deg)";
    document.getElementById("btn-dropdown-menu7").style.color = "#f4c601";
  }
}