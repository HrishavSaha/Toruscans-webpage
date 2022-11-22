var main_section = document.getElementsByClassName('main-section')[0];
main_section.innerHTML = ''
for(i=0;i<11;i++){
    main_section.innerHTML += '<div class="card">card '+i+'</div>';
}