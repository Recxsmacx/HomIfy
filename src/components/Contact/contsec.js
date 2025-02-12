
export default function ContSec(){
    return(
        <>
        <div className="contact">
            <h1>
                Contact Us
                <br />
                <div>
                <iframe title="office-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.773346239484!2d77.32153985031401!3d28.5688660655307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f13e29ba3f%3A0x491bce2e2ee2d96c!2sGalgotia%20University%20Admissions!5e0!3m2!1sen!2sin!4v1739359923120!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.773346239484!2d77.32153985031401!3d28.5688660655307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f13e29ba3f%3A0x491bce2e2ee2d96c!2sGalgotia%20University%20Admissions!5e0!3m2!1sen!2sin!4v1739359923120!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </h1>
            <div>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Phone"></input>
                <textarea placeholder="Message.." rows={"3"}></textarea>
                <button>Send Message</button>
            </div>
        </div>
        </>
    )
}