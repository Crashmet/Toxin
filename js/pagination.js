// selecting required element
const element = document.querySelector(".pagination__list");
let totalPages = 15;
let page = 1;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //show the next button if the page value is greater than 1
    liTag += `<li class="pagination__item" onclick="createPagination(totalPages, ${page - 1})"><span class="pagination__link  pagination__prev"><i class="fas fa-angle-left"></i> </span></li>`;

  } if(page > 2){ //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="pagination__item first numb" onclick="createPagination(totalPages, 1)"><span class="pagination__link text">1</span></li>`;
    if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="pagination__item dots"><span class="pagination__link text">...</span></li>`;
    }
  } // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if(page == plength){ //if page is equal to plength than assign active string in the active variable
      active = "pagination__link_active";
    }else{ //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="pagination__item" onclick="createPagination(totalPages, ${plength})"><span class="pagination__link text ${active}">${plength}</span></li>`;
  }
  if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
    if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="pagination__item text"><span class="pagination__link text">...</span></li>`;
    }
    liTag += `<li class="pagination__item last" onclick="createPagination(totalPages, ${totalPages})"><span class="pagination__link text">${totalPages}</span></li>`;
  }

  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="pagination__item next" onclick="createPagination(totalPages, ${page + 1})"><span class="pagination__link text pagination__next"><i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}



