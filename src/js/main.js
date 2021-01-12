const accordions = document.getElementsByClassName("schedule__action");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function(e) {
    accordions[i].classList.toggle('active');
    this.nextElementSibling.classList.toggle('is-open');
  });
}

const rellax = new Rellax('.rellax', {
  wrapper: null,
  round: true,
  vertical: true,
});