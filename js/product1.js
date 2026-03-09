$(function(){$.ajax({
      url:"./json/Mozzarella.json",// 불러올 파일경로
      dataType:"json",
      success:function(data){
        // 성공
        console.log(data);
        if (data.length > 0) { // data는 배열이고, 각 항목은 하나의 상품 정보
            data.forEach(function(i, idx){ // for (let i in data) { }
              $(".pro_card")
                .eq(idx)
                .append(
                  `
                    <a href="#">
                      <figure>
                        <img src="img/Mozzarella/${i.url}">
                        <figcaption>
                          <h3>${i.title}</h3>
                          <p>${i.subtitle}</p>
                          <div>
                            <span class="price">${i.price}</span>
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