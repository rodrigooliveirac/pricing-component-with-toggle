confirma = document.querySelector(".ok");
basico = document.querySelector(".priceBasic");
basicoA = document.querySelector(".priceBasicAnual");
professional = document.querySelector(".priceProfessional");
professionalA = document.querySelector(".priceProfessionalAnual");
master = document.querySelector(".priceMaster");
masterA = document.querySelector(".priceMasterAnual");

confirma.addEventListener('click', mudar);

function mudar(){
    basico.classList.toggle('noite');
    basicoA.classList.toggle('noite');
    professional.classList.toggle('noite');
    professionalA.classList.toggle('noite');
    master.classList.toggle('noite');
    masterA.classList.toggle('noite');
}