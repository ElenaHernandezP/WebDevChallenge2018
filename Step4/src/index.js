function isMobile(){
  return navigator.userAgent.includes('Android')
 ||navigator.userAgent.includes('webOS')
 ||navigator.userAgent.includes('Phone')
 ||navigator.userAgent.includes('Pad')
 ||navigator.userAgent.includes('Pod')
 ||navigator.userAgent.includes('BlackBerry')
 ||navigator.userAgent.includes('Windows Phone')

}

function change(){
  let mobile = document.getElementById('mobile');
  let desktop = document.getElementById('web');

  if(isMobile()){
    desktop.style.display = 'none';
  }else{
    mobile.style.display = 'none';
  }
}
change();
