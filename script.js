const firstName = document.getElementById('first-name')
const errorElement = document.getElementById('error')
const collegeName = document.getElementById('college-name')
const contact = document.getElementById('contact')
const form = document.getElementById('form')
const examType = document.getElementsByName('exam-type')

form.addEventListener('submit', function (e) {
    messages = []

    if (firstName.value == '' || firstName.value == null) {
        messages.push('First name is required and cannot be empty')
    }
    if (collegeName.value == '' || collegeName.value == null) {
        messages.push('College Name is required and cannot be empty')
    }
    if (contact.value == '' || contact.value == null) {
        messages.push('Contact is required and cannot be empty')
    }
    regex = /\D/
    if (regex.test(contact.value)) {
        messages.push('Contacts must be all digits')
    }
    for (let exam of examType) {
        if (exam.checked) {
            var examSelected = exam.value
            break
        }
    }
    if (typeof examSelected === 'undefined') {
        messages.push('Please select at least one exam type')
    }

    if (messages.length > 0) {
        errorElement.innerHTML = messages.join('<br>')
        e.preventDefault()
    }
})