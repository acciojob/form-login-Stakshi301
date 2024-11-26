function getFormvalue() {
    //Write your code here
	const form=document.getElementById('form1');
	const Fname=form.elements['fname'].value;
	const Lname=form.elements['lname'].value;
  alert(`${Fname} ${Lname}`);
}
