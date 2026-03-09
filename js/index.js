$(function(){
  // ====== CATEGORY ======
  $.ajax({
      url:"./json/cheese_category.json",// 불러올 파일경로
      dataType:"json",
      success:function(data){
        // 성공
        console.log(data);
        if (data.length > 0) { // data는 배열이고, 각 항목은 하나의 상품 정보
            data.forEach(function(i, idx){ // for (let i in data) { }
              $(".box")
                .eq(idx)
                .append(
                  `
                    <a href="#">
                      <figure>
                        <img src="img/indexCategory/${i.url}">
                        <figcaption>
                          <h3>${i.title}</h3>
                        </figcaption>
                      </figure>
                    </a>
                  ` );
            });
          }
      },
      error:function(err){
        // 실패
        console.log('로컬 JSON 불러오기 실패', err);
      }
    });
    window.onload = function(){
      //title
      const title = document.querySelector("#title");
      title.innerHTML = "추천 카테고리"

      document.querySelector(".category").insertBefore(subtitle, document.querySelector("article"));
    }


    // ====== SALE ======
    $.ajax({
      url:"./json/cheese.json",// 불러올 파일경로
      dataType:"json",
      success:function(data){
        // 성공
        console.log(data);
        if (data.length > 0) { // data는 배열이고, 각 항목은 하나의 상품 정보
            data.forEach(function(i, idx){ // for (let i in data) { }
              //review random count
              let count = Math.floor(Math.random() * 100); // 0 ~ 99 임의 숫자
              $(".sela")
                .eq(idx)
                .append(
                  `
                    <a href="#">
                      <figure>
                        <img src="img/cheeseQueen/${i.url}">
                        <figcaption>
                          <h3>${i.title}</h3>
                          <p>${i.subtitle}</p>
                          <div>
                          <span class="salePrice">${i.sale}</span>
                            <span class="price">${i.price}</span>
                            <span class="cost">${i.cost}</span>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  ` );
            });
          }
      },
      error:function(err){
        // 실패
        console.log('로컬 JSON 불러오기 실패', err);
      }
    });
    
    // ====== BEST ======
    $.ajax({
      url:"./json/Best.json",// 불러올 파일경로
      dataType:"json",
      success:function(data){
        // 성공
        console.log(data);
        if (data.length > 0) { // data는 배열이고, 각 항목은 하나의 상품 정보
            data.forEach(function(i, idx){ // for (let i in data) { }
              //review random count
              let count = Math.floor(Math.random() * 100); // 0 ~ 99 임의 숫자
              $(".pro_card")
                .eq(idx)
                .append(
                  `
                    <a href="#">
                      <figure>
                        <img src="img/Best/${i.url}">
                        <figcaption>
                          <h3>${i.title}</h3>
                          <p>${i.subtitle}</p>
                          <div>
                            <span class="price">${i.price}</span>
                            <span class="btn">${count} REVIEWS</span>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  ` );
            });
          }
      },
      error:function(err){
        // 실패
        console.log('로컬 JSON 불러오기 실패', err);
      }
    })
});
