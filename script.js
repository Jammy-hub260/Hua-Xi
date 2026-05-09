// animate函数（你demo的升级版）

function animateTo(
  element,
  prop,
  target,
  duration = 800
){

  let start =
  parseFloat(
    getComputedStyle(element)[prop]
  ) || 0;

  let startTime = performance.now();

  function update(now){

    let progress =
    Math.min(
      (now - startTime) / duration,
      1
    );

    // 缓动
    let ease =
    1 - Math.pow(1 - progress, 3);

    let value =
    start +
    (target - start) * ease;

    // opacity不加px
    if(prop === "opacity"){
      element.style[prop] = value;
    }else{
      element.style[prop] = value + "px";
    }

    if(progress < 1){
      requestAnimationFrame(update);
    }

  }

  requestAnimationFrame(update);

}

// banner进入动画

let banner =
document.getElementById(
  "bannerContent"
);

window.onload = function(){

  animateTo(
    banner,
    "top",
    0,
    1000
  );

  animateTo(
    banner,
    "opacity",
    1,
    1200
  );

};

// 产品tab切换

let tabs =
document.querySelectorAll(".tab-btn");

let productList =
document.getElementById("productList");

tabs.forEach(btn=>{

  btn.onclick = function(){

    tabs.forEach(item=>{
      item.classList.remove("active");
    });

    this.classList.add("active");

    // 用你的animate思想
    productList.style.left = "80px";
    productList.style.opacity = "0";

    animateTo(
      productList,
      "left",
      0,
      600
    );

    animateTo(
      productList,
      "opacity",
      1,
      600
    );

  };

});

// 表单提交

let form =
document.getElementById("orderForm");

form.onsubmit = function(e){

  e.preventDefault();

  alert("订单提交成功！");

};