import './Contact.css'

const open_new_email = () =>
{
    const subject_form = document.getElementById("contact_me_subject");
    const body_form = document.getElementById("contact_me_body");

    const subject = subject_form.value.trim();
    const body = body_form.value.trim();

    const feedback = document.getElementById("contact_me_feedback");

    if (subject === "" || body === "")
    {
        feedback.textContent = "Invalid input. Please input a subject and body.";
        feedback.style = "display: block; color: #ff5050";

        return;
    }

    const mailto_string = "mailto:gavind2559@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

    window.location.href = mailto_string;

    subject_form.value = "";
    body_form.value = "";

    feedback.textContent = "Opening the email in your default mail program! Thank you!";
    feedback.style = "display: block; color: #77dd77";
}

const Contact = () =>
{
    return (
        <section className="contact_me" id="contact_me">
            <h1 className="contact_me_title">Contact me</h1>
            <div className="contact_me_form">
                <input type="text" id="contact_me_subject" placeholder="Subject" />
                <textarea id="contact_me_body" placeholder="Body" />
                <button type="submit" id="contact_me_send" onClick={open_new_email}>Send email</button>
                <p id="contact_me_feedback"></p>
            </div>
        </section>
    );
}

export default Contact;