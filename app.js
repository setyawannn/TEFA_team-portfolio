
//looping about us content
$.ajax({
    url: 'data-person.json',
    success: result => {
      const aboutus = result;
      let about = '';
      aboutus.forEach(m => {
        about +=`<div class="aboutus-person">
        <div class="person-img">
          <img src="${m.image}" alt="">
          <div class="line-person"></div>
          <h4>${m.nickname}</h4>
          <div class="line-person"></div>
        </div>
        <div class="person-content">
          <p>${m.deskripsi}</p>
        </div>
      </div>`;
      });
      $(`.aboutus-content-main`).html(about);
    },
    error: (e) => {
      console.log(e.responseText);
    }
  });

  
  //looping sub nav (nama)
  $.ajax({
    url: 'data-person.json',
    success: result => {
      const ab = result;
      let a = '';
      ab.forEach(m => {
        a +=`<li><a href="#" id="${m.id}" class="button-name">${m.nickname}</a></li>
        <li> | </li>`;
      });
      $(`.tab`).html(a);
  
      
      
      
      
          //ketika sub nav (nama) diklik
            $(`.button-name`).on('click',  () => {
        
         //mendapatakan id                 
          var id = event.target.id;
      
          $.ajax({
              url: 'data-person.json',
              data:'id='+id,
              success: call => {
              
              //mendapatkan objek sesuai index dengan id -1  
              let dt = call[id-1];

              //menamplikan title content halaman detail
              let title = `<h1>${dt.fullname}</h1>
              <h4>${dt.hobby}</h4>`;
              $(`.title-content`).html(title);
              
              //menampilkan carousel foto
              let carouselfoto = `<div class="autoplay">
              <div class="img-wrapper"><img src="${dt.imagecar1}" alt=""></div>
              <div class="img-wrapper"><img src="${dt.imagecar2}" alt=""></div>
              <div class="img-wrapper"><img src="${dt.imagecar3}" alt=""></div>
              <div class="img-wrapper"><img src="${dt.imagecar4}" alt=""></div>
              </div>
              `;
              $(`.carousel-content`).html(carouselfoto);

                  $('.autoplay').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    arrows: true,
                    dots: true,
                    nextArrow: document.getElementById('slick-next'),
                    prevArrow: document.getElementById('slick-previous'),
                  });

              
              //menampilkan profile    
              let profile = `<div class="detail">
              <div class="icon">

                <i class="fa-solid fa-user-large"></i>

              </div>
              <div class="detail-data">
                <h4>FULL NAME</h4>
                <p>${dt.fullname}</p>
              </div>
            </div>
            <div class="detail">
              <div class="icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="detail-data">
                <h4>PHONE</h4>
                <p>${dt.nohp}</p>
              </div>
            </div>
            <div class="detail">
              <div class="icon">
                <i class="fa-solid fa-paintbrush"></i>
              </div>
              <div class="detail-data">
                <h4>HOBBY</h4>
                <p>${dt.hobby}</p>
              </div>
            </div>
            <div class="detail">
              <div class="icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="detail-data">
                <h4>ADDRES</h4>
                <p>${dt.alamat}</p>
              </div>
            </div>`;

            $(`.content-wrapper`).html(profile);

            
            //menampilkan map
            let map =`<div class="judul">
                        <h1>Favorite Place</h1>
                        <p>I really want to go to this place every day</p>
                      </div>
                      <iframe
                      src="${dt.map}"></iframe>`;

                      $(`.maps`).html(map);



                },
                error: (e) => {
                console.log(e.responseText);
              }
        });
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
});

