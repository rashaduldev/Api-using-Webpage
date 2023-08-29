const loadPhone=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data=await res.json();
    const phones=data.data;
    displayPhones(phones)
}

const displayPhones=phones=>{
    const phone_container=document.getElementById('phone_container');
    // console.log(phones);
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard=document.createElement('div');
        phoneCard.classList=`card w-96 bg-gray-100 shadow-xl`;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `
        phone_container.appendChild(phoneCard);
    });
}
loadPhone();