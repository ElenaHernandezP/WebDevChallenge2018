<script type="text/javascript">
  var url = window.location.href;
  var locale = url.split("/")[5];
  var onlineGreeting, offlineGreeting, deparment;

  if(locale === "es") {
    deparment = 'spanish';
    onlineGreeting = "Habla con nosotras";
    offlineGreeting = "Nuestros asesores no están disponibles en este momento, deje un mensaje y nos pondremos en contacto con usted pronto.";
  }
  else if(locale === "pt-pt") {
    deparment = 'portugese';
    onlineGreeting = "Fale com a gente";
    offlineGreeting = 'Nossos conselheiros não estão disponíveis no momento, deixe uma mensagem e entraremos em contato com você em breve.';
  }
  else if(locale === "fr") {
    deparment = 'french';
    onlineGreeting = "Parlez-nous";
    offlineGreeting = 'Nos conseillers ne sont pas disponibles pour le moment, veuillez laisser un message et nous vous contacterons dans les meilleurs délais.';
  }
   else if(locale === "hi") {
    deparment ='hindi';
    onlineGreeting = "हमारे साथ चैट करें";
    offlineGreeting = "हमारे काउंसलर फिलहाल उपलब्ध नहीं हैं, कृपया एक संदेश छोड़ दें और हम आपसे जल्द ही संपर्क करेंगे।ो";
  }
   else if(locale === "pl") {
    deparment = 'polish';
    onlineGreeting = "Rozmawiaj z nami";
    offlineGreeting = "Nasi doradcy nie są w tej chwili dostępni, proszę zostaw wiadomość, a my skontaktujemy się z Tobą wkrótce";
  }
  else {
    deparment = 'english';
    onlineGreeting = "Chat with us";
    offlineGreeting = "Our counselors are not available at the moment, please leave a message and we will contact you soon.";
  }

  window.$zopim||(function(d,s){var z=$zopim=function(c){
  z._.push(c)},$=z.s=
  d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
  _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
  $.src='//v2.zopim.com/?';z.t=+new Date;$.
  type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
  z.livechat.departments.setVisitorDeprtment(deparment);
  $zopim(function() {
    $zopim.livechat.setGreetings({
    'online': onlineGreeting,
    'offline': offlineGreeting
    });
  });
</script>
