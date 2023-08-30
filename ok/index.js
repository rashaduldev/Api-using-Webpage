// https://openapi.programming-hero.com/api/phones?search=iphone
const loadPhone=async(searchText)=>{
    const rea=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await rea.json();
    const result=data.data;
    allPhones(result);
}

const allPhones=phone=>{
    console.log(phone);
    const phone_container=document.getElementById('phone_container');
    phone_container.textContent='';
    // step 2
    phone.forEach(phone => {
        const mobileDiv= document.createElement('div');
        // mobileDiv.style.backgroundColor=red;
        mobileDiv.classList=`card p-6 bg-base-100 shadow-xl`;
        mobileDiv.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `
        phone_container.appendChild(mobileDiv);
    });
    loadingSpin(false);
}
const handleSearch=()=>{
    loadingSpin(true);
    const searchField=document.getElementById('searchField');
    const searchText=searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
}
const loadingSpin=(isLoading)=>{
    const loading=document.getElementById('loading');
   if (isLoading) {
    loading.classList.remove('hidden');
   } else {
    loading.classList.add('hidden');
   }
}
// loadPhone();