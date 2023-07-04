document.querySelector('.signup-form').addEventListener('submit', function(event){
    event.preventDefault()
  });

document.querySelector('input').addEventListener('input', function(){
    const error = document.querySelector('.error')
    const email = document.querySelector('input')

    if (email.value === '' || !email.value.includes('@') || email.value.length < 10) {
        email.classList.add('invalid')
        email.classList.remove('valid')

    }
    else {
        error.style.display = 'none'
        email.classList.remove('invalid')
        email.classList.add('valid')
    }

})

const handleSubmit = () => {
    const signup = document.querySelector(".newsletter")
    const newsletterSuccess = document.querySelector(".newsletter-success")
    const error = document.querySelector('.error')
    const email = document.querySelector('input')

    console.log(email)

    if (email.value === '' || !email.value.includes('@') || email.value.length < 10) {
        error.style.display = 'inline'
    }
    else {
        newsletterSuccess.style.display = 'grid'
        signup.style.display = 'none'
    }
}

const dismiss = () => {
    const signup = document.querySelector(".newsletter")
    const newsletterSuccess = document.querySelector(".newsletter-success")

    signup.style.display = 'grid'
    newsletterSuccess.style.display = 'none'
}