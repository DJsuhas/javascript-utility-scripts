function validateForm() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Name cannot be empty");
        return false;
    }

    alert("Form submitted successfully");
    return true;
}