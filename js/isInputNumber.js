//دا لعدم وضع حروف ف الهواتف او الارقام
var inputFormNumber = document.querySelectorAll('input.number');

for(let i=0 ; i<inputFormNumber.length;i++)
{
  inputFormNumber[i].addEventListener('keyup', function (event) {
    if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
      this.value = this.value.replace(/\D/g, "");
    }
  })
}